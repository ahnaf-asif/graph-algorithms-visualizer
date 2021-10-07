<template>
    <div 
        class="gridbox" 
        :style="{
            height: size+'px',
            width: size+'px',
            cursor: 'pointer'
        }"
        :class="{'start' : start, 'end' : end, 'obstacle' : obstacle}"
        @click="clickedGrid"
    >

       {{start?'S':''}}{{ end?'E':''}}{{obstacle?'O':''}}
        
    </div>
    <!-- <div>hello wolrd</div> -->
</template>

<script>

import {mapGetters, mapActions} from 'vuex';

export default {
    name: 'GridBoxComponent',
    props: ['size', 'row', 'col','boxDetails'],
    data(){
        return {
            
        }
    },
    methods: {
        ...mapActions(['setMode', 'setStartingNode', 'setEndingNode', 'changeObstacleStatus']),
        clickedGrid (){
            // console.log(this.boxDetails);
            if(this.currentMode == 0)return;
            else if(this.currentMode == 1 && !this.end){ 
                let ss = {r: this.row, c: this.col};
                if(this.obstacle){
                    this.changeObstacleStatus(ss);
                }
                this.setStartingNode(ss); 
            }
            else if(this.currentMode == 2 && !this.start){
                let ee = {r:this.row, c: this.col};
                if(this.obstacle){
                    this.changeObstacleStatus(ee);
                }
                this.setEndingNode(ee);
            }
            else if(!this.start && !this.end && this.currentMode == 3){
                // this.obstacle = true
                let node = {r: this.row, c: this.col};
                this.changeObstacleStatus(node);
                console.log('in the component : '  , this.boxDetails);
            }
        }
    },
    
    computed: {
        ...mapGetters([
           'currentMode',
            'startingNode',
            'endingNode'
        ]),
        start() { return this.startingNode.r == this.row && this.startingNode.c == this.col },
        end(){ return this.endingNode.r == this.row && this.endingNode.c == this.col },
        obstacle() { return this.boxDetails }
    },
    
}
</script>

<style lang="scss">
.gridbox{
    border-right: 2px solid #4e6069;
    border-bottom: 2px solid #4e6069;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bolder;
    font-size: 100%;
    &:hover{
        transform: scale(1.05);
    }
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
    background: #4e6069;
}
</style>