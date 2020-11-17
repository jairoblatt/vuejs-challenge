import * as types from '../mutation-types'
import { posts as postFake } from '@/mixins/fake'

export const state = () => ({
    posts:[...postFake]
})

export const getters = {
    getPosts: state => state.posts
}


export const mutations = {
    [types.SET_NEW_POST](state,payload){
        state.posts.unshift (payload);
    }
}

export const actions = {
    createNewPost({ commit }, payload){
        commit(types.SET_NEW_POST,payload);
    }
}