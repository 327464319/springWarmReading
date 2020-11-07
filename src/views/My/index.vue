<template>
  <div class="my-contain">
    <div class="box">
      <van-image round
        width="100"
        height="100"
        lazy-load
        src="https://img.yzcdn.cn/vant/cat.jpeg" />
      <button>去登录</button>

    </div>
    <van-cell title="我的账户"
      is-link>
      <van-button round
        size="mini">立即充值</van-button>
    </van-cell>
    <van-cell title="我的阅历"
      is-link />
    <van-cell title="充值记录"
      is-link />
    <van-cell title="购买记录"
      is-link />
    <van-cell title="单元格"
      is-link />
    <van-cell title="浏览历史"
      is-link />
    <van-cell title="我的阅读基因"
      is-link />
    <van-cell title="设置"
      is-link />

  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.my-contain {
  .box {
    height: 300px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
}
</style>
