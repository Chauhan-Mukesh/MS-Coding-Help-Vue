<template>
  <div class="page-log-in mx-6 is-family-code">
    <section class="has-text-left my-6">
      <div class="columns my-6">
        <div class="box column is-4 is-offset-4 my-6">
          <h1 class="title has-text-centered">Sign Up</h1>

          <form @submit.prevent="submitForm">
            <div class="field">
              <label class="label">Username</label>
              <p class="control has-icons-left has-icons-right">
                <input class="input" type="text" placeholder="username" v-model="username">
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
            <div class="field">
              <label class="label">Repeat password</label>
              <p class="control has-icons-left has-icons-right">
                <input class="input" type="password" placeholder="Repeat Password" v-model="password2">
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
                <button class="button is-dark">Sign Up</button>
              </div>
            </div>
            <hr>
            Or
            <router-link to="/sign-in">click here</router-link>
            to sign In!
          </form>
        </div>
      </div>

    </section>
  </div>
</template>

<script>
import axios from "axios";
import {toast} from 'bulma-toast'
export default {
  name: "SignUp",
  data() {
    return {
      username: '',
      password: '',
      password2: '',
      errors: []
    }
  },
  mounted() {
    document.title = 'Sign Up | MS Coding Help'
  },
  methods: {
    submitForm() {
      this.errors = []
      if (this.username === '') {
        this.errors.push('The username is missing')
      }
      if (this.password === '' || this.password.length < 8) {
        this.errors.push('The password is too short \n password length should be minimum 8 characters')
      }
      if (this.password !== this.password2) {
        this.errors.push('The passwords doesn\'t match')
      }
      if (!this.errors.length) {
        const formData = {
          username: this.username,
          password: this.password
        }
        axios
            .post("/api/v1/users/", formData)
            .then(response => {
              toast({
                message: 'Account created, please log in!',
                type: 'is-success',
                dismissible: true,
                pauseOnHover: true,
                duration: 2000,
                position: 'bottom-right',
              })
              this.$router.push('/sign-in')
            })
            .catch(error => {
              if (error.response) {
                for (const property in error.response.data) {
                  this.errors.push(`${property}: ${error.response.data[property]}`)
                }
                console.log(JSON.stringify(error.response.data))
              } else if (error.message) {
                this.errors.push('Something went wrong. Please try again')

                console.log(JSON.stringify(error))
              }
            })
      }
    }
  }
}
</script>

<style scoped>

</style>