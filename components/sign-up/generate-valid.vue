<template>
  <v-card class="pa-3 text-center">
    <div class="headline">
      Generate Valid Key
    </div>
    <v-card-text>
      <p>
        I wish to generate a MACI keypair (1)
      </p>
      <p>
        This key is used to submit your actual desired votes.
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
        to="vote"
        @click="$store.commit('setKeys')"
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
