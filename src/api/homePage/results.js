import request from '../../utils/request'

// 获取论文列表
export function getPaperAchievement (data) {
  return request({
    url: '/achievement/getPaperAchievement',
    method: 'post',
    data
  })
}

// 获取专利列表
export function getPatentAchievement (data) {
  return request({
    url: '/achievement/getPatentAchievement',
    method: 'post',
    data
  })
}