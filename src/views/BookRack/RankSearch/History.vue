<template>
  <div class="recommend-list">
    <div class="top">
      <div>搜索历史</div>
      <div @click="clearAllHistory"><van-icon name="delete" />清空</div>
    </div>
    <div class="content">
      <van-cell
        :title="item.name"
        icon="underway"
        v-for="item in historyList"
        :key="item.htyId"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'History',
  data () {
    return {

    }
  },
  props: {
    historyList: {
      type: Array,
      required: true
    }
  },
  methods: {
    clearAllHistory () {
      this.$emit('clear-all')
    }
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
