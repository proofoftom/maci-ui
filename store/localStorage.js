export const state = () => ({
  bribeKeys: {
    pubKey: '',
    privKey: ''
  },
  validKeys: {
    pubKey: '',
    privKey: ''
  }
})

export const mutations = {
  setBribeKeys(state, keyPair) {
    state.bribeKeys = { ...keyPair }
  },
  setValidKeys(state, keyPair) {
    state.validKeys = { ...keyPair }
  }
}
