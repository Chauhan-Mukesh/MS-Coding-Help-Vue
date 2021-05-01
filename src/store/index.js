import {createStore} from 'vuex'
import posts from "@/store/modules/posts";

export default createStore({
  state: {
    isAuthenticated: false,
    token: ''
  },
  mutations: {
    initializeStore(state) {
      if (localStorage.getItem('token')) {
        state.token = localStorage.getItem('token')
        state.isAuthenticated = true
      } else {
        state.token = ''
        state.isAuthenticated = false
      }
    },
    setToken(state, token) {
      state.token = token
      state.isAuthenticated = true
    },
    removeToken(state) {
      state.token = ''
      state.isAuthenticated = false
    },
    setIsLoading(state, status) {
      state.isLoading = status
    },
  },
  actions: {
  },
  modules: {
    posts
  }
})
