let { spawn } = require('child_process');
let { join } = require('path');

const profile_path = path =>
	path.match(/^\*/) ? path : join(__dirname, '../profiles', `${path}.icc`);

module.exports = function(
	profile_in = '*srgb',
	profile_out = '*srgb',
	color,
	callback
) {
	let cmd = spawn(
		'transicc',
		[
			'-i',
			profile_path(profile_in),
			'-o',
			profile_path(profile_out)
			// '-t0'
		],
		{
			cwd: __dirname
		}
	);

	cmd.stdin.write(`${color.join('\n') + '\n'}`);
	cmd.stdin.end();

	let response;

	cmd.stdout.on('data', data => {
		response = new String(data)
			.split(' ')
			.filter(p => p.match(/=/))
			.map(p => +p.split('=')[1]);
	});

	cmd.on('close', code => {
		callback(null, response);
	});
};
