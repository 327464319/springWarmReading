import request from './request'

/**
 * 获取频道的文章列表
 */
export const getCatesList = () => {
  return request({
    method: 'get',
    url: 'http://localhost:8080/getcates'
  })
}
export const getBooksBycate = booksInfo => request.get('http://localhost:8080/getBooksBycates', { params: booksInfo })
