const fs = require('fs');
const { join } = require('path');
const { promisify } = require('util');
const withCSS = require('@zeit/next-css');
const withImages = require('next-images');
const withMDX = require('@next/mdx')();

const pkg = require('./package.json');

const copyFile = promisify(fs.copyFile);

const config = {
	exportPathMap: async function(defaultPathMap, { dev, dir, outDir }) {
		if (dev) {
			return defaultPathMap;
		}
		await copyFile(
			join(dir, 'static/.nojekyll'),
			join(outDir, '.nojekyll')
		);
		return defaultPathMap;
	},
	assetPrefix:
		process.env.NODE_ENV === 'production'
			? `https://danburzo.github.io/${pkg.name}`
			: ''
};

module.exports = withMDX(withImages(withCSS(config)));
