<template>
  <v-card class="pa-3 text-center">
    <div class="headline">
      Switch Wallet
    </div>
    <v-card-text>
      <p>
        Please switch to an Ethereum account that owns an {{ nftToken }} NFT
        token
      </p>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      nftToken: 'XYZ'
    }
  },
  mounted() {
    setTimeout(() => {
      this.$store.commit('setToken')
      this.$router.push('/sign-up')
    }, 1000)
  }
}
</script>
