<template>
  <!-- weapp-nav -->
  <div class="mallContain">
    <!-- 搜索头部 -->
    <van-nav-bar>
      <template #left>
        <van-search v-model="value" placeholder="春暖书城" />
      </template>
      <template #right>
        <van-icon name="weapp-nav"></van-icon>
      </template>
    </van-nav-bar>
    <!-- 主体 -->
    <van-tabs v-model="active">
      <van-tab title="标签 1">内容 1</van-tab>
      <van-tab title="标签 2">内容 2</van-tab>
      <van-tab title="标签 3">内容 3</van-tab>
      <van-tab title="标签 4">内容 4</van-tab>
    </van-tabs>
  </div>
</template>

<script>
export default {
  name: 'BookMall',
  data () {
    return {
      value: ''
    }
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
</style>
