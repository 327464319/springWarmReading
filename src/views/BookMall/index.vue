<template>
  <!-- weapp-nav -->
  <div class="mallContain">
    <!-- 搜索头部 -->
    <van-nav-bar fixed>
      <template #left>
        <van-search v-model="value"
          placeholder="春暖书城" />
      </template>
      <template #right>
        <van-icon name="weapp-nav"
          @click="$router.push('/booktypes')"></van-icon>
      </template>
    </van-nav-bar>
    <!-- 主体 -->
    <van-tabs v-model="active">
      <van-tab :title="item.cate_name"
        v-for="item in catesList"
        :key="item.id">
        <!-- 轮播图 -->
        <van-swipe class="my-swipe"
          :autoplay="3000"
          indicator-color="white">
          <van-swipe-item v-for="(image, index) in item.images"
            :key="index">
            <van-image :src="image"
              :show-error="true"
              :lazy-load="true"
              class="lazyImg"
              fit="cover" />
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
      catesList: []

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
  background: #ffffff;
  .van-icon-search {
    font-size: 30px;
    color: #333;
  }
}
.van-icon-weapp-nav {
  font-size: 30px;
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
</style>
