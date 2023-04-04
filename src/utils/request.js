import axios from 'axios'
import { Message } from 'element-ui'
import store from '../store'
import { getToken } from './auth'
import router from '../router'

import { showLoading, hideLoading } from './loading'
const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  timeout: 5000
})

// request interceptor
service.interceptors.request.use(
  config => {
    if (store.getters.token) {
      config.headers['token'] = getToken()
    }
    showLoading()
    return config
  },
  error => {
    console.log(error) // for debug
    hideLoading()
    return Promise.reject(error)
  }
)

// response interceptor
service.interceptors.response.use(
  response => {
    hideLoading()
    const res = response.data
    if (res.code !== 200) {
      Message({
        message: res.message || 'Error',
        type: 'error',
        duration: 5 * 1000
      })
      if (res.code == 400 || res.code == 401) {
        console.log(111)
        store.dispatch('user/resetToken').then(() => {
          router.replace({ path: '/login' })
        })
      }
      return Promise.reject(new Error(res.message || 'Error'))
    } else {
      return res
    }
  },
  error => {
    hideLoading()
    console.log('err' + error) // for debug
    Message({
      message: error.message,
      type: 'error',
      duration: 5 * 1000
    })
    return Promise.reject(error)
  }
)

export default service
