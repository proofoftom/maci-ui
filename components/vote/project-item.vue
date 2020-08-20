<template>
  <fragment>
    <td>{{ project.name }}</td>
    <td class="text-center">
      <v-dialog v-model="project.dialog" persistent max-width="420px">
        <template v-slot:activator="{ on, attrs }">
          <v-btn v-bind="attrs" v-on="on">
            Vote
          </v-btn>
        </template>

        <v-card class="pa-3 text-center">
          <v-card-title class="headline">
            Vote for {{ project.name }}
          </v-card-title>
          <v-card-text>
            You have: 90 voice credits
          </v-card-text>
          <v-slider
            hint="To cast 9 votes, you will spend 81 voice credits and have 9 voice credits left."
            persistent-hint
          />
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn @click="project.dialog = false">
              Cancel
            </v-btn>
            <v-btn color="primary" @click="project.dialog = false">
              Ok
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </td>
  </fragment>
</template>

<script>
export default {
  props: {
    project: {
      type: Object,
      default: () => {
        return { name: '', dialog: '' }
      }
    }
  }
}
</script>

<style lang="scss" scoped></style>
