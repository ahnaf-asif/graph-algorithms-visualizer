<template>
  <v-app dark>
    <v-navigation-drawer height="100%" v-model="drawer" :mini-variant="miniVariant" :clipped="clipped" :width="300" fixed app>
      hello world
    </v-navigation-drawer>
    <v-app-bar :clipped-left="clipped" fixed app :elevation="1" color="teal darken-2 white--text">
      <v-app-bar-nav-icon style="color:white;" v-if="$vuetify.breakpoint.xsOnly || $vuetify.breakpoint.smOnly " @click.stop="drawer = !drawer" />
      <router-link class="router-link" to="/">
        <v-toolbar-title v-text="title"/>
      </router-link>

      <v-spacer></v-spacer>
      <Instruction />
      <router-link class="router-link" to="/contact/">Contact Me</router-link>
    </v-app-bar>
    <v-main>
        <router-view />
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
export default {
  components: {Instruction},
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
