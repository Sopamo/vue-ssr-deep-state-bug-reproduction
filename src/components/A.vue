<template>
<div>
  A<br>
  <div :class="[testRoot ? 'true' : 'false']">root element: {{ testRoot ? 'true' : 'false' }}</div>
  <div :class="[testDeep ? 'true' : 'false']">deep element: {{ testDeep ? 'true' : 'false' }}</div>
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