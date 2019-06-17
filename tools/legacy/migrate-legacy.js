let fs = require('fs');

let legacy_rgb = require('../__data/json/webcolors-rgb.json');
let legacy_sets = require('../__data/json/webcolors-sets.json');

let colors = legacy_rgb.colors;

let keys = ['fogra_coated', 'fogra_uncoated', 'web_coated', 'web_uncoated'];

const sort_set = (a, b) => {
	if (a.original < b.original) return -1;
	if (b.original > a.original) return 1;
	return 0;
};

Object.keys(legacy_sets)
	.filter(k => k !== 'rgb')
	.forEach(k => {
		let colorset = legacy_sets[k];
		let output = colorset
			.map((c, idx) => ({
				original: colors[idx].color.toLowerCase(),
				converted: c
			}))
			.sort(sort_set);
		fs.writeFileSync(
			`./data/legacy/${k}.json`,
			JSON.stringify(output, null, 2)
		);
	});
