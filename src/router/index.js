import Vue from "vue"
import Router from "vue-router"
const A = () => System.import("components/A")
const A2 = () => System.import("components/A2")
const B = () => System.import("components/B")
Vue.use(Router)

export function createRouter() {
  let routes = [{
      name: "A",
      path: "/",
      component: A
    },
    {
      name: "A2",
      path: "/a2",
      component: A2
    },
    {
      name: "B",
      path: "/b",
      component: B
    }
  ]

  let router = new Router({
    mode: "history",
    routes
  })
  return router
}
