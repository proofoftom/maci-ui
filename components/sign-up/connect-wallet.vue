<template>
  <v-card class="pa-3 text-center">
    <div class="headline">
      Connect Wallet
    </div>
    <v-card-text>
      <p>
        Please connect an Ethereum wallet to proceed.
      </p>
    </v-card-text>
    <v-card-actions>
      <v-spacer />
      <v-btn color="primary" @click="connect">
        Connect
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  methods: {
    async connect() {
      await this.$store.dispatch('connectWallet')
      this.$nuxt.$router.push('/sign-up')
    }
  }
}
</script>
