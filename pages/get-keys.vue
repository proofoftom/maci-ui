<template>
  <v-layout justify-center my-3>
    <SignUp v-if="step === 1" />
    <GenerateValid v-if="step === 2" />
  </v-layout>
</template>

<script>
import SignUp from '~/components/get-keys/generate-invalid'
import GenerateValid from '~/components/get-keys/generate-valid'

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
    this.$nuxt.$on('increment-get-keys', () => {
      this.step++
    })
  }
}
</script>
