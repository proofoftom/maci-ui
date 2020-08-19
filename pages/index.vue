<template>
  <v-layout justify-center my-3>
    <ConnectWallet v-if="!$store.state.account" />
    <SwitchWallet v-else />
  </v-layout>
</template>

<script>
import ConnectWallet from '~/components/sign-up/connect-wallet'
import SwitchWallet from '~/components/sign-up/switch-wallet'

export default {
  components: {
    ConnectWallet,
    SwitchWallet
  }
}
</script>
