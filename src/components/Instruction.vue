<template>
  <v-dialog v-model="instruction" max-width="650">
    <template v-slot:activator="{ on, attrs }">
      <v-btn class="mt-3" block tile depressed color="green darken-1 white--text" v-bind="attrs" v-on="on">
        Instruction
      </v-btn>
    </template>
    <v-carousel v-model="carousel" color="white">
      <v-carousel-item>
        <v-card
          elevation="2"
        >
          <v-card-title>Introduction to the Buttons</v-card-title>
          <v-card-text>
            <v-btn 
              class="mt-2"
              block 
              tile 
              depressed 
              color="purple darken-1 white--text"
            >
              Select Starting Node
          </v-btn>
          </v-card-text>
        </v-card>
      </v-carousel-item>
    </v-carousel>
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