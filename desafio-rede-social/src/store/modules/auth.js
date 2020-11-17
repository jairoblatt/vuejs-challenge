import * as types from '../mutation-types'

export const state = () => ({
    user: {
        name: 'Sophia Reyes',
        user_name: '@sophiii',
        avatar:'https://randomuser.me/api/portraits/women/49.jpg',
        following: 203,
        followers: 200,
    }
})

export const getters = {
    getUser: state => state.user
}