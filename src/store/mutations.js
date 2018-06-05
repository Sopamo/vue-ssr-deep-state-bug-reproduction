export default {
  SET_TEST(state, test) {
    state.test = test
  },
  SET_TEST_DEEP(state, test) {
    state.deep.test = test
  }
}
