export const state = () => ({
  hasKeys: false,
  hasAccess: false,
  web3: false
})

export const actions = {
  connectWallet({ commit }) {
    commit('setWallet')
  }
}

export const mutations = {
  setAccess(state, access) {
    state.hasAccess = access
  },
  setKeys(state) {
    state.hasKeys = true
  },
  setWallet(state) {
    state.web3 = true
  }
}
