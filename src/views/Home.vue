<template>
  <div class="home">
    <Header/>
    <section class="section">
      <div class="hero-body has-text-centered">
        <p class="title mb-6 is-family-code">
          Welcome to MS Coding Help
        </p>
        <p class="subtitle is-family-code">
          Feel Free To Ask
        </p>
      </div>
    </section>

    <div class="columns is-multiline mx-5 mb-6">
      <div class="column is-12">
      </div>
      <PostBox v-for="post in latestPosts"
        v-bind:key="post.id"
        v-bind:post="post" />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header.vue'
import PostBox from "@/components/PostBox";
import axios from "axios"

export default {
  name: 'Home',
  data() {
    return {
      latestPosts: []
    }
  },
  components: {
    Header,
    PostBox
  },
  mounted() {
    document.title = 'Home | MS Coding Help'
    this.getLatestPosts()
  },
  methods: {
    getLatestPosts() {
      axios
          .get('/api/v1/latest-posts/')
          .then(response => {
            this.latestPosts = response.data
          })
          .catch(error => {
            console.log(error)
          })
    }
  }
}
</script>
