<template>
  <div>

    <v-parallax src="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg" height="700">
      <v-layout align-center column justify-center>
        <h1 class="font-weight-light font-italic">"We are your darkness pedophiles. Your worst nightmare!" ~ Evo</h1>
      </v-layout>
    </v-parallax>

    <v-layout row wrap>
      <v-flex xs12>
        <v-container>
          <h2 class="font-weight-light display-1 text-xs-center">Welcome to Rav3nSec™  website! The most advance pedophile hunting group on the internet. #Rav3nSec</h2>
          <v-divider class="mb-4 mt-3"></v-divider>
          <v-carousel style="cursor: pointer;">
            <v-carousel-item v-for="post in posts" :key="post.id" :src="post.imageUrl" @click.native="onLoadPost(post.id)">
              <div class="post-preview">
                <div class="title">{{ post.title }}</div>
                <v-divider class="mb-2 mt-2"></v-divider>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus eaque eum adipisci perspiciatis rerum sequi ratione quisquam autem quia quasi. Laboriosam deserunt fugiat a. Eaque neque voluptates rerum veniam rem.</p>
              </div>
            </v-carousel-item>
          </v-carousel>
        </v-container>
      </v-flex>
    </v-layout>

  </div>
</template>

<script>
export default {
  computed: {
    posts () {
      return this.$store.getters.featuredPosts
    }
  },
  methods: {
    onLoadPost (id) {
      this.$router.push('/posts/' + id)
    }
  }
}
</script>

<style scoped>
  .post-preview {
    position: absolute;
    bottom: 50px;
    background-color: rgba(0,0,0,0.5);
    color: white;
    padding: 20px 20px 0px 20px;
  }

  .post-preview .title {
    font-size: 2em;
  }

  .post-preview p {
    max-width: 500px;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }
</style>


