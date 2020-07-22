<template>
  <v-card class="pa-3 text-center">
    <div class="headline">
      Switch Wallet
    </div>
    <v-card-text>
      <p>
        Please switch to an Ethereum account that owns an {{ tokenSymbol }} NFT
        token
      </p>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      tokenSymbol: 'ETHDEN'
    }
  }
}
</script>
