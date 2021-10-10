<template>
  <v-dialog v-model="instruction" max-width="650">
    <template v-slot:activator="{ on, attrs }">
      <v-btn class="mt-3" block tile depressed color="green darken-1 white--text" v-bind="attrs" v-on="on">
        Instruction
      </v-btn>
    </template>
    
        <v-card
          elevation="2"
        >
          <v-card-text>
            <v-list>
              <v-list-item>
                <v-list-item-text>
                  Click <b>Select Starting Node</b> and click somewhere in the grid. The starting node will be set to grid you clicked.
                </v-list-item-text>
              </v-list-item>
              <v-divider class="my-2"></v-divider>
              <v-list-item>
                <v-list-item-text>
                  Click <b>Select Ending Node</b> and click somewhere in the grid. The ending node will be set to grid you clicked.
                </v-list-item-text>
              </v-list-item>
              <v-divider class="my-2"></v-divider>
              <v-list-item>
                <v-list-item-text>
                  Click <b>Select Obstacles</b> and click somewhere in the grid to set obstacle.
                </v-list-item-text>
              </v-list-item>
              <v-divider class="my-2"></v-divider>
              <v-list-item>
                <v-list-item-text>
                  Click <b>Select Random Obstacles</b> to set random obstacles
                </v-list-item-text>
              </v-list-item>
            </v-list>
            <p class="mt-5">Rest of the options are self-explanatory</p>
          </v-card-text>
        </v-card>
  </v-dialog>
</template>


<script>
export default {
  name: "Instruction",
  data(){

    return {
      instruction: false,
      carousel: 0,
      colors: [
        {
          btnColor: ''
        }
      ]
    }

  }
}
</script>

<style scoped>

</style>