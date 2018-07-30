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
                  <v-btn raised class="accent" @click="onPickFile">Upload Image</v-btn>
                  <input type="file" style="display: none;" ref="fileInput" accept="image/*" @change="onFilePicked">
                  <!-- <v-text-field name="imageUrl" label="imageUrl" id="imageUrl" v-model="imageUrl" required></v-text-field> -->
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
      description: '',
      image: null
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
      if (!this.image) {
        return
      }
      const postData = {
        title: this.title,
        image: this.image,
        description: this.description,
        date: new Date()
      }
      this.$store.dispatch('createPost', postData)
      this.$router.push('/posts')
    },
    onPickFile () {
      this.$refs.fileInput.click()
    },
    onFilePicked (event) {
      const files = event.target.files
      let filename = files[0].name
      if (filename.lastIndexOf('.') <= 0) {
        return alert('Please add a valid file!')
      }
      const fileReader = new FileReader()
      fileReader.addEventListener('load', () => {
        this.imageUrl = fileReader.result
      })
      fileReader.readAsDataURL(files[0])
      this.image = files[0]
    }
  }
}
</script>
