<template>
  <div class="account-container">
    <van-nav-bar
      class="my-account"
      title="我的账户"
      left-arrow
      @click-left="$router.back()"
    />
    <!-- 显示余额 -->
    <van-cell icon="location-o" title="余额">{{
      userlist.accountBalance
    }}</van-cell>
    <!-- 充值框 -->
    <van-cell icon="location-o" title="充值春卷" />
    <van-grid :column-num="3" :border="false">
      <van-grid-item icon="gift-o" text="100元" @click="onPostShow('100')" />
      <van-grid-item icon="gift-o" text="200元" @click="onPostShow('200')" />
      <van-grid-item icon="gift-o" text="300元" @click="onPostShow('300')" />
      <van-grid-item icon="gift-o" text="500元" @click="onPostShow('500')" />
      <van-grid-item icon="gift-o" text="1000元" @click="onPostShow('1000')" />
      <van-grid-item icon="gift-o" text="1500元" @click="onPostShow('1500')" />
    </van-grid>
    <!-- 充值中心 -->
    <!-- <pay-money/> -->
    <van-popup
      v-model="isPostShow"
      position="bottom"
      :style="{ height: '70%' }"
      close-icon-position="top-left"
      closeable
    >
      <pay-money :price="price" @add-count="addCount" />
    </van-popup>
  </div>
</template>

<script>
import { getuserInfo } from '../../../api/users'
import PayMoney from '../components/pay-money'
export default {
  name: 'MyAccount',
  // props: {
  //   userId: {
  //     type: [Number, Object, String],
  //     required: true

  //   }

  // },
  components: {
    PayMoney

  },
  data () {
    return {
      isPostShow: false,
      price: 0,
      userlist: {}

    }
  },
  created () {
    // console.log(this.$router)
    this.loaduserInfo()
  },

  methods: {
    addCount (event) {
      this.isPostShow = false
      this.userlist.accountBalance = parseInt(this.userlist.accountBalance) + parseInt(event)
    },
    onPostShow (e) {
      this.isPostShow = true
      this.price = e
      // console.log(e)
    },
    // 根据用户的ID传余额accountbalance
    async loaduserInfo (id) {
      console.log(this.$route.query.userId)
      try {
        const { data } = await getuserInfo({ userId: this.$route.query.userId })

        console.log('loaduserInfo -> data', data)
        this.userlist = data.data
        console.log('loaduserInfo -> this.userlist', this.userlist)
      } catch (err) {
        // console.log('loaduserInfo -> err', err)

        this.$toast('获取数据失败')
      }
    }

  }

}
</script>

<style lang="scss" scoped>
.account-container {
  .van-grid-item {
    color: #eb5253;
    border: 1px solid #f5f7f9;
  }
  ::v-deep .my-account {
    background-color: rosybrown;
  }
  ::v-deep .van-icon-arrow-left {
    color: black;
  }
  ::v-deep .van-nav-bar__title {
    color: black;
  }
}
</style>
