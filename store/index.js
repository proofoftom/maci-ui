export const state = () => ({
  hasKeys: false,
  hasAccess: false
})

export const mutations = {
  setAccess(state, access) {
    state.hasAccess = access
  },
  setKeys(state) {
    state.hasKeys = true
  }
}
