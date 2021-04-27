<template>
  <div id="wrapper">
    <nav class="navbar is-dark is-fixed-top" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <a class="navbar-item" href="./public/fav.svg">
          <img src="../public/fav.svg" alt="MS Coding Help" width="112" height="28">
        </a>
        <router-link to="/" class="navbar-item"><p class="is-family-code"><strong>MS Coding Help</strong></p>
        </router-link>
        <a class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbar-menu"
           @click="showMobileMenu = !showMobileMenu">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>
      <div class="navbar-menu" id="navbar-menu" v-bind:class="{'is-active': showMobileMenu}">
        <div class="navbar-start">
          <router-link to="/summer" class="navbar-item"><p class="is-family-code">Python</p></router-link>
          <router-link to="/winter" class="navbar-item"><p class="is-family-code">C-Programming</p></router-link>
          <router-link to="/about" class="navbar-item"><p class="is-family-code">About Me</p></router-link>
          <router-link to="/contact-me" class="navbar-item"><p class="is-family-code">Contact US</p></router-link>
          <div class="navbar-item">
          </div>
        </div>
        <div class="navbar-end">
          <div class="navbar-item">
            <div class="buttons">

              <router-link to="/log-in" class="button is-light">Log in</router-link>
            </div>
          </div>
        </div>
      </div>
    </nav>
    <section>
      <router-view/>
    </section>

    <footer class="footer has-background-grey">

        <p class="has-text-centered is-family-code"><strong> &copy Copyright 2021</strong></p>

    </footer>

  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      showMobileMenu: false,
    }
  },
  mounted() {
    this.getCategories()
  },
  methods: {
    getCategories() {
      axios
          .get('/api/v1/category/')
          .then(response => {
            this.categories = response.data
          })
          .catch(error => {
            console.log(error)
          })
    }
  }
}
</script>

<style lang="scss">
@import "../node_modules/bulma";


#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

.nav-item-color:hover {
  background-color: dimgray !important;
}
</style>