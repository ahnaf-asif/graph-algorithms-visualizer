<template>
  <v-app dark>
    <v-navigation-drawer height="100%" v-model="drawer" stateless :mini-variant="miniVariant" :clipped="clipped" :width="300" fixed app color="cyan lighten-4">

      <Instruction />

      <SidebarDetails></SidebarDetails>

    </v-navigation-drawer>
    <v-app-bar :clipped-left="clipped" fixed app :elevation="1" color="light-blue darken-2 white--text">
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

@import './assets/animations.css';

.router-link{
  text-decoration: none;
  color: white !important;
  text-transform: uppercase;
}
</style>


<script>
import Instruction from "@/components/Instruction";
import Home from "@/views/Home";
import SidebarDetails from './components/SidebarDetails.vue';

export default {
  components: {Instruction, Home, SidebarDetails},
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
