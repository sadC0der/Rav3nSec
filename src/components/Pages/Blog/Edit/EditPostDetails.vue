<template>
  <v-dialog width="350px" persistent v-model="editDialog">
    <v-btn fab accent slot="activator">
      <v-icon>edit</v-icon>
    </v-btn>
    <v-card>
      <v-container>
        <v-layout row wrap>
          <v-flex xs12>
            <v-card-title>Edit Post</v-card-title>
          </v-flex>
        </v-layout>
        <v-divider></v-divider>
        <v-layout row wrap>
          <v-flex x12>
            <v-text-field name="title" label="Title" id="title" v-model="editedTitle" required></v-text-field>
            <v-textarea name="description" label="Description" id="description" v-model="editedDescription" multi-line required></v-textarea>
          </v-flex>
        </v-layout>
        <v-divider></v-divider>
        <v-layout row wrap>
          <v-flex xs12>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn flat class="red--text" @click="editDialog = false">Close</v-btn>
              <v-btn flat class="success--text" @click="onSaveChanges">Save</v-btn>
            </v-card-actions>
          </v-flex>
        </v-layout>
      </v-container>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  props: ['post'],
  data () {
    return {
      editDialog: false,
      editedTitle: this.post.title,
      editedDescription: this.post.description
    }
  },
  methods: {
    onSaveChanges () {
      if (this.editedTitle.trim() === '' || this.editedDescription.trim() === '') {
        return
      }
      this.editDialog = false
      this.$store.dispatch('updatePostData', {
        id: this.post.id,
        title: this.editedTitle,
        description: this.editedDescription
      })
    }
  }
}
</script>
