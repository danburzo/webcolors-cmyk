const fs = require('fs');
const { join } = require('path');
const { promisify } = require('util');
const withCSS = require('@zeit/next-css');

const pkg = require('./package.json');

const copyFile = promisify(fs.copyFile);

const config = {};

// if (process.env.NODE_ENV === 'production') {
// 	config.exportPathMap = async function(defaultPathMap, { dev, dir, outDir }) {
// 		if (dev) {
// 			return defaultPathMap;
// 		}
// 		await copyFile(
// 			join(dir, 'static/.nojekyll'),
// 			join(outDir, '.nojekyll')
// 		);
// 		return defaultPathMap;
// 	};
// 	config.assetPrefix = `/${pkg.main}`;
// };

module.exports = withCSS(config);
