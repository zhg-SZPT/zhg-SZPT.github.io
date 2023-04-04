import request from '../../utils/request'

// 获取信息列表
export function getUserinfo (data) {
  return request({
    url: '/admin/userinfo/get',
    method: 'post',
    data
  })
}

// 修改用户信息
export function updateUserInfo (data) {
  return request({
    url: '/admin/userinfo/update',
    method: 'post',
    data
  })
}