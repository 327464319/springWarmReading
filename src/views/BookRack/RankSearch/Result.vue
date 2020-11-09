<template>
  <div class="recommend-list">
    <div class="top">
      <div>搜索结果</div>
    </div>
    <div class="content">
      <!-- 通用错误 -->
      <van-empty image="error" description="没有更多了" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Result',
  data () {
    return {
    }
  },
  props: {
  },
  methods: {

  }
}
</script>

<style lang="scss" scoped>
.recommend-list {
  .top {
    margin: 20px 20px;
    display: flex;
    justify-content: space-between;
    div {
      font-size: 14px;
    }
  }
  .content {
    margin: 0 14px;
  }
}
</style>
