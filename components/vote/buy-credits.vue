<template>
  <v-dialog v-model="dialog" persistent max-width="420px">
    <template v-slot:activator="{ on, attrs }">
      <v-btn v-bind="attrs" v-on="on">
        Buy Credits
      </v-btn>
    </template>

    <v-card class="pa-3 text-center">
      <v-card-title class="headline">
        Buy extra voice credits
      </v-card-title>
      <v-card-text>
        With x ETH, you can have y voice credits.
      </v-card-text>
      <v-slider
        hint="Explanation: e.g. max deposit of 1 ETH gets you z voice credits"
        persistent-hint
      />
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn @click="dialog = false">
          Cancel
        </v-btn>
        <v-btn color="primary" @click="dialog = false">
          Ok
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  data() {
    return {
      dialog: false
    }
  }
}
</script>

<style lang="scss" scoped></style>
