import MockJS from 'mockjs'
MockJS.setup({
  timeout: 400
})
const files = require.context('.', true, /\.js$/)
const configArray = []
files.keys().forEach(key => {
  if (key === './index.js') return
  // 每次遍历把得到的对象添加到数组中
  configArray.push(files[key].default)
})
configArray.forEach(item => {
  // 把对象转成二维数组，拿到里面的key和value
  for (const [path, target] of Object.entries(item)) {
    // path 就是对应的路径和请求方式，中间用|隔开
    // target 就是处理函数
    // 切割一下 path
    const protocal = path.split('|')
    // 利用Mock来进行模拟
    Mock.mock(new RegExp(`^${protocal[0]}`), protocal[1], target)
  }
})
