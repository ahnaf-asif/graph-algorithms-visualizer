<template >
  <div class="grid" ref="home" style="display:flex;flexd-rection: row;flex-wrap:wrap;">
    <div v-for="cc in m" :key="cc">
      <GridBoxComponent 
        v-for="rr in n" 
        :key="rr" 
        :size="boxLength" 
        :row="rr" 
        :col="cc"
        :boxDetails="findBoxDetails(rr,cc)"
        ></GridBoxComponent>
    </div> 
  </div>  

</template>

<style lang="scss">
.grid{
  height: 89.8vh;
  overflow-x:hidden !important;
  overflow-y:hidden !important;
  // border-left: 2px solid rgb(0, 158, 197);
  // border-top: 2px solid rgb(0, 158, 197);
}
</style>

<script>
  
  import GridBoxComponent from '../components/GridBoxComponent.vue';
  import { mapGetters, mapActions } from 'vuex';

  export default {
    name: 'Home',
    components: {
      GridBoxComponent
    },
    data(){
      return {
        canvasHeight: 0,
        canvasWidth: 0,
        n: 0, // this is the number of rows 
        m: 0, // this is the number of columns
        boxLength: 0,
      }
    },
    mounted(){
      this.canvasHeight = this.$refs.home.clientHeight;
      this.canvasWidth = this.$refs.home.clientWidth;
      
      if(this.canvasWidth >= 960){
        this.canvasWidth -= 300;
      }
      if(this.canvasWidth <= 500){
        this.m = 20;
      }else if(this.canvasWidth <= 950){
        this.m = 30;
      }else this.m = 40;


      this.boxLength = this.canvasWidth/this.m;
      this.n = Math.ceil(this.canvasHeight/this.boxLength)-1;
      
      this.setRowsAndColumns({rows: this.n, cols: this.m});
      // console.log(this.n, this.m);
      
    },
    computed: {
      ...mapGetters(['currentMode', 'grid']),
    },
    methods: {
      ...mapActions(['setRowsAndColumns']),
      findBoxDetails(r, c){
        return this.grid[r][c];
      }
    }
    
  }
</script>
