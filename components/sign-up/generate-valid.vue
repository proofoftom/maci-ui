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
      <v-btn color="primary">
        Sign
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      nftToken: 'XYZ'
    }
  }
}
</script>
