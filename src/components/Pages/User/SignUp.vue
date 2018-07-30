<template>
  <v-container>
    <v-layout row v-if="error">
      <v-flex xs12 sm6 offset-sm3>
        <app-alert @dismissed="onDismissed" :text="error.message"></app-alert>
      </v-flex>
    </v-layout>
    <v-layout row wrap>
      <v-flex xs12 sm6 offset-sm3>
        <form @submit.prevent="onSignUp">
          <v-card>
            <v-container>
              <v-layout row wrap>
                <v-flex xs12>
                  <h1 class="blue--text">Sign Up</h1>
                  <hr class="accent">
                </v-flex>
                <v-flex xs12>
                  <v-text-field name="email" label="Email" id="email" v-model="email" required></v-text-field>
                </v-flex>
                <v-flex xs12>
                  <v-text-field name="password" label="password" id="password" type="password" v-model="password" required></v-text-field>
                </v-flex>
                <v-flex xs12>
                  <v-text-field name="confirmPassword" label="Confirm Password" type="password" id="confirmPassword" v-model="confirmPassword" :rules="[comparePasswords]"></v-text-field>
                </v-flex>
                <v-flex xs12 class="text-xs-right">
                  <v-btn class="accent" type="submit" :disabled="loading" :loading="loading">Sign Up</v-btn>
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
      email: '',
      password: '',
      confirmPassword: ''
    }
  },
  computed: {
    comparePasswords () {
      return this.password !== this.confirmPassword ? 'Passwords do not match' : ''
    },
    user () {
      return this.$store.getters.user
    },
    error () {
      return this.$store.getters.error
    },
    loading () {
      return this.$store.getters.loading
    }
  },
  watch: {
    user (value) {
      if (value !== null && value !== undefined) {
        this.$router.push('/')
      }
    }
  },
  methods: {
    onSignUp () {
      this.$store.dispatch('signUserUp', {email: this.email, password: this.password})
      // console.log({email: this.email, password: this.password, confirmPassword: this.confirmPassword})
    },
    onDismissed () {
      // console.log('Dismissed Alert')
      this.$store.dispatch('clearError')
    }
  }
}
</script>
