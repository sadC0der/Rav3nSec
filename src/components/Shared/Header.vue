<template>
  <div>
    <v-navigation-drawer v-model="sideNav" temporary fixed>
      <v-list>
        <v-list-tile v-for="item in menuItems" :key="item.title" router :to="item.link">
          <v-list-tile-title>{{item.title}}</v-list-tile-title>
        </v-list-tile>
      </v-list>
      <v-list-tile v-if="userIsAuthenticated">
        <v-list-tile-title @click="onLogout">Logout</v-list-tile-title>
      </v-list-tile>
    </v-navigation-drawer>

    <v-toolbar fixed dense>
      <v-toolbar-side-icon @click.native.stop="sideNav = !sideNav" class="hidden-md-and-up"></v-toolbar-side-icon>
      <v-toolbar-title>Rav3nSec</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn v-for="item in menuItems" :key="item.title" flat :to="item.link">{{item.title}}</v-btn>
        <v-btn flat v-if="userIsAuthenticated" @click="onLogout">Logout</v-btn>
      </v-toolbar-items>
    </v-toolbar>
  </div>
</template>

<script>
export default {
  data () {
    return {
      sideNav: false
    }
  },
  computed: {
    menuItems () {
      let menuItems = [
        { title: 'Home', icon: '', link: '/' },
        { title: 'About', icon: '', link: '/about' },
        { title: 'Contact', icon: '', link: '/contact' },
        { title: 'Blog', icon: '', link: '/posts' },
        { title: 'Press', icon: '', link: '/press' },
        { title: 'Dox\'s', icon: '', link: '/doxs' },
        { title: 'Ghostbins', icon: '', link: '/ghostbins' },
        { title: 'Tangdown', icon: '', link: '/tangdown' }
      ]
      if (this.userIsAuthenticated) {
        menuItems = [
          { title: 'Home', icon: '', link: '/' },
          { title: 'About', icon: '', link: '/about' },
          { title: 'Contact', icon: '', link: '/contact' },
          { title: 'Blog', icon: '', link: '/posts' },
          { title: 'Press', icon: '', link: '/press' },
          { title: 'Dox\'s', icon: '', link: '/doxs' },
          { title: 'Ghostbins', icon: '', link: '/ghostbins' },
          { title: 'Tangdown', icon: '', link: '/tangdown' }
        ]
      }
      return menuItems
    },
    userIsAuthenticated () {
      return this.$store.getters.user !== null && this.$store.getters.user !== undefined
    }
  },
  methods: {
    onLogout () {
      this.$store.dispatch('logout')
    }
  }
}
</script>
