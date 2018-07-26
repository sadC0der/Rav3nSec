<template>
  <v-container>
    <v-layout row wrap>
      <v-flex xs12 sm6 offset-sm3>
        <form @submit.prevent="onCreatePost">
          <v-card>
            <v-container>
              <v-layout row wrap>
                <v-flex xs12>
                  <h1 class="blue--text">Create Post</h1>
                  <hr class="accent">
                </v-flex>
                <v-flex xs12>
                  <v-text-field name="title" label="Title" id="title" v-model="title" required></v-text-field>
                </v-flex>
                <v-flex xs12>
                  <v-text-field name="imageUrl" label="imageUrl" id="imageUrl" v-model="imageUrl" required></v-text-field>
                </v-flex>
                <v-flex xs12>
                  <img :src="imageUrl" style="width: 100%;" alt="">
                </v-flex>
                <v-flex xs12>
                  <v-textarea name="description" label="Description" id="description" v-model="description" multi-line required></v-textarea>
                </v-flex>
                <v-flex xs12 class="text-xs-right">
                  <v-btn class="accent" :disabled="!formIsValid" type="submit">Create Post</v-btn>
                </v-flex>
              </v-layout>
            </v-container>
          </v-card>
        </form>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data () {
    return {
      title: '',
      imageUrl: '',
      description: ''
    }
  },
  computed: {
    formIsValid () {
      return this.title !== '' && this.imageUrl !== '' && this.description !== ''
    }
  },
  methods: {
    onCreatePost () {
      if (!this.formIsValid) {
        return
      }
      const postData = {
        title: this.title,
        imageUrl: this.imageUrl,
        description: this.description,
        date: new Date()
      }
      this.$store.dispatch('createPost', postData)
      this.$router.push('/posts')
    }
  }
}
</script>
