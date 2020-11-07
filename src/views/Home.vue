<template>
  <div class="homeContain">
    <van-tabbar v-model="active">
      <van-tabbar-item icon="home-o">标签</van-tabbar-item>
      <van-tabbar-item icon="search">标签</van-tabbar-item>
      <van-tabbar-item icon="friends-o">标签</van-tabbar-item>
    </van-tabbar>

    <router-view />
  </div>
</template>

<script>
export default {
  data () {
    return {
      active: ''
    }
  }

}
</script>

<style lang="scss" scoped>
</style>
