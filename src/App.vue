<template>
  <div id="app">
    <router-link to="/">Go to A</router-link><br>
    <router-link to="/a2">Go to A2</router-link><br>
    <router-link to="/b">Go to B</router-link>
    <router-view></router-view>
  </div>
</template>

<style lang="scss">
div.true {
  background: red;
  color: white;
}
div.false {
  color: green;
}
</style>
