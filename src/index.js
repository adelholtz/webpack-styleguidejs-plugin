/**
 * Webpack plugin for styleguidejs
 * for the full documentatino of available options see:
 *      https://github.com/EightMedia/styleguide.js
 *
 */

function StyleGuidePlugin(options) {
	this.options = {
		// extraCss: ['append-custom.css'],
		// extraJs: ['jquery.js'],
		// templateCss: "styleguide/style.css"	},
		// templateJs: "styleguide/script.js",
		// template: "styleguide/template.jade",
		// beautifyHtml: {
		// 	preserve_newlines: false // see https://www.npmjs.com/package/js-beautify
		// },
		outputFile: "public/styleguide.html"
	};
	Object.assign(this.options, options);
}

StyleGuidePlugin.prototype.apply = function(compiler) {
	let options = this.options;
	compiler.plugin('emit', function(compilation, callback) {
		let StyleGuide = require('styleguidejs');
		let sg = new StyleGuide();

		for (var filename in compilation.assets) {
			if(filename.match("css")){
				sg.addSource(compilation.assets[filename].source());
			}
		}

		sg.render(options);

		callback();
	});
};

module.exports = StyleGuidePlugin;