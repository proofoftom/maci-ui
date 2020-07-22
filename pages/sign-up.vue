<template>
  <v-layout justify-center my-3>
    <SignUp v-if="step === 1" />
    <GenerateValid v-if="step === 2" />
  </v-layout>
</template>

<script>
import SignUp from '~/components/sign-up/sign-up'
import GenerateValid from '~/components/sign-up/generate-valid'

export default {
  components: {
    GenerateValid,
    SignUp
  },
  data() {
    return {
      step: 1
    }
  },
  created() {
    this.$nuxt.$on('increment-sign-up', () => {
      this.step++
    })
  }
}
</script>
