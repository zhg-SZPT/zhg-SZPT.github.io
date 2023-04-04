const getDefaultState = () => {
  return {
    pageIndex: 'home'
  }
}

const state = getDefaultState()

const mutations = {
  RESET_STATE: (state) => {
    Object.assign(state, getDefaultState())
  },
  SET_PAGE_INDEX (state, index) {
    state.pageIndex = index
  }
}
export default {
  namespaced: true,
  state,
  mutations,
}