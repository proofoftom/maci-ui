<template>
  <v-layout justify-center my-3 column style="max-width: 476px; margin: auto;">
    <v-layout justify-space-between py-3>
      <BuyCredits />
      <CurrentCredits />
    </v-layout>
    <VoteOptions />
  </v-layout>
</template>

<script>
import BuyCredits from '~/components/vote/buy-credits'
import CurrentCredits from '~/components/vote/current-credits'
import VoteOptions from '~/components/vote/vote-options'

export default {
  components: {
    BuyCredits,
    CurrentCredits,
    VoteOptions
  }
}
</script>
