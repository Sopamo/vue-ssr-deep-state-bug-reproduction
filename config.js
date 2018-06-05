// the environment that will be considered when building the skin, either `production` or `development`
const nodeEnv = process.env.NODE_ENV || "development"

module.exports = {
	nodeEnv,
	isProduction: nodeEnv === "production" || nodeEnv === "staging",
  isTesting: process.env.TESTING === "1",
  stripeKey: nodeEnv === "production" ? "" : "",
	server: {
		port: process.env.SERVER_PORT || 8080
  }
}
