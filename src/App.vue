<template>
  <v-app dark>

    <Header />

    <router-view style="margin-top: 3rem;"></router-view>

    <Footer />
  </v-app>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  name: 'App'
}
</script>
