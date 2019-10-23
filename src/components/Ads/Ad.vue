<template>
  <v-container>
    <v-layout row>
      <v-flex xs12>
        <v-card>
          <v-img
          src="/"
          height="200px"
          ></v-img>
        </v-card>
        <v-card-text>
          <h1>{{}}</h1>
          <p>{{ }}</p>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn class="warning">edit</v-btn>
          <v-btn class="success">buy</v-btn>
        </v-card-actions>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  // props: ['id'],
  // computed: {
  //   ad () {
  //     const id = this.id
  //     return this.$store.getters.adById(id)
  //   }
  // }
}
</script>

<style lang="stylus">

</style>
