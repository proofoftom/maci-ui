<template>
  <v-card class="pa-3 text-center">
    <div class="headline">
      Generate Valid Key
    </div>
    <v-card-text>
      <p>
        I wish to generate a MACI keypair (1)
      </p>
      <p class="caption">
        This key is used to submit your actual desired votes.
      </p>
    </v-card-text>
    <v-card-actions>
      <v-spacer />
      <v-btn>
        Upload
      </v-btn>
      <v-btn v-if="keysGenerated" color="secondary" @click="saveAndRedirect">
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

export default {
  data() {
    return {
      keysGenerated: false
    }
  },
  methods: {
    generateKeys() {
      console.log(new Keypair())
      this.keysGenerated = true
    },
    saveAndRedirect() {
      this.$store.commit('setKeys')
      this.$nuxt.$router.push('/vote')
    }
  }
}
</script>
