<template >
  <div class="grid" ref="home" style="display:flex;flexd-rection: row;flex-wrap:wrap;">
    <div v-for="cc in m" :key="cc">
      <GridBoxComponent 
        v-for="rr in n" 
        :key="rr" 
        :size="boxLength" 
        :row="rr" 
        :col="cc"
        :start="rr == startPosition.r && cc == startPosition.c ? true: false"
        :end="rr == endPosition.r && cc == endPosition.c ? true: false"
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
        grid: new Array(this.n).fill(0).map(() => new Array(this.m).fill(0)),
        startPosition: {
          r: 3,c: 7
        },
        endPosition: {
          r: 11,c: 13
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
      }else this.m = 50;


      this.boxLength = this.canvasWidth/this.m;
      this.n = Math.ceil(this.canvasHeight/this.boxLength)-1;

      this.grid = new Array(this.n).fill(0).map(() => new Array(this.m).fill(0));

      console.log(this.m , this.canvasWidth , this.n,  this.canvasHeight);
    }
  }
</script>
