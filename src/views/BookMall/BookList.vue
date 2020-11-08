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
      error: false
    }
  },
  methods: {
    onLoad () {
      // 异步更新数据
      // setTimeout 仅做示例，真实场景中一般为 ajax 请求
      try {
        if (Math.random() > 0.5) { JSON.parse('sss') }
        setTimeout(() => {
          for (let i = 0; i < 10; i++) {
            this.list.push({
              id: i,
              book_cover: '//bookcover.yuewen.com/qdbimg/349573/1023539783/300',
              title: '朕又不想当皇帝' + i,
              author: '争斤论两花花帽' + i,
              description: '重活一回，本想安安稳稳过一生，奈何都想逼着他做皇帝.......'

            })
          }

          // 数据全部加载完成
          if (this.list.length >= 40) {
            // console.log(this.list)
            this.finished = true
          }
        }, 1000)
      } catch (e) {
        this.loading = false
        this.error = true
      } finally {
        // 加载状态结束
        this.loading = false
      }
    },
    async getBooksListBycate () {
      await getBooksBycate(this.cateId)
      // console.log(res)
    }
  },
  created () {
    this.getBooksListBycate()
  }
}
</script>

<style lang="scss" scoped>
.bookItemContain {
  margin-bottom: 15px;
}
.van-list {
  margin-bottom: 100px;
}
</style>
