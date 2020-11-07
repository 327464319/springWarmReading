
export default {
  'http://localhost:8080/getcates|get': option => {
    console.log(option)
    return {
      status: 200,
      msg: '获取书籍列表成功',
      data: [{}]
    }
  }
}
