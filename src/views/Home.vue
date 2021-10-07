<template >
  
  <div class="grid" ref="home" style="display:flex;flexd-rection: row;flex-wrap:wrap;">
    <div v-for="cc in m" :key="cc">
      <GridBoxComponent 
        v-for="rr in n" 
        :key="rr" 
        :size="boxLength" 
        :row="rr" 
        :col="cc"
        :start="rr == startPosition.r && cc == startPosition.c ? true : false"
        :end="rr == endPosition.r && cc == endPosition.c ? true : false"
        :val="grid[rr-1][cc-1]"
        v-on:clicked-grid = "clickedGrid"
        ></GridBoxComponent>
    </div> 
  </div>  

</template>

<style lang="scss">
.grid{
  height: 89.8vh;
  overflow-x:hidden !important;
  overflow-y:hidden !important;
  border-left: 2px solid rgb(58, 58, 58);
  border-top: 2px solid rgb(58, 58, 58);
}
</style>

<script>
  
  import GridBoxComponent from '../components/GridBoxComponent.vue';
  import { mapGetters} from 'vuex';

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
        grid: [],
        startPosition: {
          r: 3,c: 7
        },
        endPosition: {
          r: 11,c: 26
        },
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

      this.grid = new Array(this.n).fill(0).map(() => new Array(this.m).fill(0));
      
      // console.log(this.grid[1][3]);
      // console.log(this.m , this.canvasWidth , this.n,  this.canvasHeight, this.currentMode);
    },
    computed: {
      ...mapGetters(['currentMode']),
    },
    methods: {
      clickedGrid: function(box){
        // if(this.currentMode == 0)return;
        if(this.currentMode == 1)this.startPosition = box;
        else if(this.currentMode == 2) this.endPosition = box;
        else if(this.currentMode == 3 && box != this.startPosition && box != this.endPosition){
          let r = box.r-1;
          let c = box.c-1;
          if(this.grid[r][c] == -1)this.grid[r][c] = 0;
          else this.grid[r][c] = -1;
          console.log(this.grid);
        }
        // console.log(box);
      },
      checkObstacles(rr, cc){
        if(this.grid[rr-1][cc-1] == -1)return true;
        return false;
      }
    }
    
  }
</script>
