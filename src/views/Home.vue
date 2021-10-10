<template >
  <div class="grid"  style="display:flex;flexd-rection: row;flex-wrap:wrap;">
    <div v-for="cc in m" :key="cc">
      <GridBoxComponent 
        v-for="rr in n" 
        :key="rr" 
        :size="boxLength" 
        :row="rr" 
        :col="cc"
        :boxDetails="findBoxDetails(rr,cc)"
        :algorithmAnimation="checkIfAlgorithmAnimationNeeded(rr, cc)"
        :pathAnimation="checkIfPathAnimationNeeded(rr, cc)"
        :pathDirectionalArrow="checkDirectionalArrow(rr, cc)"
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
    props : ['n', 'm', 'boxLength'],
    data(){
      return {
        
      }
    },
    mounted(){
      // console.log('gor n m ' , this.n , this.m);
    },
    computed: {
      ...mapGetters(['currentMode', 'grid', 'gridAnimationSituation']),
    },
    methods: {
      ...mapActions(['setRowsAndColumns']),
      findBoxDetails(r, c){
        return this.grid[r][c];
      }, 
      checkIfAlgorithmAnimationNeeded(rr, cc){
        return this.gridAnimationSituation[rr][cc].algorithmAnimation;
      },
      checkIfPathAnimationNeeded(rr, cc){
        return this.gridAnimationSituation[rr][cc].pathAnimation;
      },
      checkDirectionalArrow(rr, cc){
        return this.gridAnimationSituation[rr][cc].directionalArrow;
      }
    }
    
  }
</script>
