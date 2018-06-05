import { createApp } from "./app"

// This exported function will be called by `bundleRenderer`.
// This is where we perform data-prefetching to determine the
// state of our application before actually rendering it.
// Since data fetching is async, this function is expected to
// return a Promise that resolves to the app instance.
export default (context) => {
	return new Promise((resolve, reject) => {
		const { app, router } = createApp(context)
		router.push(context.url)

		// wait until router has resolved possible async hooks
		router.onReady(() => {
			resolve(app)
		}, reject)
	})
}
