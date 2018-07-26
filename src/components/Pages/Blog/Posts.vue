<template>
  <v-container>
    <v-layout row wrap>
      <v-flex xs12>
        <h1 class="secondary--text">Our Blog</h1>
        <hr class="secondary mb-2">
      </v-flex>
      <v-flex xs12>
        <v-layout row wrap>
          <v-flex xs12 sm6 md4 v-for="post in posts" :key="post.id" class="pa-2">
            <v-card>
              <v-card-media :src="post.imageUrl" height="250"></v-card-media>
              <v-card-text>
                <div>
                  <h2>{{post.title}}</h2>
                  <p>{{post.date | date}}</p>
                </div>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn class="accent" :to="'/posts/' + post.id">View</v-btn>
              </v-card-actions>
            </v-card>
          </v-flex>
        </v-layout>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  computed: {
    posts () {
      return this.$store.getters.loadedPosts
    }
  }
}
</script>