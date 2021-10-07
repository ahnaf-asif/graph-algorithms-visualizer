<template>
    <div 
        class="gridbox" 
        :style="{
            height: size+'px',
            width: size+'px',
            cursor: 'pointer'
        }"
        @click="clickedGrid"
        :class="{'start':start, 'end':end, 'obstacle': val == -1}"
    >

        {{start?'S':''}}{{end?'E':''}}{{val?'O':''}}
        
    </div>
</template>

<script>

import {mapGetters} from 'vuex';

export default {
    name: 'GridBoxComponent',
    props: ['size', 'row', 'col', 'start', 'end', 'val'],
    data(){
        return {

        }
    },
    methods: {
       clickedGrid(){
           if(this.currentMode == 3 && (this.start || this.end)){
               return;
           }
           if(this.currentMode == 3 && !this.start && !this.end){
               if(this.val == -1)this.val = 0;
               else this.val = -1;
           }
           this.$emit('clicked-grid', {r: this.row, c: this.col})
       }
    },
    computed: {
        ...mapGetters(['currentMode']),
    }
}
</script>

<style>
.gridbox{
    border-right: 2px solid rgb(58, 58, 58);
    border-bottom: 2px solid rgb(58, 58, 58);
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bolder;
    font-size: 100%;
}
.start{
    color: black;
    background: yellow;
}
.end{
    color: black;
    background: #00f7ff;
}
.obstacle{
    color: white;
    background: #263238;
}
</style>