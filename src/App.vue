<template>
  <v-app dark>
    <v-navigation-drawer height="100%" v-model="drawer" stateless :mini-variant="miniVariant" :clipped="clipped" :width="300" fixed app color="cyan lighten-4">

      <Instruction />

      <SidebarDetails></SidebarDetails>

    </v-navigation-drawer>
    <v-app-bar :height="50" :clipped-left="clipped" fixed app :elevation="1" color="light-blue darken-2 white--text">
      <v-app-bar-nav-icon ref="appbar" style="color:white;" v-if="$vuetify.breakpoint.xsOnly || $vuetify.breakpoint.smOnly " @click.stop="drawer = !drawer" />
      <router-link class="router-link" to="/">
        <v-toolbar-title v-text="title"/>
      </router-link>

      <v-spacer></v-spacer>

    </v-app-bar>
    <v-main >
        <div class="home" ref="home">
          <Home  :n="n" :m="m" :boxLength="boxLength" />
        </div>
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
.home{
  display: flex;
  align-items: center;
}
</style>


<script>
import { mapGetters, mapActions } from 'vuex';
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
      title: '2D Graph Algorithm Visualizer',
      instruction: true,
      canvasHeight: 0,
      canvasWidth: 0,
    }
  },
  computed: {
    ...mapGetters(['n', 'm', 'boxLength'])
  },
  mounted(){
    this.canvasHeight = window.innerHeight-100;
    this.canvasWidth = window.innerWidth;
    
    if(this.canvasWidth >= 960){
      this.canvasWidth -= 300;
    }
    // console.log(this.canvasHeight, this.canvasWidth);
    this.setRowsAndColumns({canvasHeight: this.canvasHeight, canvasWidth: this.canvasWidth, numberOfCols: 20});
  },
  methods: {
    ...mapActions(['setRowsAndColumns']),
  }
}
</script>
