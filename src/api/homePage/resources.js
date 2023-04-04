import request from '../../utils/request'

// 获取权重列表
export function queryWeightsResources (data) {
  return request({
    url: '/resources/queryWeightsResources',
    method: 'post',
    data
  })
}

// 获取数据集列表
export function queryDataSetResources (data) {
  return request({
    url: '/resources/queryDataSetResources',
    method: 'post',
    data
  })
}

// 获取优秀文章列表
export function queryExcellentResources (data) {
  return request({
    url: '/resources/queryExcellentResources',
    method: 'post',
    data
  })
}