let fs = require('fs');
let { join } = require('path');

let culori = require('culori');
let fg = require('fast-glob');
let { convert } = require('node-lcms');
let icc = require('icc');

const ICC_PROFILES_DIR =
	'/Library/Application Support/Adobe/Color/Profiles/Recommended';

// CSS Named Colors
let COLORS = Object.keys(culori.colorsNamed)
	.sort()
	.filter(c => !c.match(/grey/i));

const hex = culori.formatter('hex');

const rgb_to_arr = str => {
	let c = culori.rgb(str);
	return [c.r * 255, c.g * 255, c.b * 255];
};

const arr_to_hex = arr => {
	return culori.formatter('hex')({
		mode: 'rgb',
		r: arr[0] / 255,
		g: arr[1] / 255,
		b: arr[2] / 255
	});
};

const convert_opts = {
	intent: 11,
	bpc: true
};

const converter = cmyk_profile => {
	let rgb_to_cmyk = convert({ ...convert_opts, profile_out: cmyk_profile });
	let cmyk_to_rgb = convert({ ...convert_opts, profile_in: cmyk_profile });
	return name => {
		let value = arr_to_hex(cmyk_to_rgb(rgb_to_cmyk(rgb_to_arr(name))));
		return { name, value };
	};
};

let profiles = fg
	.sync('*.icc', {
		cwd: ICC_PROFILES_DIR,
		caseSensitiveMatch: false,
		exclude: ['*rgb*.icc', 'p3.icc']
	})
	.map(file => {
		let profile = join(ICC_PROFILES_DIR, file);
		let info = icc.parse(fs.readFileSync(profile));
		if (info.colorSpace === 'RGB') {
			return undefined;
		}
		let conv = converter(profile);
		return {
			id: file.replace(/\.icc$/, '').toLowerCase(),
			name: info.description,
			colors: COLORS.map(color => conv(color))
		};
	})
	.filter(p => p);

// Profiles metadata
fs.writeFileSync(
	'data/profiles.json',
	JSON.stringify(profiles.map(({ name, id }) => ({ name, id })), null, '\t')
);

// Individual profile content
profiles.forEach(profile => {
	fs.writeFileSync(
		`data/colors/${profile.id}.json`,
		JSON.stringify(profile, null, '\t')
	);
});
