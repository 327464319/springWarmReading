<template>
  <div class="pay-container">
    <van-nav-bar

  left-arrow
  @click="$router.back()"

/>
<van-cell title="订单信息" value="手机充值" />
<van-cell title="付款方式" is-link  value="花呗" />
<div class="btn">
  <van-button type="primary" size="large">立即付款</van-button>
</div>

  </div>
</template>

<script>
export default {
  name: 'PayMoney'

}
</script>

<style lang="scss" scoped>
 .pay-container{
  .btn{
    text-align: center;

     .van-button{
     background-color: #3296FA;
     width: 96%;

  }

  }
  .van-icon{
   .van-icon-arrow-left{
      color: red;

  }

  }

}

</style>
