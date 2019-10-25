<template>
  <v-container>
    <v-layout row>
      <v-flex xs12 sm6 offset-sm-3>
        <h1 class="text--secondary mb3">my ads</h1>
        <v-card
        v-for="item in myItems"
        :key="item.id"
        class="elevation-10"
        >
          <v-layout row>
            <v-flex xs4>
              <v-card>
              <v-img
              :src="item.imageSrc"
              height="175px"></v-img>
              </v-card>
            </v-flex>
            <v-flex xs8>
              <v-card-text>
                <h2>{{item.title}}</h2>
                <p>{{item.description}}</p>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn
                :to="'/ad/' + item.id"
                class="inf"
                >open</v-btn>
              </v-card-actions>
            </v-flex>
          </v-layout>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  computed: {
    myItems () {
      return this.$store.getters.myAds
    }
  }

}
</script>

<style lang="stylus">

</style>
