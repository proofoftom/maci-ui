<template>
  <v-card class="pa-3 text-center">
    <div class="headline">
      Generate Key for Bribes
    </div>
    <v-card-text>
      <p>
        I wish to generate a MACI keypair (0)
      </p>

      <p class="caption">
        This key is used to submit invalid votes from bribes.
      </p>
    </v-card-text>
    <v-card-actions>
      <v-spacer />
      <v-btn>
        Upload
      </v-btn>
      <v-btn
        v-if="keysGenerated"
        color="secondary"
        @click="$nuxt.$emit('increment-sign-up')"
      >
        Download
      </v-btn>
      <v-btn v-else color="primary" @click="generateKeys">
        Generate
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import { Keypair } from 'maci-domainobjs'
import ethers from 'ethers'

export default {
  data() {
    return {
      keysGenerated: false,
      nonce: 0 // TODO: Derive from previous key nonce
    }
  },
  methods: {
    async generateKeys() {
      const provider = new ethers.providers.Web3Provider(web3.currentProvider) // eslint-disable-line
      const signer = provider.getSigner()

      const signature = await signer.signMessage(
        'Creating key pair at nonce: ' + this.nonce
      )

      const { pubKey, privKey } = new Keypair()

      this.$store.commit('localStorage/setKeys', {
        pubKey: pubKey.rawPubKey.toString(),
        privKey: privKey.rawPrivKey.toString(),
        salt: signature
      })

      this.keysGenerated = true
    }
  }
}
</script>
