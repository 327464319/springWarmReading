<template>
  <div class="account-container">
    <van-nav-bar
    class="my-account"
   title="我的账户"
   left-arrow
   @click-left="$router.back()"
/>
<!-- 显示余额 -->
<van-cell icon="location-o"   title="余额"
  >{{userlist.accountBalance}}</van-cell>
<!-- 充值框 -->
<van-cell icon="location-o"   title="充值春卷"
  />
 <van-grid :column-num="3" :border="false">
  <van-grid-item  icon="gift-o" text="100元" @click="onPostShow('100')" />
  <van-grid-item  icon="gift-o" text="200元" @click="onPostShow('200') "/>
  <van-grid-item  icon="gift-o" text="300元" @click="onPostShow('300')" />
  <van-grid-item  icon="gift-o" text="500元" @click="onPostShow('500') " />
  <van-grid-item  icon="gift-o" text="1000元" @click="onPostShow('1000')" />
  <van-grid-item  icon="gift-o" text="1500元" @click="onPostShow('1500')" />
</van-grid>
<!-- 充值中心 -->
<!-- <pay-money/> -->
<van-popup v-model="isPostShow" position="bottom" :style="{ height: '70%' }"   close-icon-position="top-left"  closeable>
    <pay-money :price='price' />
    </van-popup>

  </div>
</template>

<script>
import PayMoney from '../components/pay-money'
export default {
  name: 'MyAccount',
  props: {
    userlist: {
      type: Object
    }
  },
  components: {
    PayMoney

  },
  data () {
    return {
      isPostShow: false,
      price: 0
    }
  },
  methods: {
    onPostShow (e) {
      this.isPostShow = true
      this.price = e
      // console.log(e)
    }

  },
  created () {
    console.log(this.userlist)
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
