<template>
  <v-app dark>
    <v-app-bar fixed app>
      <v-btn to="/">
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
  }
}
</script>
