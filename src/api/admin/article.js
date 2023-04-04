import request from '../../utils/request'

// 获取文章列表
export function queryArticleList (data) {
  return request({
    url: '/admin/article/queryArticleList',
    method: 'post',
    data
  })
}

// 获取文章内容
export function getArticle (data) {
  return request({
    url: '/admin/article/getArticle',
    method: 'post',
    data
  })
}

// 发布文章
export function addArticle (data) {
  return request({
    url: '/admin/article/publish',
    method: 'post',
    data
  })
}

// 保存文章
export function keepArticle (data) {
  return request({
    url: '/admin/article/save',
    method: 'post',
    data
  })
}

// 删除文章
export function deleteArticle (data) {
  return request({
    url: '/admin/article/delete',
    method: 'post',
    data
  })
}

// 取消发布
export function unPublish (data) {
  return request({
    url: '/admin/article/unPublish',
    method: 'post',
    data
  })
}

