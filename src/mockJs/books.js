import MockJS from 'mockjs'
var Random = MockJS.Random

export default {
  'http://localhost:8080/getbooks|get': option => {
    console.log(option)
    return {
      status: 200,
      msg: '获取书籍列表成功',
      data: {
        books_id: 1,
        book_name: '斗罗大陆',
        book_image: 'https://dss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=1012342846,1119351113&fm=179&app=35&f=JPEG?w=267&h=356&s=BD4C2FCA17F39FD84444B5080300F0C2',
        book_createTime: Random.date(), // 创建时间
        book_hasRead: Random.integer(0, 100), // 已经阅读了多少
        books_newRead: +new Date()
      }
    }
  }
}
