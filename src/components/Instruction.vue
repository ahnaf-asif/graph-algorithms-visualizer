<template>
  <v-dialog v-model="instruction" max-width="650">
    <template v-slot:activator="{ on, attrs }">
      <v-btn block tile depressed color="blue lighten-1 white--text" v-bind="attrs" v-on="on">
        Instruction
      </v-btn>
    </template>
    <v-carousel v-model="carousel">
      <v-carousel-item v-for="(color, i) in colors" :key="color">
        <v-sheet :color="color" height="100%" tile>
          <v-row class="fill-height" align="center" justify="center">
            <div class="text-h2">
              Slide {{ i + 1 }}
            </div>
          </v-row>
        </v-sheet>
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
        'primary',
        'secondary',
        'yellow darken-2',
        'red',
        'orange',
      ]
    }

  }
}
</script>

<style scoped>

</style>