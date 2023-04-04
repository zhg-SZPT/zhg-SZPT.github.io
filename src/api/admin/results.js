import request from '../../utils/request'

// 获取成果列表
export function queryAchievements (data) {
  return request({
    url: '/admin/achievement/queryAchievements',
    method: 'post',
    data
  })
}

// 修改成果
export function updateAchievements (data) {
  return request({
    url: '/admin/achievement/update',
    method: 'post',
    data
  })
}

// 新增成果
export function addAchievement (data) {
  return request({
    url: '/admin/achievement/addAchievement',
    method: 'post',
    data
  })
}

//删除成果
export function delAchievement (data) {
  return request({
    url: '/admin/achievement/delAchievement',
    method: 'post',
    data
  })
}