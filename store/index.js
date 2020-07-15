export const state = () => ({
  authUser: false,
  hasToken: false
})

export const mutations = {
  setToken(state) {
    state.hasToken = true
  }
}
