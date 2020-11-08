
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
          '//bossaudioandcomic-1252317822.image.myqcloud.com/activity/document/6c93c84020a960c035585a521a4662fa.jpg',
          '//bossaudioandcomic-1252317822.image.myqcloud.com/activity/document/ee2c52bf31247c24949da77dd887a5bc.jpg']
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
          '//bossaudioandcomic-1252317822.image.myqcloud.com/activity/document/6c93c84020a960c035585a521a4662fa.jpg',
          '//bossaudioandcomic-1252317822.image.myqcloud.com/activity/document/ee2c52bf31247c24949da77dd887a5bc.jpg']
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
          '//bossaudioandcomic-1252317822.image.myqcloud.com/activity/document/6c93c84020a960c035585a521a4662fa.jpg',
          '//bossaudioandcomic-1252317822.image.myqcloud.com/activity/document/ee2c52bf31247c24949da77dd887a5bc.jpg']
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
          '//bossaudioandcomic-1252317822.image.myqcloud.com/activity/document/6c93c84020a960c035585a521a4662fa.jpg',
          '//bossaudioandcomic-1252317822.image.myqcloud.com/activity/document/ee2c52bf31247c24949da77dd887a5bc.jpg']
      }]
    }
  },
  'http://localhost:8080/getBooksBycate|get': option => {
    // console.log(option)
    return {
      status: 200,
      msg: '获取分类图书列表成功',
      data: [{
        id: 1,
        book_cover: '//bookcover.yuewen.com/qdbimg/349573/1023539783/300',
        title: '朕又不想当皇帝',
        author: '争斤论两花花帽',
        description: '重活一回，本想安安稳稳过一生，奈何都想逼着他做皇帝.......'

      },
      {
        id: 2,
        book_cover: '//bookcover.yuewen.com/qdbimg/349573/1023539783/300',
        title: '朕又不想当皇帝2',
        author: '争斤论两花花帽2',
        description: '重活一回，本想安安稳稳过一生，奈何都想逼着他做皇帝.......'

      },
      {
        id: 3,
        book_cover: '//bookcover.yuewen.com/qdbimg/349573/1023539783/300',
        title: '朕又不想当皇帝3',
        author: '争斤论两花花帽3',
        description: '重活一回，本想安安稳稳过一生，奈何都想逼着他做皇帝.......'

      },
      {
        id: 4,
        book_cover: '//bookcover.yuewen.com/qdbimg/349573/1023539783/300',
        title: '朕又不想当皇帝4',
        author: '争斤论两花花帽4',
        description: '重活一回，本想安安稳稳过一生，奈何都想逼着他做皇帝.......'

      },
      {
        id: 5,
        book_cover: '//bookcover.yuewen.com/qdbimg/349573/1023539783/300',
        title: '朕又不想当皇帝5',
        author: '争斤论两花花帽5',
        description: '重活一回，本想安安稳稳过一生，奈何都想逼着他做皇帝.......'

      },
      {
        id: 6,
        book_cover: '//bookcover.yuewen.com/qdbimg/349573/1023539783/300',
        title: '朕又不想当皇帝6',
        author: '争斤论两花花帽6',
        description: '重活一回，本想安安稳稳过一生，奈何都想逼着他做皇帝.......'

      }]
    }
  }
}
