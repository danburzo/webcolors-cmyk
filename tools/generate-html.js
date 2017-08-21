var fs = require('fs');

var rgb_colors = JSON.parse(fs.readFileSync('data/json/webcolors-rgb.json', 'utf8')).colors;
var color_sets = JSON.parse(fs.readFileSync('data/json/webcolors-sets.json', 'utf8'));

var css = Object.keys(color_sets).map(key => 
	color_sets[key]
		.map((color,idx) => `.${key} .${rgb_colors[idx].color} { background-color: ${color}; }`)
		.join('\n')
).join('\n\n');

fs.writeFileSync('data/css/webcolors.css', css);