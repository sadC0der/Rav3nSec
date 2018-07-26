import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    loadedPosts: [
      { id: '434f23asdf', imageUrl: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg', date: new Date(), title: 'First Post', description: 'lorem ispum dolor it samet lol wos geht hah :D' },
      { id: 'fdg46556th', imageUrl: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg', date: new Date(), title: 'Second Post', description: 'lorem ispum dolor it samet lol wos geht hah :D' },
      { id: 'g45g3wg4wg', imageUrl: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg', date: new Date(), title: 'Third Post', description: 'lorem ispum dolor it samet lol wos geht hah :D' }
    ],
    id: 'g3g354'
  },
  mutations: {
    createPost (state, payload) {
      state.loadedPosts.push(payload)
    }
  },
  actions: {
    createPost ({commit}, payload) {
      const post = {
        title: payload.title,
        imageUrl: payload.imageUrl,
        description: payload.description,
        date: payload.date,
        id: 'ku42guk'
      }
      // Reach out to firebase and store it
      commit('createPost', post)
    }
  },
  getters: {
    featuredPosts (state, getters) {
      return getters.loadedPosts.slice(0, 5)
    },
    loadedPosts (state) {
      return state.loadedPosts.sort((postA, postB) => {
        return postA.date > postB.date
      })
    },
    loadedPost (state) {
      return (postId) => {
        return state.loadedPosts.find((post) => {
          return post.id === postId
        })
      }
    }
  }
})
