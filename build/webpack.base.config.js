const path = require("path")
const webpack = require("webpack")

const FriendlyErrorsPlugin = require("friendly-errors-webpack-plugin")
const StringReplacePlugin = require("string-replace-webpack-plugin")

const config = require("../config")

const commonPlugins = [
  new StringReplacePlugin(),
  new webpack.DefinePlugin({
    "process.env.NODE_ENV": JSON.stringify(config.nodeEnv),
    "PRODUCTION": config.isProduction,
    "process.env.TESTING": config.isTesting,
    "process.env.STRIPE_KEY": JSON.stringify(config.stripeKey)
  }),
  new webpack.ContextReplacementPlugin(/moment[\/\\]locale$/, /en-gb\.js|de\.js/)
]

module.exports = {
  devtool: config.isProduction ?
    false :
    "inline-source-map",

  entry: {
    app: "./src/entry-client.js"
  },

  output: {
    path: path.resolve(__dirname, "../dist"),
    publicPath: "/dist/",
    filename: "js/[name].[chunkhash:16].js"
  },

  resolve: {
    alias: {
      "static": path.resolve(__dirname, "../static"),
      "src": path.resolve(__dirname, "../src"),
      "components": path.resolve(__dirname, "../src/components"),
      "images": path.resolve(__dirname, "../src/images"),
      "router": path.resolve(__dirname, "../src/router"),
      "store": path.resolve(__dirname, "../src/store"),
      "styles": path.resolve(__dirname, "../src/styles"),
      "mixins": path.resolve(__dirname, "../src/mixins"),
      "views": path.resolve(__dirname, "../src/views"),
      "@": path.resolve(__dirname, "../src")
    },
    extensions: [".js", ".vue", ".scss"]
  },
  resolveLoader: {
    alias: {
      "scss-loader": "sass-loader"
    }
  },
  module: {
    noParse: /es6-promise\.js$/, // avoid webpack shimming process
    rules: [
      {
        test: /\.vue$/,
        loader: "vue-loader",
        options: {
          preserveWhitespace: false,
          postcss: [
            require("autoprefixer")({
              browsers: ["last 3 versions"]
            }),
            require("cssnano")
          ]
        }
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.(png|jpe?g|gif|ico)(\?.*)?$/,
        loader: "url-loader",
        options: {
          limit: 10000,
          name: "img/[name].[hash:16].[ext]"
        }
      },
      {
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        loader: "url-loader?limit=10000"
      }
    ]
  },

  performance: {
    maxEntrypointSize: 250000,
    hints: config.isProduction ? "warning" : false
  },

  plugins: config.isProduction ? commonPlugins : commonPlugins.concat([
    new FriendlyErrorsPlugin()
  ])
}
