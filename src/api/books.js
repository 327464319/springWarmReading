import request from './request'

/**
 * 获取书架的文章列表
 */
export const getBookList = () => {
  return request({
    method: 'get',
    url: 'http://localhost:8080/getbooks'
  })
}
/**
 * 获取推荐的书籍列表
 */
export const getrcmdList = () => {
  return request({
    method: 'get',
    url: 'http://localhost:8080/getrecommendlist'
  })
}
