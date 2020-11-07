<template>
  <div class="artilce-container">
    <van-swipe
      class="my-swipe"
      indicator-color="white"
      :show-indicators="false"
      ref="bookRef"
      @Change="onChange"
    >
      <van-swipe-item
        v-for=" (v,i) in list"
        :key="i"
        v-html="v.textContent"
      >
      </van-swipe-item>
      <template #indicator>
        <div class="custom-indicator">
          {{ current + 1 }}/4
        </div>
      </template>

    </van-swipe>

    <!-- 中部设置按钮 -->
    <van-button
      class="center-btn"
      type="warn"
      @click="setShow"
    >
      setShow
    </van-button>

    <!-- 左翻按钮 -->
    <van-button
      class="left-btn"
      type="primary"
      @click="prevPage"
    >
      prevPage
    </van-button>
    <!-- 左翻按钮 -->
    <van-button
      class="right-btn"
      type="primary"
      @click="nextPage"
    >
      nextPage
    </van-button>
  </div>
</template>

<script>
import bookData from '@/assets/text'

export default {
  name: 'ArticleIndex',
  data () {
    return {
      list: [],
      setShow: false,
      current: 0
    }
  },
  created () {},
  mounted () {
    console.log(bookData[0].bookContents)

    this.loadBookDdata()
  },
  methods: {
    onChange (index) {
      this.current = index
    },
    prevPage () {
      this.$refs.bookRef.prev()
    },
    nextPage () {
      this.$refs.bookRef.next()
    },
    loadBookDdata () {
      bookData[0].bookContents.forEach(v => {
        // console.log(v.setions)
        this.list.push(...v.setions)
      })
      console.log(this.list)
    }
  }
}
</script>

<style lang="scss" scoped>
.artilce-container {
  .my-swipe .van-swipe-item {
    position: relative;
    margin-top: 50px;
    color: #fff;
    // height: 550px;
    font-size: 20px;
    line-height: 30px;
    text-align: center;
    background-color: #39a9ed;
  }
  ::v-deep .custom-indicator {
    position: fixed;
    right: 5px;
    bottom: 30px;
    padding: 2px 5px;
    font-size: 12px;
    background: rgba(0, 0, 0, 0.1);
  }
  .center-btn {
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 30%;
    height: 30%;
    opacity: 0.5;
  }
  .left-btn {
    position: fixed;
    left: 0;
    top: 8%;
    width: 35%;
    height: 85%;
    opacity: 0.5;
  }
  .right-btn {
    position: fixed;
    right: 0;
    top: 8%;
    width: 35%;
    height: 85%;
    opacity: 0.5;
  }
}
</style>
