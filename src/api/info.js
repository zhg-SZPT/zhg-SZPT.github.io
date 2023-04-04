import request from '../utils/request'

// 获取访问信息
export function getVisitInfo (data) {
  return request({
    url: '/visit/getVisitInfo',
    method: 'post',
    data
  })
}

// 获取用户信息
export function getUserInfo (data) {
  return request({
    url: '/userinfo/getUserInfo',
    method: 'post',
    data
  })
}

// 获取最近更新
export function recentUpdateList (data) {
  return request({
    url: '/recentUpdate/list',
    method: 'post',
    data
  })
}