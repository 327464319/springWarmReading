<template>
  <div class="homeContain">
    <van-tabbar route>
      <van-tabbar-item icon="home-o" to="/bookrack">书架</van-tabbar-item>
      <van-tabbar-item icon="wap-home-o" to="/bookmall">书城</van-tabbar-item>
      <van-tabbar-item icon="friends-o" to="/my">我的</van-tabbar-item>
    </van-tabbar>
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {

    }
  }

}
</script>

<style lang="scss" scoped>
</style>
