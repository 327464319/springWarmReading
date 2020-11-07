import request from './request'

/**
 * 获取频道的文章列表
 */
export const getBookList = () => {
  return request({
    method: 'get',
    url: 'http://localhost:8080/getbooks'
  })
}
