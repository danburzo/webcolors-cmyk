let fs = require('fs');
let { join } = require('path');
let fg = require('fast-glob');

let template = (comment, colors) => `
/* ${comment} */

:root {
	${colors.map(c => `--${c.name}: ${c.value};`).join('\n\t')}
}`;

let jsons = fg
	.sync(['colors/*.json'], { cwd: join(__dirname, '../data') })
	.map(file => {
		let filepath = join(__dirname, '../data', file);
		let obj = JSON.parse(fs.readFileSync(filepath), 'utf8');
		fs.writeFileSync(
			filepath.replace(/\.json$/, '.css'),
			template(obj.name, obj.colors)
		);
	});
