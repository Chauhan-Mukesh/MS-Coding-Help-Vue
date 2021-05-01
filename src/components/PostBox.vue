<template>
  <div class="column is-3 is-family-code">
    <div class="box">
      <div class="card">
        <div class="card-image">
          <figure class="image is-2by1">
            <img class="img" :src="post.get_thumbnail" :alt="post.post_title">
          </figure>
        </div>
        <div class="card-content">
          <div class="media">
            <div class="media-content">
              <router-link :to="post.get_absolute_url">
                <p class="title is-4 link">{{ post.post_title }}</p>
              </router-link>
              <p class="subtitle is-6 mt-2">{{ post.name }}</p>
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
