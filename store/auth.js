export const state = () => ({
  jwt: null,
})

export const mutations = {
  SET_JWT(state, token) {
    state.jwt = token
  },
}

export const actions = {
  login({ commit }, user) {
    commit('SET_JWT', user.jwt)
  },
}
