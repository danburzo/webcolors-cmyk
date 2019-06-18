let culori = require('culori');
let fs = require('fs');
let { convert } = require('node-lcms');

// CSS Named Colors
let COLORS = Object.keys(culori.colorsNamed)
	.sort()
	.filter(c => !c.match(/grey/i));

// CMYK Profiles
const PROFILES = ['pso-coated-v3', 'pso-uncoated-v3-fogra52'];

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

const convertColor = (original, cmyk_profile) => {
	let profile_path = require.resolve(`../profiles/${cmyk_profile}.icc`);
	let rgb_to_cmyk = convert({ profile_out: profile_path });
	let cmyk_to_rgb = convert({ profile_in: profile_path });
	let converted = arr_to_hex(cmyk_to_rgb(rgb_to_cmyk(rgb_to_arr(original))));
	return { original, converted };
};

PROFILES.forEach(profile => {
	let res = COLORS.map(color => convertColor(color, profile));
	fs.writeFileSync(`data/${profile}.json`, JSON.stringify(res, null, '\t'));
});
