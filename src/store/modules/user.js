import { login } from '../../api/user'
import { getToken, setToken, removeToken } from '@/utils/auth'
import { getUserInfo, getVisitInfo } from '../../api/info'

const getDefaultState = () => {
  return {
    token: getToken(),
    userInfo: {
      iconUrl: '',
      teamImg: '',
      fullName: '',
      introduce: '',
      phone: '',
      email: '',
    },
    visitInfo: {
      visitNum: 0,
      recentVisitTime: ''
    }
  }
}

const state = getDefaultState()

const mutations = {
  RESET_STATE: (state) => {
    Object.assign(state, getDefaultState())
  },
  SET_TOKEN: (state, token) => {
    state.token = token
  },
  SET_NAME: (state, name) => {
    state.name = name
  },
  SET_AVATAR: (state, avatar) => {
    state.avatar = avatar
  },
  SET_USERINFO: (state, infoObj) => {
    state.userInfo = infoObj
  },
  SET_VISITINFO: (state, infoObj) => {
    state.visitInfo = infoObj
  }
}

const actions = {
  getVisitInfoList ({ commit }) {
    getVisitInfo().then((res) => {
      let obj = (({
        visitNum,
        recentVisitTime
      }) => ({
        visitNum,
        recentVisitTime
      }))(res.data)
      console.log(obj)
      commit("SET_VISITINFO", obj)
    })
  },
  getUserInfoList ({ commit }) {
    getUserInfo().then((res) => {
      let obj = (({
        iconUrl,
        teamImg,
        fullName,
        introduce,
        phone,
        email
      }) => ({
        iconUrl,
        teamImg,
        fullName,
        introduce,
        phone,
        email
      }))(res.data)
      commit("SET_USERINFO", obj)
    })
  },
  // user login
  login ({ commit }, userInfo) {
    const { username, password } = userInfo
    return new Promise((resolve, reject) => {
      login({ userName: username.trim(), password: password }).then(response => {
        const { data } = response
        commit('SET_TOKEN', data.token)
        setToken(data.token)
        resolve()
      }).catch(error => {
        reject(error)
      })
    })
  },

  // get user info
  getInfo ({ commit, state }) {
    return new Promise((resolve, reject) => {
      getInfo(state.token).then(response => {
        const { data } = response

        if (!data) {
          return reject('Verification failed, please Login again.')
        }

        const { name, avatar } = data
        commit('SET_NAME', name)
        commit('SET_AVATAR', avatar)
        resolve(data)
      }).catch(error => {
        reject(error)
      })
    })
  },

  // user logout
  logout ({ commit, state }) {
    return new Promise((resolve, reject) => {
      logout(state.token).then(() => {
        removeToken() // must remove  token  first
        resetRouter()
        commit('RESET_STATE')
        resolve()
      }).catch(error => {
        reject(error)
      })
    })
  },

  // remove token
  resetToken ({ commit }) {
    return new Promise(resolve => {
      removeToken() // must remove  token  first
      commit('RESET_STATE')
      resolve()
    })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}

