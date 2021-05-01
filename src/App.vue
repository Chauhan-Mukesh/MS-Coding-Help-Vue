<template>
  <div id="wrapper">
    <nav class="navbar is-dark is-fixed-top" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <router-link class="navbar-item" to="/">
          <img src="./assets/fav.svg" alt="MS Coding Help" width="80" height="28">
        </router-link>
        <router-link to="/" class="navbar-item"><p class="is-family-code is-size-5"><strong>MS Coding Help</strong></p>
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
          <div class="navbar-item has-dropdown is-hoverable is-family-code">
            <a class="navbar-link">
              Programming Languages
            </a>
            <div class="navbar-dropdown">
              <router-link class="navbar-item nav-item-color"
                           v-for="category in categories"
                           v-bind:key="category.id"
                           :to="category.get_absolute_url"
              >
                {{ category.name }}
              </router-link>
            </div>
          </div>
          <router-link to="/about" class="navbar-item"><p class="is-family-code">About Me</p></router-link>
          <router-link to="/contact-me" class="navbar-item"><p class="is-family-code">Contact US</p></router-link>
          <div class="navbar-item">
          </div>
        </div>
        <div class="navbar-end">
          <div class="navbar-item">
            <form method="get" action="/search">
              <div class="field has-addons">
                <div class="control">
                  <input type="text" class="input" placeholder="What are you looking for?" name="query">
                </div>

                <div class="control">
                  <button class="button is-light">
                      <span class="icon">
                      <i class="fas fa-search"></i>
                      </span>
                  </button>
                </div>
              </div>
            </form>
          </div>
          <div class="navbar-item">
            <div class="buttons">

              <template v-if="$store.state.isAuthenticated">
                <router-link to="/my-account" class="button is-danger">My account</router-link>
              </template>

              <template v-else>
                <router-link to="/sign-in" class="button is-light">Log in</router-link>
              </template>
            </div>
          </div>
        </div>
      </div>
    </nav>
    <section>
      <router-view/>
    </section>

    <footer class="footer has-background-light">

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
      categories: {}
    }
  },
  beforeCreate() {
    this.$store.commit('initializeStore')

    const token = this.$store.state.token

    if (token) {
      axios.defaults.headers.common['Authorization'] = "Token " + token
    } else {
      axios.defaults.headers.common['Authorization'] = ""
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
  color: white !important;
  font-weight: bolder !important;
}

.link:hover {
  color: darkblue !important;
  -webkit-transform: scale(1.2);
}

.link2:hover {
  color: darkred !important;
  -webkit-transform: scale(1.2);
}

.img:hover {
  height: 200px;
  border: 2px solid #fff;
  box-shadow: 10px 10px 5px #ccc;
  -moz-box-shadow: 10px 10px 5px #ccc;
  -webkit-box-shadow: 10px 10px 5px #ccc;
}

footer {
  padding: 1rem 0rem 1rem !important;
}

.lds-dual-ring {
  display: inline-block;
  width: 80px;
  height: 80px;
}

.lds-dual-ring:after {
  content: " ";
  display: block;
  width: 64px;
  height: 64px;
  margin: 8px;
  border-radius: 50%;
  animation: lds-dual-ring 1.2s linear infinite;
}

@keyframes lds-dual-ring {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

.is-loading-bar {
  height: 0;
  overflow: hidden;
  -webkit-transition: all 0.3s;
  transition: all 0.3s;

  &.is-loading {
    height: 80px;
  }
}
</style>