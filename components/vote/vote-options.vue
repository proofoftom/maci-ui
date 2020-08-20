<template>
  <v-layout justify-center>
    <v-simple-table
      fixed-header
      height="300px"
      style="max-width: 500px"
      class="flex-grow-1"
    >
      <template v-slot:default>
        <thead>
          <tr>
            <th class="text-left">
              Project
            </th>
            <th class="text-center">
              Set Votes
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="project in projects" :key="project.name">
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
          </tr>
        </tbody>
      </template>
    </v-simple-table>
  </v-layout>
</template>

<script>
export default {
  data() {
    return {
      projects: [
        {
          name: 'Frozen Yogurt',
          calories: 159,
          dialog: false
        },
        {
          name: 'Ice cream sandwich',
          calories: 237,
          dialog: false
        },
        {
          name: 'Eclair',
          calories: 262,
          dialog: false
        },
        {
          name: 'Cupcake',
          calories: 305,
          dialog: false
        },
        {
          name: 'Gingerbread',
          calories: 356,
          dialog: false
        },
        {
          name: 'Jelly bean',
          calories: 375,
          dialog: false
        },
        {
          name: 'Lollipop',
          calories: 392,
          dialog: false
        },
        {
          name: 'Honeycomb',
          calories: 408,
          dialog: false
        },
        {
          name: 'Donut',
          calories: 452,
          dialog: false
        },
        {
          name: 'KitKat',
          calories: 518,
          dialog: false
        }
      ]
    }
  }
}
</script>
