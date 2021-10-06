<template>
  <v-app dark>
    <v-navigation-drawer height="100%" v-model="drawer" stateless :mini-variant="miniVariant" :clipped="clipped" :width="300" fixed app>

      <Instruction />
      

    </v-navigation-drawer>
    <v-app-bar :clipped-left="clipped" fixed app :elevation="1" color="teal darken-2 white--text">
      <v-app-bar-nav-icon style="color:white;" v-if="$vuetify.breakpoint.xsOnly || $vuetify.breakpoint.smOnly " @click.stop="drawer = !drawer" />
      <router-link class="router-link" to="/">
        <v-toolbar-title v-text="title"/>
      </router-link>

      <v-spacer></v-spacer>

    </v-app-bar>
    <v-main>
        <Home />
    </v-main>
  </v-app>
</template>

<style>
.router-link{
  text-decoration: none;
  color: white !important;
  text-transform: uppercase;
}
</style>


<script>
import Instruction from "@/components/Instruction";
import Home from "@/views/Home";

export default {
  components: {Instruction, Home},
  data () {
    return {
      clipped: true,
      drawer: window.innerWidth > 900,
      fixed: false,
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Graph Algorithm Visualizer',
      instruction: true
    }
  },
  watch : {
  }
}
</script>
