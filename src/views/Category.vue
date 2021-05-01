<template>
  <div class="page-category mt-4 is-family-code">
    <section class="section">
      <div class="hero is-dark">
        <div class="hero-body has-text-centered">
          <p class="title mb-6 is-size-1-desktop">
            What do you want to learn?
          </p>
          <p class="subtitle is-capitalized">
            Learn everyday something new
          </p>
        </div>
      </div>
    </section>
    <section class="mx-5 mb-6">
      <div class="columns is-multiline mx-2">
        <div class="column is-12">
        </div>
        <div class="column is-3"
             v-for="subcategory in sub_categories"
             v-bind:key="sub_categories.id">
          <div class="box">
            <div class="card">
              <div class="card-image">
                <figure class="image is-4by3">
                  <img  class="img" :src="subcategory.get_image" :alt="subcategory.name">
                </figure>
              </div>
              <div class="card-content">
                <div class="media">
                  <div class="media-content">
                    <router-link :to="subcategory.get_absolute_url">
                    <p class="title is-4 has-text-dark link">{{ subcategory.name }}</p></router-link>
                  </div>
                </div>
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

export default {
  name: "Category",
  data() {
    return {
      sub_categories: {}
    }
  },
  components: {
  },
  mounted() {
    document.title = 'Category | MS Coding Help'
    this.getSubCategory()
  },
  watch: {
    '$route'(to, from) {
      this.getSubCategory()

    },
  },
  methods: {
    async getSubCategory() {
      const category_slug = this.$route.params.category_slug
      await axios
          .get(`/api/v1/category/${category_slug}/`)
          .then(response => {
            this.sub_categories = response.data
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