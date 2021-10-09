<template>
    <div class="sidebar">
        <!-- <h3 class="text-center mt-5">Different Modes</h3>  -->
        <!-- {{ currentMode }} -->
        <!-- <v-divider class="mb-10"></v-divider> -->
        
        <v-btn 
            class="mt-2"
            block 
            tile 
            depressed 
            color="purple darken-1 white--text"
            @click="setMode(1)"
            
            :disabled="btnAction === false"
        >
            Select Starting Node
        </v-btn>
        <v-btn 
            block 
            tile 
            depressed 
            color="cyan darken-1 white--text" 
            class="mt-2"
            @click="setMode(2)"

            :disabled="btnAction === false"
        >
            Select Ending Node
        </v-btn>

        <v-btn 
            block 
            tile 
            depressed 
            color="amber darken-2 white--text" 
            class="mt-2"
            @click="setMode(3)"

            :disabled="btnAction === false"
        >
            Select Obstacles
        </v-btn>
        <v-btn 
            block 
            tile 
            depressed 
            color="blue-grey darken-4 white--text" 
            class="mt-2"
            @click="setRandomObstacles"

            :disabled="btnAction === false"
        >
            Set Random Obstacles
        </v-btn>

        <!-- <v-btn 
            block 
            tile 
            depressed 
            color="blue-grey darken-1 white--text"
            class="mt-2"
            @click="setMode(0)"
        >
            Finish Modification
        </v-btn> -->

        <v-select
            outlined
            style="font-weight: bold"
            class="mt-10"
            :items="algorithms"
            item-text="name"
            item-value="id"
            v-model="selectedAlgorithm"
            @change="algorithmChanged()"
            label="Select Algorithm"

            :disabled="btnAction === false"
        ></v-select>

        <v-select
            outlined
            style="font-weight: bold"
            :items="speeds"
            v-model="speed"
            label="Set Visualization Speed"

            :disabled="btnAction === false"
        ></v-select>

        <p class="text-center">
            <v-btn
                rounded
                large
                color="light-green accent-3"
                @click="visualizeAlgorithm()"
                width="250"
                :disabled="btnAction === false"
            >
                Visualize Algorithm !
            </v-btn>
        </p>
        <p class="text-center">
            <v-btn
                rounded
                large
                color="blue-grey darken-3 white--text"
                @click="resetGridInside()"
                width="250"
            >
                Reset Grid
            </v-btn>
        </p>

    </div>
</template>

<script>

import { mapActions, mapGetters } from 'vuex';

export default {
    name: 'SidebarDetails',
    data(){
        return{
            selectedAlgorithm: 'bfs',
            speed: 'Super Fast',
            alreadyVisualized: false,
            btnAction: true,
            algorithms: [
                {id: 'bfs', name: 'Breadth First Search'},
                {id: 'dfs', name: 'Depth First Search'},
                // {id: 'dijkstra', name: 'Dijkstra'},
            ],
            speeds: [
                'Super Slow', 'Slow', 'Medium', 'Fast', 'Super Fast'
            ],
        }
    },
    methods: {
        ...mapActions(['setMode', 'changeObstacleStatus', 'resetGrid', 'runAlgorithm']),
        setRandomObstacles(){

            this.resetGrid();
            
            let numberOfObstacles = Math.floor(200*Math.random());
            numberOfObstacles = 200;

            for(let i = 0; i < numberOfObstacles;i++){
                
                let randomRow = Math.floor(this.currentRows*Math.random());
                let randomCol = Math.floor(this.currentCols*Math.random());
                let node = {
                    r: randomRow,
                    c: randomCol
                };

                if((node.r == this.startingNode.r && node.c == this.startingNode.c ) || 
                (node.r == this.endingNode.r && node.c == this.endingNode.c)){
                    continue;
                }else{
                    this.changeObstacleStatus(node);
                }
            }
        },
        algorithmChanged(){
            console.log('algorithm changed');
        },
        resetGridInside(){
            this.alreadyVisualized = false;
            this.btnAction = true;
            this.resetGrid();
        },
        visualizeAlgorithm(){
            this.btnAction = false;
            console.log(this.btnAction);
            if(!this.alreadyVisualized){
                this.alreadyVisualized = true;
                this.runAlgorithm([this.selectedAlgorithm, this.speed]);
            }
        }
    },
    mounted() {
        this.algorithmChanged();
    },
    computed: {
        ...mapGetters(['currentMode', 'currentRows', 'currentCols', 'startingNode', 'endingNode'])
    }
}
</script>

<style>
.disabled{
    opacity: 0.9;
}
</style>