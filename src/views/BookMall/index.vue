<template>
  <!-- weapp-nav -->
  <div class="mallContain">
    <!-- 搜索头部 -->
    <van-nav-bar fixed>
      <template #left>
        <van-search v-model="value" placeholder="春暖书城" />
      </template>
      <template #right>
        <van-icon
          name="weapp-nav"
          @click="$router.push('/booktypes')"
        ></van-icon>
      </template>
    </van-nav-bar>
    <!-- 主体 -->
    <van-tabs v-model="active">
      <van-tab :title="item.cate_name" v-for="item in catesList" :key="item.id">
        <!-- 轮播图 -->
        <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
          <van-swipe-item v-for="(image, index) in item.images" :key="index">
            <van-image
              :src="image"
              :show-error="true"
              :lazy-load="true"
              class="lazyImg"
              fit="cover"
            />
          </van-swipe-item>
        </van-swipe>
        <!-- 书籍列表 -->
        <book-list :cateId="item.id"></book-list>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
import { getCatesList } from '../../api/category'
import BookList from './BookList'

export default {
  name: 'BookMall',
  components: { BookList },
  data () {
    return {
      value: '',
      active: 0,
      catesList: [{
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
      }]

    }
  },
  methods: {
    async getCates () {
      const { data: res } = await getCatesList()
      // console.log(res)
      if (res.status !== 200) return this.$toast.fail('获取分类列表失败！')
      this.catesList = res.data
    }

  },
  created () {
    this.getCates()
  },
  mounted () {

  }

}
</script>

<style lang="scss" scoped>
::v-deep .van-search__content {
  padding-left: 0;
  .van-field__clear {
    color: #333;
  }
  input::placeholder {
    font-weight: 290;
    font-style: normal;
    font-size: 22px;
    color: #666666;
  }

  width: 280px;
  background: #fff;
  .van-icon-search {
    font-size: 30px;
    color: #333;
  }
}
.van-icon-weapp-nav {
  font-size: 25px;
  color: #333;
}

::v-deep .van-swipe__indicator {
  background: #ed424b;
}
.lazyImg {
  width: 361px;
  height: 150px;
}
.van-swipe {
  width: 361px;
  height: 150px;
  background: #999999;
}
::v-deep .van-field__control {
  font-size: 21px;
}
.van-swipe {
  margin-bottom: 15px;
}
.van-tabs {
  position: fixed;
  top: 45px;
}
.van-search {
  padding: 0;
}
</style>
