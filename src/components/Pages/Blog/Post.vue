<template>
  <v-container>
    <v-layout row wrap v-if="loading">
      <v-flex xs12 text-xs-center>
        <v-progress-circular indeterminate color="primary" style="margin: 20rem 0"></v-progress-circular>
      </v-flex>
    </v-layout>
    <v-layout row wrap v-else>
      <v-flex xs12>
        <v-card>
          <v-card-text>
            <v-layout row wrap>
              <v-flex x12 sm6>
                <h1 class="blue--text">{{post.title}}</h1>
              </v-flex>
              <v-flex xs12 sm6 class="text-xs-right" v-if="userIsCreator">
                <template v-if="true">
                  <app-edit-post-details :post="post"></app-edit-post-details>
                </template>
              </v-flex>
            </v-layout>
          </v-card-text>
          <v-card-media :src="post.imageUrl" width="100%" height="500"></v-card-media>
          <v-card-text>
            <div class="info--text mb-2">{{post.date | date}}</div>
            <div>{{post.description}}</div>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  props: ['id'],
  computed: {
    post () {
      return this.$store.getters.loadedPost(this.id)
    },
    userIsAuthenticated () {
      return this.$store.getters.user !== null && this.$store.getters.user !== undefined
    },
    userIsCreator () {
      if (!this.userIsAuthenticated) {
        return false
      }
      return this.$store.getters.user.id === this.post.creatorId
    },
    loading () {
      return this.$store.getters.loading
    }
  }
}
</script>
