<template>
  <v-dialog v-model="contact" max-width="650">
    <template v-slot:activator="{ on, attrs }">
      <v-btn class="mx-3" depressed color="accent white--text" v-bind="attrs" v-on="on">
        Contact
      </v-btn>
    </template>
    <v-card>
      <v-card-text>hello world</v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: "Contact",
  data(){
    return {
      contact: false,
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