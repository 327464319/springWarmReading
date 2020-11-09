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
      animated
      swipeable
      line-width="80px"
      class="table">
      <van-tab title="东方大陆">
        <van-list v-model="loading"
          :finished="finished"
          finished-text="没有更多了"
          @load="onLoad">
          <van-cell v-for="item in list"
            :key="item"
            :title="item" />
        </van-list>
      </van-tab>
      <van-tab title="东方大陆">2</van-tab>
      <van-tab title="东方大陆">3</van-tab>
      <van-tab title="东方大陆">4</van-tab>
      <van-tab title="标签 2">5</van-tab>
      <van-tab title="标签 3">6</van-tab>
      <van-tab title="标签 4">7</van-tab>
    </van-tabs>
  </div>

</template>

<script>
export default {
  name: 'NextTypes',
  data () {
    return {
      list: [],
      loading: false,
      finished: false
    }
  },
  methods: {
    onLoad () {
      setTimeout(() => {
        for (let i = 0; i < 10; i++) {
          this.list.push(this.list.length + 1)
        }

        // 加载状态结束
        this.loading = false

        // 数据全部加载完成
        if (this.list.length >= 40) {
          this.finished = true
        }
      }, 1000)
    }
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
