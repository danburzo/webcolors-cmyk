var fs = require('fs');
var ejs = require('ejs');
var template = fs.readFileSync('data/templates/template.ejs', 'utf8');
var colors = JSON.parse(fs.readFileSync('data/json/webcolors-rgb.json', 'utf8'));
var output = ejs.render(template, {
	colors: colors.colors
});

fs.writeFileSync('index.html', output);