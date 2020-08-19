import ethers from 'ethers'
import { Keypair } from 'maci-domainobjs'

export const state = () => ({
  account: '',
  hasAccess: false,
  hasKeys: false
})

export const actions = {
  async connectWallet({ commit }) {
    if (!this.$provider) {
      return
    }
    let accounts
    try {
      accounts = await this.$provider.request({ method: 'eth_requestAccounts' })
    } catch (error) {
      return
    }
    commit('setAccount', accounts[0])
  },
  async createKeypair({ commit }, nonce) {
    const provider = new ethers.providers.Web3Provider(this.$provider)
    const signer = provider.getSigner()

    const signature = await signer.signMessage(
      'Creating key pair at nonce: ' + nonce
    )

    const { pubKey, privKey } = new Keypair()

    commit('localStorage/setKeys', {
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
  setAccount(state, account) {
    state.account = account
  }
}
