<template>
  <div class="page-post my-6 is-family-code">
    <section class="section">
      <div class="columns mb-6">
        <div class="column is-8 is-offset-2">
          <figure class="image is-16by9">
            <img :src="postDetail.get_image" alt="">
          </figure>
        </div>
      </div>
      <div class="columns">
        <div class="column is-10 is-offset-1">
          <div class="card mx-4 is-size-1-desktop has-background-light">
            <div class="card-content">
              <div class="media">
                <div class="media-content">
                  <p class="title mb-6 is-size-2">
                    {{ postDetail.post_title }}
                  </p>
                  <p class="subtitle is-capitalized is-size-4" style="white-space: pre-line">
                    {{ postDetail.name }}
                  </p>
                </div>
              </div>
              <div class="content">
                <p class="is-size-5">{{ postDetail.post_description }}</p>
                <time datetime="1-1-2016" class="is-family-code is-size-6">{{ postDetail.date_added }}</time>
              </div>
            </div>
          </div>
        </div>
      </div>

    </section>
    <section class="section">
      <div class="columns">
        <div class="column is-10 is-offset-1">
          <div class="container has-text-centered is-fluid">
            <div class="hero is-light">
              <div class="hero-body">
                <h2 class="title is-4 ha">Leave a Comment</h2>
                <form @submit.prevent="leaveComment">
                  <div class="column is-6 is-offset-3">
                    <div class="field has-addons has-addons-centered">
                      <div class="control is-expanded">
                      <textarea class="textarea" type="text" placeholder="Comment" rows=1
                                style="resize: none;" v-model="comment"></textarea>
                      </div>
                    </div>
                    <div class="control">
                      <button type="submit" class="button is-dark">
                        Submit
                      </button>
                    </div>
                  </div>
                </form>
                <div class="notification is-danger mt-4" v-if="errors.length">
                  <p v-for="error in errors" v-bind:key="error">{{ error }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="section">
      <div class="columns">
        <div class="column is-10 is-offset-1">
          <div class="container has-text-left is-fluid">
            <div class="hero is-light">
              <div class="hero-body">
                <h2 class="title is-4 ml-2">Comments</h2>
                <article class="media mx-3 has-background-white" v-for="c in postComments" v-bind:key="c.id">
                  <div class="media-content mx-2 my-2">
                    <div class="content">
                      <p>
                        <strong>{{ c.user }}</strong>
                        <br>
                        {{ c.comment }}
                      </p>
                    </div>
                    <div>
                      <small>{{ c.date }}</small>
                    </div>
                  </div>
                </article>
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
import Search from "@/views/Search";
import {toast} from "bulma-toast";
import {mapGetters, mapActions} from 'vuex'
export default {
  name: "Post",
  data() {
    return {
      postDetail: {},
      comment: '',
      postComments: {},
      errors: []
    }
  },
  components: {Search},
  created: function () {

    this.getComments();

    setInterval(function () {
      this.getComments();
    }.bind(this), 500);

  },
  mounted() {
    document.title = "Post | MS Coding Help"
    this.getPostDetails()
    // this.getComments()
  },
  methods: {
    async getPostDetails() {
      const sub_category_slug = this.$route.params.sub_category_slug
      const post_slug = this.$route.params.post_slug
      await axios
          .get(`/api/v1/post/${sub_category_slug}/${post_slug}`)
          .then(response => {
            this.postDetail = response.data
          })
          .catch(error => {
            console.log(error)
          })
    },
    async leaveComment() {
      let user = localStorage.getItem('token')
      this.errors = []
      if (user === null) {
        this.errors.push("Login Required: Please login first")
      }
      if (this.comment === '') {
        this.errors.push('Comment can\'t be empty')
      }
      if (this.comment.length < 5) {
        this.errors.push('Comment should have at least 5 words.')
      }
      if (!this.errors.length) {
        const formData = {
          post: this.postDetail.id,
          user: localStorage.getItem('token'),
          comment: this.comment,
        }
        axios
            .post("/api/v1/comment/", formData)
            .then(response => {
              toast({
                message: 'Comment posted successfully',
                type: 'is-success',
                dismissible: true,
                pauseOnHover: true,
                duration: 2000,
                position: 'bottom-right',
              })
              this.$router.push(this.$route)

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
    },
    async getComments() {
      axios
          .get('/api/v1/get-comments/')
          .then(response => {
            this.postComments = response.data
          })
          .catch(error => {
            console.log(error)
          })
    }
  }
}
</script>

<style scoped>

</style>