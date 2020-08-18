export const state = () => ({
  pubKey: null,
  privKey: null
})

export const mutations = {
  setKeys(state, keyPair) {
    state.pubKey = keyPair.pubKey
    state.privKey = keyPair.privKey
  }
}
