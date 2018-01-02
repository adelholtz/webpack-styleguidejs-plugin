# webpack-styleguidejs-plugin

Webpack plugin for styleguidejs.

For the full documentation of available options see:
 https://github.com/EightMedia/styleguide.js
 
 ## How to use
 
 ```
 const StyleGuidePlugin = require("webpack-styleguidejs-plugin");

module.exports = {
	plugins: [
		new StyleGuidePlugin({outputFile: 'path'}) // defaultpath is public/styleguide.html
  ]
};
 ```
