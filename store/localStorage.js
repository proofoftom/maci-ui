export const state = () => ({
  publicKey: null,
  privateKey: null
})

export const mutations = {
  setKeys(state, keyPair) {
    state.publicKey = keyPair.pubKey
    state.privateKey = keyPair.privKey
  }
}
