<template>
  <v-container>
    <v-layout row>
      <v-flex xs12 sm6 offset-sm-3>
        <h1 class="text--secondary  mb-3">Orders</h1>
        <v-list
      subheader
      two-line
      flat
    >

      <v-list-item-group
        multiple
        v-for='order in orders'
        :key='order.id'
      >
        <v-list-item>
          <template v-slot:default="{ active, toggle }">
            <v-list-item-action>
              <v-checkbox
                :input-value="order.done"
                color="primary"
                @change="markDone(order)"
              ></v-checkbox>
            </v-list-item-action>

            <v-list-item-content>
              <v-list-item-title>{{ order.name }}</v-list-item-title>
              <v-list-item-subtitle>{{ order.phone}}</v-list-item-subtitle>
            </v-list-item-content>
            <v-list-title-action>
              <v-btn
              :to="'/ad/' + order.adId"
              class="primary"
              >
              open</v-btn>
            </v-list-title-action>
          </template>
        </v-list-item>
      </v-list-item-group>
    </v-list>

      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data () {
    return {
      orders: [
        {
          id: 'fds3',
          name: 'ola',
          phone: '097131312',
          adId: '123',
          done: false
        }
      ]
    }
  },
  methods: {
    markDone (order) {
      order.done = true
    }
  }
}
</script>

<style lang="stylus">

</style>
