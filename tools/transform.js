let transicc = require('./transform-icc');
let culori = require('culori');
let fs = require('fs');

// CSS Named Colors
let COLORS = Object.keys(culori.colorsNamed)
	.sort()
	.filter(c => !c.match(/grey/i));

// CMYK Profiles
const PROFILES = ['pso-coated-v3', 'pso-uncoated-v3-fogra52'];

// RGB Profile to use
const RGB_PROFILE = '*srgb';

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

const convertColor = (color, cmyk_profile = 'cmyk') =>
	new Promise((resolve, reject) => {
		// prepare RGB color for transicc()
		let rgb_arr = rgb_to_arr(color);

		transicc(RGB_PROFILE, cmyk_profile, rgb_arr, (err, res) => {
			if (err) {
				reject(err);
				return;
			}

			// transicc() will return a result array
			// of more than 4 items, which breaks the
			// subsequent call. Trim it down.
			let cmyk_arr = res.slice(0, 4);

			transicc(cmyk_profile, RGB_PROFILE, cmyk_arr, (err, res) => {
				if (err) {
					reject(err);
					return;
				}

				resolve({
					original: color,
					converted: arr_to_hex(res)
				});
			});
		});
	});

const convert = (colors, profile) =>
	colors.reduce(
		(chain, color) =>
			chain.then(res =>
				convertColor(color, profile).then(color => [...res, color])
			),
		Promise.resolve([])
	);

PROFILES.forEach(profile => {
	convert(COLORS, profile)
		.then(res =>
			fs.writeFileSync(
				`data/${profile}.json`,
				JSON.stringify(res, null, 2)
			)
		)
		.catch(err => console.error(err));
});
