import request from '../../utils/request'

// 图片上传
export function imageUpload (data) {
  return request({
    url: '/admin/imageUpload',
    method: 'post',
    data,
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  })
}