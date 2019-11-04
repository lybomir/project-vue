<template>
  <v-app>
    <v-navigation-drawer
    app
    temporary
    v-model="drawer"
    >

     <v-list>
      <v-list-item
        v-for="link of links"
        :key ='link.title'
        :to="link.url"
      >
        <v-list-item-icon>
          <v-icon >{{link.icon}}</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title v-text="link.title"></v-list-item-title>
        </v-list-item-content>

      </v-list-item>
      <v-list-item
       @click="logOut"
      >
        <v-list-item-icon>
          <v-icon >exit</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title v-text="'logout'"></v-list-item-title>
        </v-list-item-content>

      </v-list-item>
    </v-list>

    </v-navigation-drawer>
    <v-app-bar app dark color="primary">
      <v-app-bar-nav-icon
        @click="drawer = !drawer"
        class="hidden-md-and-up"
      ></v-app-bar-nav-icon>
       <v-toolbar-title>
         <router-link to="/" tag='span' class="pointer">Aplication</router-link>
       </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn
        v-for="link in links"
        :key="link.title"
        :to="link.url"
        text
        >
          <v-icon left>{{link.icon}}</v-icon>
          {{link.title}}
          </v-btn>
        <v-btn
        @click="logOut"
         text
        >
          <v-icon left></v-icon>
          Logout
          </v-btn>
      </v-toolbar-items>

    </v-app-bar>
    <v-content>
        <router-view></router-view>
    </v-content>
    <template v-if="error">
    <v-snackbar
      :multi-line="true"
      :timeout="5000"
      @input="closeError"
      :value="true"
    >
      {{ error }}
      <v-btn
        dark
        text
        @click="closeError"
      >
        Close
      </v-btn>
    </v-snackbar>
    </template>
  </v-app>
</template>

<script>
export default {
  data () {
    return {
      drawer: false,
      w: true
    }
  },
  computed: {
    error () {
      return this.$store.getters.error
    },
    isUserLogin () {
      return this.$store.getters.isUserLoginIn
    },
    links () {
      if (this.isUserLogin) {
        return [ { title: 'Orders', icon: 'mdi-tilde', url: '/orders' },
          { title: 'New add', icon: 'mdi-tilde', url: '/new' },
          { title: 'My ads', icon: 'mdi-tilde', url: '/list' } ]
      }
      return [ { title: 'Login', icon: 'mdi-tilde', url: '/login' },
        { title: 'Registration', icon: 'mdi-tilde', url: '/registration' } ]
    }
  },
  methods: {
    closeError () {
      this.$store.dispatch('clearError')
    },
    logOut () {
      this.$store.dispatch('logoutuser')
      this.$router.push('/')
    }
  }
}
</script>

<style scoped>
.pointer {
  cursor: pointer
}

</style>
