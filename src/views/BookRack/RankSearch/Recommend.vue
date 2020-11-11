<template>
  <div class="recommend-list">
    <div class="top">
      <div>大家都在搜</div>
      <div @click="$emit('sort-list')"><van-icon name="replay" />换一批</div>
    </div>
    <div class="content">
      <van-tag
        size="large"
        v-for="item in rcmdList"
        :key="item.rcmdId"
        class="list-item"
        color="#666"
      >
        {{ item.name }}
      </van-tag>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RecommendList',
  props: {
    rcmdList: {
      type: Array,
      required: true
    }
  },
  data () {
    return {
    }
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
    .list-item {
      margin: 6px;
    }
  }
}
</style>
