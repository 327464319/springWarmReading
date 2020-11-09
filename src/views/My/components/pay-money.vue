<template>
  <div class="pay-container">
    <van-nav-bar title="充值金额">

</van-nav-bar>
 <div class="money-box">

   <div class="money">¥{{price}}</div>

  </div>

<van-cell title="订单信息" value="手机充值" />
<van-cell title="付款方式" is-link  value="花呗" />
<div class="btn">
  <van-button type="primary" size="large">立即付款</van-button>
</div>

  </div>
</template>

<script>
export default {
  name: 'PayMoney',
  props: {
    price: {
      type: [Number, String],
      required: true
    }

  }

}
</script>

<style lang="scss" scoped>
 .pay-container{
  .btn{
    text-align: center;

     .van-button{
     background-color: #3296FA;
     width: 90%;
     margin-top:150px ;

  }

  }
  .van-icon{
   .van-icon-arrow-left{
      color: red;

  }

  }
  ::v-deep .van-nav-bar__title{
    color:black !important;
  }
  .money-box{
    display: flex;
    justify-content: center;
    align-items: center;
    .money{
    width: 50%;
    height: 100px;
    // background-color: #3296FA ;
    text-align: center;
    line-height: 100px;
  }

  }

}

</style>
