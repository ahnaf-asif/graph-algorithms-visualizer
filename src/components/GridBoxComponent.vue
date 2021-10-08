<template>
    <div 
        class="gridbox" 
        :style="{
            height: size+'px',
            width: size+'px',
            cursor: 'pointer',
        }"
        :class="{
            'obstacle' : obstacle, 
        }"
        @click="clickedGrid"
    >
        
        <div 
            class="for-animation-mask"
            :class="{'algorithm-animation': algorithmAnimation }"
        >
            
        </div>
        <div 
            class="another-for-icons"
            :class="{
                'start' : start, 
                'end' : end,
            }"
        >
            {{start?'S':''}}{{ end?'E':''}}{{obstacle?'O':''}}
        </div>
    </div>
    <!-- <div>hello wolrd</div> -->
</template>

<script>

import {mapGetters, mapActions} from 'vuex';

export default {
    name: 'GridBoxComponent',
    props: ['size', 'row', 'col','boxDetails', 'algorithmAnimation', 'pathAnimation'],
    data(){
        return {
            
        }
    },
    methods: {
        ...mapActions(['setMode', 'setStartingNode', 'setEndingNode', 'changeObstacleStatus']),
        clickedGrid (){
            // console.log(this.boxDetails);
            // this.algorithmAnimation = true;
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
    border-right: 2px solid #758d99;
    border-bottom: 2px solid #758d99;
    background: transparent;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bolder;
    font-size: 100%;
    position: relative;
    // z-index: 2;
    &:hover{
        transform: scale(1.05);
    }
}
.for-animation-mask{
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
    position: absolute;
    z-index: 1;

    transform: scale(0); 

    // animation: algorithmAnimation 2s ease-in-out forwards;
    background: limegreen;
    border-radius: 50%;   
}
.algorithm-animation{
    animation: algorithmAnimation ease-in-out forwards;
    animation-duration: 400ms;
}
.another-for-icons{
    height:100%;
    width:100%;
    background:transparent;
    position: absolute;
    display:flex;
    align-items: center;
    justify-content: center;
    z-index: 2;
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

@keyframes algorithmAnimation {
    0%{
      transform: scale(0.1); 
      background: rgb(52, 133, 255);
      border-radius: 50%;  
    }
    5%{
        background: rgb(52, 157, 255);
    }
    10%{
      transform: scale(0.2); 
      background: rgb(52, 191, 255);
      border-radius: 50%;
    }
    15%{
        background: rgb(52, 214, 255);
    }
    20%{
      transform: scale(0.3); 
      background: rgb(52, 231, 255);
      border-radius: 50%;
    }
    25%{
        background: rgb(52, 248, 255);
    }
    30%{
      transform: scale(0.4); 
      background: rgb(52, 255, 228);
      border-radius: 50%;
    }
    35%{
        background: rgb(52, 255, 204);
    }
    40%{
      transform: scale(0.5); 
      background: rgb(52, 255, 170);
      border-radius: 50%;
    }
    45%{
        background: rgb(52, 255, 137);
    }
    50%{
      transform: scale(0.6); 
      background: rgb(52, 255, 96);
      border-radius: 50%;
    }
    55%{
        background: rgb(86, 255, 52);
        border-radius: 50%;
    }
    60%{
      transform: scale(0.7); 
      background: rgb(143, 255, 52);
      border-radius: 50%;
    }
    65%{
        background: rgb(194, 255, 52);
        border-radius: 45%;
    }
    70%{
      transform: scale(0.8); 
      background: rgb(252, 255, 52);
      border-radius: 40%;
    }
    75%{
        background: rgb(255, 241, 52);
        border-radius: 35%;
    }
    80%{
      transform: scale(0.9); 
      background: rgb(252, 255, 52);
      border-radius: 30%;
    }
    85%{
        background: rgb(194, 255, 52);
        border-radius: 25%;
    }
    90%{
      transform: scale(0.95); 
    //   background: rgb(255, 191, 52);
        background: rgb(194, 255, 52);
      border-radius: 20%;
    }
    95%{
        // background: rgb(255, 174, 52);
        background: rgb(194, 255, 52);
        border-radius: 20%;
    }
    100%{
      transform: scale(1.0); 
    //   background: rgb(255, 174, 52);
      background: rgb(52, 255, 221);
      border-radius: 20%;
    }
}

</style>