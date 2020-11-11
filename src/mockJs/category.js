
export default {
  'http://localhost:8080/getcates|get': option => {
    // console.log(option)
    return {
      status: 200,
      msg: '获取分类列表成功',
      data: [{
        id: 1,
        cate_name: '精选',
        images: ['//bossaudioandcomic-1252317822.image.myqcloud.com/activity/document/ee2c52bf31247c24949da77dd887a5bc.jpg',
          '//bossaudioandcomic-1252317822.image.myqcloud.com/activity/document/2f34c4f7dd6eac9be4d04461ba5aed44.jpg',
          '//bossaudioandcomic-1252317822.image.myqcloud.com/activity/document/6c93c84020a960c035585a521a4662fa.jpg'
        ]
      },
      {
        id: 2,
        cate_name: '男频',
        images: ['//bossaudioandcomic-1252317822.image.myqcloud.com/activity/document/dc7488316053c842a9aab699d4b23fc0.jpg',
          '//bossaudioandcomic-1252317822.image.myqcloud.com/activity/document/91db4f89fbad5a6157a1053867197d5e.jpg',
          '//bossaudioandcomic-1252317822.image.myqcloud.com/activity/document/62159770066a1ddb0122bfdd43181774.jpg',
          '//bossaudioandcomic-1252317822.image.myqcloud.com/activity/document/f3fbf64bbd80df576f8a6e6ad91597b7.jpg']
      },
      {
        id: 3,
        cate_name: '女频',
        images: ['//bossaudioandcomic-1252317822.image.myqcloud.com/activity/document/ee2c52bf31247c24949da77dd887a5bc.jpg',
          '//bossaudioandcomic-1252317822.image.myqcloud.com/activity/document/2f34c4f7dd6eac9be4d04461ba5aed44.jpg',
          '//bossaudioandcomic-1252317822.image.myqcloud.com/activity/document/6c93c84020a960c035585a521a4662fa.jpg'
        ]
      },
      {
        id: 4,
        cate_name: '免费',
        images: ['//bossaudioandcomic-1252317822.image.myqcloud.com/activity/document/dc7488316053c842a9aab699d4b23fc0.jpg',
          '//bossaudioandcomic-1252317822.image.myqcloud.com/activity/document/91db4f89fbad5a6157a1053867197d5e.jpg',
          '//bossaudioandcomic-1252317822.image.myqcloud.com/activity/document/62159770066a1ddb0122bfdd43181774.jpg',
          '//bossaudioandcomic-1252317822.image.myqcloud.com/activity/document/f3fbf64bbd80df576f8a6e6ad91597b7.jpg']
      },
      {
        id: 5,
        cate_name: '热评',
        images: ['//bossaudioandcomic-1252317822.image.myqcloud.com/activity/document/ee2c52bf31247c24949da77dd887a5bc.jpg',
          '//bossaudioandcomic-1252317822.image.myqcloud.com/activity/document/2f34c4f7dd6eac9be4d04461ba5aed44.jpg',
          '//bossaudioandcomic-1252317822.image.myqcloud.com/activity/document/6c93c84020a960c035585a521a4662fa.jpg'
        ]
      },
      {
        id: 6,
        cate_name: '新书',
        images: ['//bossaudioandcomic-1252317822.image.myqcloud.com/activity/document/ee2c52bf31247c24949da77dd887a5bc.jpg',
          '//bossaudioandcomic-1252317822.image.myqcloud.com/activity/document/2f34c4f7dd6eac9be4d04461ba5aed44.jpg',
          '//bossaudioandcomic-1252317822.image.myqcloud.com/activity/document/6c93c84020a960c035585a521a4662fa.jpg',
          '//bossaudioandcomic-1252317822.image.myqcloud.com/activity/document/ee2c52bf31247c24949da77dd887a5bc.jpg']
      },
      {
        id: 7,
        cate_name: '完本',
        images: ['//bossaudioandcomic-1252317822.image.myqcloud.com/activity/document/ee2c52bf31247c24949da77dd887a5bc.jpg',
          '//bossaudioandcomic-1252317822.image.myqcloud.com/activity/document/2f34c4f7dd6eac9be4d04461ba5aed44.jpg',
          '//bossaudioandcomic-1252317822.image.myqcloud.com/activity/document/6c93c84020a960c035585a521a4662fa.jpg'
        ]
      },
      {
        id: 8,
        cate_name: '武侠',
        images: ['//bossaudioandcomic-1252317822.image.myqcloud.com/activity/document/ee2c52bf31247c24949da77dd887a5bc.jpg',
          '//bossaudioandcomic-1252317822.image.myqcloud.com/activity/document/2f34c4f7dd6eac9be4d04461ba5aed44.jpg',
          '//bossaudioandcomic-1252317822.image.myqcloud.com/activity/document/6c93c84020a960c035585a521a4662fa.jpg',
          '//bossaudioandcomic-1252317822.image.myqcloud.com/activity/document/ee2c52bf31247c24949da77dd887a5bc.jpg']
      }
      ]
    }
  },
  'http://localhost:8080/getBooksBycate|get': option => {
    const arr = option.url.split('?')
    const paramsarr = arr[1].split('&')
    const params = {}
    paramsarr.forEach((v) => {
      const arr = v.split('=')
      params[arr[0]] = arr[1]
    })

    const data = []
    for (let i = 0; i < 10; i++) {
      const number = params.books_page * 10 + i
      data.push({
        id: number,
        book_cover: '//bookcover.yuewen.com/qdbimg/349573/1023539783/300',
        title: '朕又不想当皇帝' + number,
        author: '争斤论两花花帽' + number,
        description: '重活一回，本想安安稳稳过一生，奈何都想逼着他做皇帝.......'

      })
    }
    return {
      status: 200,
      msg: '获取分类图书列表成功',
      data
    }
  }
}
