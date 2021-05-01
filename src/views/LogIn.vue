<template>
  <div class="page-log-in mt-6 mx-6 is-family-code">
    <section class="has-text-left mt-6">
      <div class="hero columns mt-6 is-fullheight">
        <div class="box column is-4 is-offset-4 mt-6">
          <h1 class="title has-text-centered">Log in</h1>
          <form @submit.prevent="submitForm">
            <div class="field">
              <label class="label">Username</label>
              <p class="control has-icons-left has-icons-right">
                <input class="input" type="text" placeholder="text" v-model="username">
                <span class="icon is-small is-left">
                  <i class="fa fa-user"></i>
                  </span>
              </p>
            </div>
            <div class="field">
              <label class="label">Password</label>
              <p class="control has-icons-left has-icons-right">
                <input class="input" type="password" placeholder="Password" v-model="password">
                <span class="icon is-small is-left">
                  <i class="fa fa-lock"></i>
                  </span>
              </p>
            </div>
            <div class="notification is-danger" v-if="errors.length">
              <p v-for="error in errors" v-bind:key="error">{{ error }}</p>
            </div>
            <div class="field">
              <div class="control">
                <button class="button is-dark">Log in</button>
              </div>
            </div>
            <hr>
            Or
            <router-link to="/sign-up">click here</router-link>
            to sign up!
          </form>
        </div>
      </div>

    </section>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: "LogIn",
  data() {
    return {
      username: '',
      password: '',
      errors: []
    }
  },
  mounted() {
    document.title = "LogIn | MS Coding Help"
  },
  methods: {
    async submitForm() {
      axios.defaults.headers.common["Authorization"] = ""
      localStorage.removeItem("token")
      const formData = {
        username: this.username,
        password: this.password
      }
      await axios
          .post("/api/v1/token/login/", formData)
          .then(response => {
            const token = response.data.auth_token
            this.$store.commit('setToken', token)

            axios.defaults.headers.common["Authorization"] = "Token " + token
            localStorage.setItem("token", token)
            const toPath = this.$route.query.to || '/'
            this.$router.push(toPath)
          })
          .catch(error => {
            if (error.response) {
              for (const property in error.response.data) {
                this.errors.push(`${property}: ${error.response.data[property]}`)
              }
            } else {
              this.errors.push('Something went wrong. Please try again')

              console.log(JSON.stringify(error))
            }
          })
    }
  }
}
</script>

<style scoped>

</style>