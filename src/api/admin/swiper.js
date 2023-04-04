import request from '../../utils/request'

// 更新轮播图
export function updateSwiper (data) {
  return request({
    url: '/admin/chart/update',
    method: 'post',
    data
  })
}

// 获取轮播图
export function getSwiperList (data) {
  return request({
    url: '/admin/chart/list',
    method: 'post',
    data
  })
}

// 删除轮播图
export function delSwiper (data) {
  return request({
    url: '/admin/chart/del',
    method: 'post',
    data
  })
}

// 添加轮播图
export function addSwiper (data) {
  return request({
    url: '/admin/chart/save',
    method: 'post',
    data
  })
}