<template>
  <v-app dark>
    <v-app-bar fixed app>
      <v-btn @click="toggleAccess">
        <v-toolbar-title>MACI UI</v-toolbar-title>
      </v-btn>
      <v-spacer />
      <v-btn icon>
        <v-icon>mdi-github</v-icon>
      </v-btn>
    </v-app-bar>
    <v-main>
      <v-container>
        <nuxt />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  data() {
    return {}
  },
  methods: {
    toggleAccess() {
      this.$store.commit('setAccess', !this.$store.state.hasAccess)
      if (this.$store.state.hasAccess) {
        this.$nuxt.$router.push('sign-up')
      } else {
        this.$nuxt.$router.push('/')
      }
    }
  }
}
</script>
