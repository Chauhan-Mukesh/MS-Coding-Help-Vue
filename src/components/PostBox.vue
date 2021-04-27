<template>
  <div class="column is-3">
    <div class="box">
      <div class="card">
        <div class="card-image">
          <figure class="image is-4by3">
            <img :src="post.get_thumbnail" :alt="post.post_title">
          </figure>
        </div>
        <div class="card-content">
          <div class="media">
            <div class="media-content">
              <p class="title is-4">{{ post.post_title }}</p>
              <p class="subtitle is-6">{{ post.sub_category }}</p>
            </div>
          </div>

          <div class="content">
            <time datetime="1-1-2016">{{ post.date_added }}</time>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PostBox",
  props:{
    post: Object
  }
}
</script>

<style scoped>
.image {
  margin-top: -1.25rem;
  margin-left: -1.25rem;
  margin-right: -1.25rem;
}
</style>