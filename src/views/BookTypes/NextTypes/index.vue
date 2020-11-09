<template>
  <div class="next-types">
    <van-nav-bar title="玄幻">
      <template #left>
        <van-icon name="arrow-left"
          color="#8E8E8E"
          size="26px"
          @click="$router.back()" />
      </template>
    </van-nav-bar>
    <!-- 书的列表 -->
    <van-tabs v-model="active"
      class="table">
      <van-tab :title="item.cate_name"
        v-for="item in catesList"
        :key="item.id">
        <book-list :cateId="item.id"></book-list>
      </van-tab>
    </van-tabs>
  </div>

</template>

<script>
import { getCatesList } from '../../../api/category'
import BookList from '../../BookMall/BookList'

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
.next-types {
  .book-nav-type {
    .title {
      font-size: 16px;
    }
  }
  ::v-deep .table {
    padding-bottom: 5px;
    .van-icon {
      color: #333333;
    }
    .van-tab {
      border-bottom: 1px solid #777777;
      border-top: 1px solid #777777;
      min-width: 80px;
      font-size: 16px;
      color: #333333;
    }
  }
}
</style>
