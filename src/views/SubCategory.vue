<template>
<div class="page-sub-category mt-5 is-family-code">
  <section class="section">
    <div class="hero is-dark">
      <div class="hero-body has-text-centered">
        <p class="title mb-6">
          What do you want to learn?
        </p>
        <p class="subtitle is-capitalized">
          Learn everyday something new
        </p>
      </div>
    </div>
  </section>
  <section class="section">
    <div class="columns is-multiline mx-5 mb-6">
      <PostBox v-for="post in sub_category_post"
               v-bind:key="post.id"
               v-bind:post="post"/>
    </div>
  </section>
</div>
</template>

<script>
import axios from "axios";
import PostBox from "@/components/PostBox";

export default {
  name: "SubCategory",
  data() {
    return {
      sub_category_post: {}
    }
  },
  components: {
    PostBox
  },
  mounted() {
    document.title = 'Sub Category | MS Coding Help'
    this.getSubCategoryPosts()
  },
  methods: {
    async getSubCategoryPosts() {
      const sub_category_slug = this.$route.params.sub_category_slug
      await axios
          .get(`/api/v1/sub-category/${sub_category_slug}`)
          .then(response => {
            this.sub_category_post = response.data
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