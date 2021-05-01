import axios from "axios";

const state = {
    posts: [],
    comments:[],
    errors: []
};
const getters = {
    latestPosts: state => (state).posts,
    comment:state => (state).comments
};
const actions = {
    async getLatestPosts({commit}) {
        const response = await axios.get('/api/v1/latest-posts/')
            commit('setPosts', response.data)

    },
    async getComments({commit}) {
        const response = await axios.get('/api/v1/get-comments/')
            commit('setComments', response.data)

    },
};
const mutations = {
    setPosts: (state, posts) => (state.posts = posts),
    setComments: (state, comments) => (state.comments = comments)

};

export default {
    state,
    actions,
    mutations,
    getters
};