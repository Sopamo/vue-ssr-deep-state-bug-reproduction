const config = require("./config")

module.exports = {
	parserOptions: {
		ecmaVersion: 6,
		ecmaFeatures: {
		  experimentalObjectRestSpread: true
		},
		sourceType: "module"
	},
	env: {
		es6: true
	},
	extends: "google",

	// required to lint *.vue files
	plugins: [
		"html"
	],

	settings: {
		"import/resolver": {
			"webpack": {
				"config": "build/webpack.base.conf.js"
			}
		}
	},

	// add your custom rules here
	rules: {
		// don"t allow semicolons
		"semi": ["error", "never"],

		// don"t require comma in the last line of an object/dictionary declaration
		"comma-dangle": ["error", "never"],

		// ignore max-len for comments
		"max-len": 0,

		// force space after and before curly braces in object/dict declarations
		"object-curly-spacing": ["error", "always"],

		// allow debugger; instruction during development
		"no-debugger": config.isProduction ? 2 : 0,

		// force "===" in comparisons when ambiguous
		"eqeqeq": ["error", "smart"],

		"quotes": 0,

		"indent": ["error", 2],
		"no-tabs": 0,
		"keyword-spacing": 0,

		"require-jsdoc": 0,
		"eol-last": 0,

		"number-leading-zero": 0,
		"at-rule-empty-line-before": 0,
		"no-missing-end-of-source-newline": 0,
		"indent": 0,
		"object-curly-spacing": 0,
		"arrow-parens": 0,
		"valid-jsdoc": 0,

		"new-cap": ["error", { "capIsNew": false }]
	}
}
