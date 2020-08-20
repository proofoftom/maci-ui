<template>
  <v-card class="pa-3 text-center">
    <div class="headline">
      Key for voting
    </div>
    <v-card-text>
      <p>I wish to generate a MACI keypair ({{ nonce }})</p>
      <p class="caption">
        This key is used to submit your valid votes.
      </p>
    </v-card-text>
    <v-card-actions>
      <v-spacer />
      <v-file-input
        v-if="!keysGenerated"
        id="uploadedKey"
        hint="Upload your saved private key"
        label="Upload"
        placeholder="maci-key-0.txt"
        rounded
        persistent-hint
      />
      <v-btn
        v-if="!fileUploaded && !keysGenerated"
        color="primary"
        @click="generateKeys"
      >
        Generate
      </v-btn>
      <v-btn v-else color="secondary" @click="downloadPrivateKey">
        Download
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import saveAs from 'file-saver'

export default {
  data() {
    return {
      fileUploaded: false,
      keysGenerated: false,
      nonce: 1 // TODO: Move to Vuex Localstorage
    }
  },
  methods: {
    async generateKeys() {
      await this.$store.dispatch('createKeypair', {
        nonce: this.nonce,
        type: 'setValidKeys'
      })
      this.keysGenerated = true
    },
    downloadPrivateKey() {
      const content = this.$store.state.localStorage.validKeys.privKey
      const filename = `maci-key-${this.nonce}.txt`
      const blob = new Blob([content], {
        type: 'text/plain;charset=utf-8'
      })

      saveAs(blob, filename)

      this.setAndRedirect()
    },
    setAndRedirect() {
      this.$store.commit('setKeys')
      this.$nuxt.$router.push('/vote')
    }
  }
}
</script>
