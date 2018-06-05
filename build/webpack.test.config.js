const webpack = require("webpack")
const merge = require("webpack-merge")

const HTMLPlugin = require("html-webpack-plugin")

const base = require("./webpack.base.config")
const config = require("../config")

const VueSSRClientPlugin = require("vue-server-renderer/client-plugin")

// minify options to be used in production mode
// https://github.com/kangax/html-minifier#options-quick-reference
const minifyOptions = {
	collapseWhitespace: true,
	removeComments: true,
	ignoreCustomComments: [/vue-ssr-outlet/]
}

const clientConfig = merge(base, {
	plugins: [
		// strip dev-only code in Vue source
		new webpack.DefinePlugin({
			"process.env.VUE_ENV": "'client'"
		}),
		// generate output HTML
		new HTMLPlugin({
			template: "src/index.template.html",
			minify: config.isProduction ? minifyOptions : {}
		}),
		new VueSSRClientPlugin()
	]
})


module.exports = clientConfig
