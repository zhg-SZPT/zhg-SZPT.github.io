import request from '../../utils/request'

// 获取资源列表
export function queryResources (data) {
  return request({
    url: '/admin/resources/queryResources',
    method: 'post',
    data
  })
}

// 新增资源
export function addResources (data) {
  return request({
    url: '/admin/resources/add',
    method: 'post',
    data
  })
}

// 修改资源
export function updateResources (data) {
  return request({
    url: '/admin/resources/update',
    method: 'post',
    data
  })
}

// 删除资源
export function deleteResources (data) {
  return request({
    url: '/admin/resources/delete',
    method: 'post',
    data
  })
}