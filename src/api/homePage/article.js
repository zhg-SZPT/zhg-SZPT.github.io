import request from '../../utils/request'

// 首页获取文章列表
export function getAllArticles (data) {
  return request({
    url: '/article/getAllArticles',
    method: 'post',
    data
  })
}

// 首页获取文章详情
export function getArticleById (data) {
  return request({
    url: '/article/getById',
    method: 'post',
    data
  })
}