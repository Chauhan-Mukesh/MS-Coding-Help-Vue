<template>
  <link href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet"
        integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN" crossorigin="anonymous">
  <div class="contact-me is-family-code">
    <section class="hero is-fullheight mt-6 mx-0">
      <div class="hero-body has-background-white">
        <div class="container has-text-centered">
          <div class="columns is-8 is-variable ">
            <div class="column is-two-thirds has-text-left">
              <h1 class="title is-1">Contact Us</h1>
              <p  class="is-size-4">Write your questions and doubts here, I will try to answer your Questions,
                and If you have any suggestions, please feel free to contact me I would be happy to have that.</p>
              <div class="social-media">
                <a href="https://www.facebook.com/profile.php?id=100009316725203" target="_blank"
                   class="button is-light is-large"><i
                    class="fa fa-facebook-square" aria-hidden="true"></i></a>
                <a href="https://www.instagram.com/mukeshchauhan3106/" target="_blank" class="button is-light is-large"><i
                    class="fa fa-instagram" aria-hidden="true"></i></a>
                <a href="https://twitter.com/M8128494414" target="_blank" class="button is-light is-large"><i
                    class="fa fa-twitter"
                    aria-hidden="true"></i></a>
              </div>
            </div>

            <div class="column is-one-third has-text-left">
              <form @submit.prevent="submitForm">
                <div class="columns">
                  <div class="column is-6">
                    <div class="field">
                      <label class="label">First Name</label>
                      <p class="control has-icons-left has-icons-right">
                        <input class="input" type="name" placeholder="First Name" v-model="first_name">
                        <span class="icon is-small is-left">
                        <i class="fa fa-user"></i>
                      </span>
                      </p>
                    </div>
                  </div>
                  <div class="column is-6">
                    <div class="field">
                      <label class="label">Last Name</label>
                      <p class="control has-icons-left has-icons-right">
                        <input class="input" type="name" placeholder="Last Name" v-model="last_name">
                        <span class="icon is-small is-left">
                        <i class="fa fa-user"></i>
                      </span>
                      </p>
                    </div>
                  </div>
                </div>
                <div class="field">
                  <label class="label">Email</label>
                  <p class="control has-icons-left has-icons-right">
                    <input class="input" type="email" placeholder="Email" v-model="email">
                    <span class="icon is-small is-left">
                  <i class="fa fa-envelope"></i>
                  </span>
                  </p>
                </div>
                <div class="field">
                  <label class="label">Phone</label>
                  <p class="control has-icons-left has-icons-right">
                    <input class="input" type="tel" placeholder="Phone" v-model="phone">
                    <span class="icon is-small is-left">
                  <i class="fa fa-phone"></i>
                  </span>
                  </p>
                </div>
                <div class="field">
                  <label class="label">Subject</label>
                  <p class="control has-icons-left has-icons-right">
                    <input class="input" type="text" placeholder="Subject" v-model="subject">
                    <span class="icon is-small is-left">
                  <i class="fa fa-comment"></i>
                  </span>
                  </p>
                </div>
                <div class="field">
                  <label class="label">Message</label>
                  <p class="control has-icons-left has-icons-right">
                    <textarea class="textarea is-medium" maxlength=500 type="text" v-model="messag"></textarea>
                    <span class="icon is-small is-left">
                  <i class="fa fa-comments-o"></i>
                  </span>
                  </p>
                </div>
                <div class="control">
                  <button class="button is-dark is-fullwidth has-text-weight-medium is-medium"
                  >Send Message
                  </button>
                </div>
              </form>

              <div class="notification is-danger mt-4" v-if="errors.length">
                <p v-for="error in errors" v-bind:key="error">{{ error }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

  </div>
</template>
<script>
import axios from "axios";
import {toast} from "bulma-toast";

export default {
  name: "ContactMe",
  data() {
    return {
      first_name: '',
      last_name: '',
      email: '',
      phone: '',
      subject: '',
      messag: '',
      errors: []
    }
  },
  mounted() {
    document.title = 'Contact Us | MS Coding Help'
  },
  methods: {
    submitForm() {
      this.errors = []
      if (this.first_name === '') {
        this.errors.push('The first name field is missing!')
      }
      if (this.last_name === '') {
        this.errors.push('The last name field is missing!')
      }
      if (this.email === '') {
        this.errors.push('The email field is missing!')
      }
      if (this.phone === '') {
        this.errors.push('The phone field is missing!')
      }
      if (this.subject === '') {
        this.errors.push('The subject field is missing!')
      }
      if (this.subject.length < 20) {
        this.errors.push('The subject must contain minimum 20  character')
      }
      if (this.message === '') {
        this.errors.push('The message field is missing!')
      }
      if (this.messag.length < 30) {
        this.errors.push('The message must contain minimum 30 character')
      }
      if (!this.errors.length) {
        const formData = {
          first_name: this.first_name,
          last_name: this.last_name,
          email: this.email,
          phone: this.phone,
          subject: this.subject,
          message: this.messag,
        }
        axios
            .post("/api/v1/contact-us/", formData)
            .then(response => {
              toast({
                message: 'Message sent successfully',
                type: 'is-success',
                dismissible: true,
                pauseOnHover: true,
                duration: 2000,
                position: 'bottom-right',
              })
              this.$router.push('/')
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