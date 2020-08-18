import ethers from 'ethers'
import { Keypair } from 'maci-domainobjs'

export const state = () => ({
  hasKeys: false,
  hasAccess: false,
  web3: false
})

export const actions = {
  connectWallet({ commit }) {
    commit('setWallet')
  },
  async createKeypair(nonce) {
    const provider = new ethers.providers.Web3Provider(web3.currentProvider) // eslint-disable-line
    const signer = provider.getSigner()

    const signature = await signer.signMessage(
      'Creating key pair at nonce: ' + nonce
    )

    const { pubKey, privKey } = new Keypair()

    this.$store.commit('localStorage/setKeys', {
      pubKey: pubKey.rawPubKey.toString(),
      privKey: privKey.rawPrivKey.toString(),
      salt: signature
    })
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
