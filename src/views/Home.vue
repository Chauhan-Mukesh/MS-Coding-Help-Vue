<template>
  <div class="home is-family-code">
    <Header/>
    <section class="section">
      <div class="hero-body has-text-centered">
        <p class="title mb-6 is-size-1-desktop">
          Welcome to MS Coding Help
        </p>
        <p class="subtitle is-capitalized">
          Feel Free To Ask
        </p>
      </div>
      <div class="container has-text-centered">
        <p>We have created a fictional band website. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
          eu
          fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
          mollit
          anim id est
          laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
          enim
          ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
      </div>
    </section>

    <section class="section mx-2">
      <div class="box has-background-light has-text-left">
        <p class="title mb-1">
                Latest Posts
            </p>
      </div>
    </section>

    <section class="section">
      <div class="columns is-multiline mx-2 mb-6">

        <PostBox v-for="post in latestPosts"
                 v-bind:key="post.id"
                 v-bind:post="post"/>
      </div>
    </section>
  </div>

</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header.vue'
import PostBox from "@/components/PostBox";
import {mapGetters,mapActions} from 'vuex'

export default {
  name: 'Home',
  components: {
    Header,
    PostBox
  },
  mounted() {
    document.title = 'Home | MS Coding Help'
  },
  methods: {
    ...mapActions(['getLatestPosts']),
  },
  computed: mapGetters(['latestPosts']),
  created(){
    this.getLatestPosts();
  }
}
</script>
