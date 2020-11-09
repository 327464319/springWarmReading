<template>
  <van-list
    v-model="loading"
    :finished="finished"
    finished-text="没有更多了"
    @load="onLoad"
    :error.sync="error"
    error-text="请求失败，点击重新加载"
  >
    <book-item
      :bookitem="item"
      v-for="(item, index) in list"
      :key="index + 'c'"
    ></book-item>
  </van-list>
</template>

<script>
import { getBooksBycate } from '../../api/category'
import BookItem from './BookItem'
export default {
  name: 'BookList',
  props: {
    cateId: {
      type: [Number, String], required: true
    }
  },
  components: { BookItem },

  data () {
    return {
      list: [],
      loading: false,
      finished: false,
      error: false,
      booksInfo: { cate_id: this.cateId, books_page: 0 }
    }
  },
  methods: {
    async  onLoad () {
      // 异步更新数据
      // setTimeout 仅做示例，真实场景中一般为 ajax 请求
      try {
        // if (Math.random() > 0.9) { JSON.parse('sss') }

        if (this.list.length >= 40) {
          // console.log(this.list)
          this.finished = true
          this.error = false
        } else {
          const { data: res } = await getBooksBycate(
            this.booksInfo
          )
          this.list.push(...res.data)
          console.log(this.list.length)
          this.booksInfo.books_page++
        }

        // 数据全部加载完成
      } catch (e) {
        console.log(e)
        this.error = true
      } finally {
        // 加载状态结束
        this.loading = false
      }
    }

  },
  created () {

  }
}
</script>

<style lang="scss" scoped>
.bookItemContain {
  margin-bottom: 15px;
}
.van-list {
  padding-left: 10px;
  height: 54vh;
  overflow-y: auto;
}
</style>
