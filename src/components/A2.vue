<template>
<div>
  A2<br>
  <div :class="[testRoot ? 'true' : 'false']">root element</div>
  <div v-show="testDeep">deep helper</div>
  <div :class="[testDeep ? 'true' : 'false']">deep element</div>
</div>
</template>

<script>
  export default {
    computed: {
      testRoot: {
        get () {
          return this.$store.state.testRoot
        },
        set (value) {
          this.$store.commit('SET_TEST', value)
        }
      },
      testDeep: {
        get () {
          return this.$store.state.deep.test
        },
        set (value) {
          this.$store.commit('SET_TEST_DEEP', value)
        }
      }
    }
  }
</script>