// 获取用户信息
export default {
  'http://localhost:8080/getuserInfo|get': option => {
    // console.log(option)
    return {
      status: 200,
      msg: '获取用户信息成功',
      data: {
        username: '变秃变强',
        nickname: ''
      }
    }
  }
}
// 获取充值数据
