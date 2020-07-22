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
        Cancel
      </v-btn>
      <v-btn
        v-if="keysGenerated"
        color="secondary"
        @click="$nuxt.$emit('increment-sign-up')"
      >
        Download
      </v-btn>
      <v-btn v-else color="primary" @click="keysGenerated = true">
        Generate
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      keysGenerated: false
    }
  }
}
</script>
