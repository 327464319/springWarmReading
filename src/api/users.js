import request from './request'

/**
 * 获取用户数据
 */
export const getuserInfo = (params) => {
  return request({
    method: 'get',
    url: 'http://localhost:8080/getuserInfo',
    params

  })
}
