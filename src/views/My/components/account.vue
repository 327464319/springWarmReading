<template>
  <div class="account-container">
    <van-nav-bar
    class="my-account"
   title="我的账户"
   left-arrow
   @click-left="$router.back()"
/>
<!-- 充值框 -->
<van-cell icon="location-o"   title="充值春卷"
      />
 <van-grid :column-num="3" :border="false">
  <van-grid-item  icon="gift-o" text="100卷" @click="isPostShow = true" />
  <van-grid-item  icon="gift-o" text="200卷" @click="isPostShow = true"/>
  <van-grid-item  icon="gift-o" text="300卷" @click="isPostShow = true" />
  <van-grid-item  icon="gift-o" text="500卷" @click="isPostShow = true" />
  <van-grid-item  icon="gift-o" text="1000卷" @click="isPostShow = true" />
  <van-grid-item  icon="gift-o" text="1500卷" @click="isPostShow = true" />
</van-grid>
<!-- 充值中心 -->
<!-- <pay-money/> -->
<van-popup v-model="isPostShow" position="bottom" :style="{ height: '70%' }">
    <pay-money/>
    </van-popup>

  </div>
</template>

<script>
import PayMoney from '../components/pay-money'
export default {
  name: 'Account',
  components: {
    PayMoney

  },
  data () {
    return {
      isPostShow: false
    }
  }

}
</script>

<style lang="scss" scoped>
.account-container{
  .van-grid-item{
  color: #EB5253;
  border: 1px solid #F5F7F9;
}
::v-deep .my-account{
  background-color:#3296FA ;
}
::v-deep .van-icon-arrow-left{
  color: #fff;
}
::v-deep .van-nav-bar__title {
  color: #fff;

}

}

</style>
