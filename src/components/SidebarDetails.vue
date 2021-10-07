<template>
    <div class="sidebar">
        <!-- <h3 class="text-center mt-5">Different Modes</h3>  -->
        <!-- {{ currentMode }} -->
        <v-divider class="mb-10"></v-divider>
        
        <v-btn 
            block 
            tile 
            depressed 
            color="purple darken-1 white--text"
            @click="setModeToStart"
        >
            Select Starting Node
        </v-btn>
        <v-btn 
            block 
            tile 
            depressed 
            color="teal darken-1 white--text" 
            class="mt-2"
            @click="setModeToEnd"
        >
            Select Ending Node
        </v-btn>

        <v-btn 
            block 
            tile 
            depressed 
            color="blue-grey darken-4 white--text" 
            class="mt-2"
            @click="setModeToObstacle"
        >
            Select Obstacles
        </v-btn>

        <v-btn 
            block 
            tile 
            depressed 
            color="blue-grey darken-1 white--text"
            class="mt-2"
            @click="setModeToDefault"
        >
            Modification Done
        </v-btn>
    </div>
</template>

<script>

import { mapActions, mapGetters } from 'vuex';

export default {
    name: 'SidebarDetails',
    data(){
        return{

        }
    },
    methods: {
        ...mapActions(['setModeToStart', 'setModeToEnd', 'setModeToDefault', 'setModeToObstacle'])
    },
    computed: {
        ...mapGetters(['currentMode'])
    }
}
</script>

<style>

</style>