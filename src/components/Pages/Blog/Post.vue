<template>
  <v-container>
    <v-layout row wrap>
      <v-flex xs12>
        <v-card>
          <v-card-text>
            <h1 class="blue--text">{{post.title}}</h1>
          </v-card-text>
          <v-card-media :src="post.imageUrl" width="100%" height="500"></v-card-media>
          <v-card-text>
            <div class="info--text mb-2">{{post.date | date}}</div>
            <div>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa, officiis fuga commodi nesciunt deserunt atque ratione dicta natus animi molestiae voluptate cum, modi esse et tempore at cumque rerum excepturi.</div>
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
    }
  }
}
</script>
