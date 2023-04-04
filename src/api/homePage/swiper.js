import request from '../../utils/request'

// 首页获取轮播图
export function getCharts (data) {
  return request({
    url: '/chart/getCharts',
    method: 'post',
    data
  })
}