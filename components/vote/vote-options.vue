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
            <ProjectItem :project="project" />
          </tr>
        </tbody>
      </template>
    </v-simple-table>
  </v-layout>
</template>

<script>
import ProjectItem from './project-item'

export default {
  components: {
    ProjectItem
  },
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
