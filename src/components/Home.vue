<template>
  <div>
    <v-container>
    <v-layout row>
      <v-flex xs12>
        <v-carousel>
    <v-carousel-item
      v-for="item in promoAds"
      :key='item.id'
      :src='item.imageSrc'
      reverse-transition="fade-transition"
      transition="fade-transition"
    >
    <div class="carul-link">
      <v-btn class="error" :to="'/id/' + item.id">{{item.title}}</v-btn>
    </div>
    </v-carousel-item>
  </v-carousel>
      </v-flex>
    </v-layout>
  </v-container>

  <v-container grid-list-lg>
    <v-layout wrap>
      <v-flex
      v-for="item in items"
      :key="item.id"
      xs12
      sm6
      >
        <v-card
    class="mx-auto"
    max-width="400"
  >
    <v-img
      class="white--text align-end"
      height="200px"
      :src="item.imageSrc"
    >
      <v-card-title>{{ item.title }}</v-card-title>
    </v-img>

    <v-card-text class="text--primary">
      <div>{{ item.description }}</div>

    </v-card-text>

    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn
        text
        :to="'/id/' + item.id"
      >
        open
      </v-btn>

      <v-btn
        text
        raised
        class='primary'
      >
        buy
      </v-btn>
    </v-card-actions>
  </v-card>
      </v-flex>
    </v-layout>
  </v-container>
  </div>
</template>

<script>
// import { mapGetters } from 'vuex'
export default {
  computed: {
    promoAds () {
      return this.$store.getters.promoAds
    },
    items () {
      return this.$store.getters.items
    }
    // ...mapGetters(['promoAds', 'items'])
  },
  async mounted () {
    this.$store.dispatch('getUser')
  }

}
</script>

<style scoped>
.carul-link {
  position: absolute;
  bottom: 50px;
  left:50%;
  background: rgb(0, 0,0,.5);
  transform: translate(-50%, 0);
  padding: 10px 20px;
  border-radius: 5px;
}
</style>
