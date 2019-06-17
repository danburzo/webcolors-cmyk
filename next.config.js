const isProd = (process.env.NODE_ENV || 'production') === 'production';

const withCSS = require('@zeit/next-css');
module.exports = withCSS({
	exportPathMap: function() {
		return {
			'/': { page: '/' }
		};
	},
	assetPrefix: isProd ? '/webcolors-cymk' : ''
});
