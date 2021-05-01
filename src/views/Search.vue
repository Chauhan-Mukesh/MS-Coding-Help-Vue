<template>
  <div class="page-search my-6 is-family-code">
    <div class="columns is-multiline">
      <div class="column is-12">
        <h1 class="title mt-6">Search</h1>

        <h2 class="is-size-5 has-text-grey">Search term: "{{ query }}"</h2>
      </div>
    </div>
    <section class="section">
        <div class="columns is-multiline mx-5 mb-6">
          <PostBox v-for="post in posts"
                   v-bind:key="post.id"
                   v-bind:post="post"/>
        </div>
      </section>
  </div>
</template>

<script>
import axios from 'axios'
import PostBox from '@/components/PostBox.vue'

export default {
  name: 'Search',
  components: {
    PostBox
  },
  data() {
    return {
      posts: [],
      query: ''
    }
  },
  mounted() {
    document.title = 'Search | Djackets'
    let uri = window.location.search.substring(1)
    let params = new URLSearchParams(uri)
    if (params.get('query')) {
      this.query = params.get('query')
      this.performSearch()
    }
  },
  methods: {
    async performSearch() {
      this.$store.commit('setIsLoading', true)
      await axios
          .post('/api/v1/posts/search/', {'query': this.query})
          .then(response => {
            this.posts = response.data
            console.log(this.posts)
          })
          .catch(error => {
            console.log(error)
          })
      this.$store.commit('setIsLoading', false)
    }
  }
}
</script>