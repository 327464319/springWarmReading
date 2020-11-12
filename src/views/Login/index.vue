<template>
  <div class="login">
    <div class="big-img">
      <van-image
        round
        width="100px"
        height="100px"
        :src="require('../../assets/shu.jpg')"
      />
    </div>
    <div class="text">
      <span class="text-top">春暖阅读</span>
      <span class="text-bottom">面朝大海 春暖花开</span>
    </div>

    <!-- 登录页面 -->
    <van-cell-group>
      <van-field
        v-model="zhang"
        label="账号"
        placeholder="请输入账号"
        maxlength="11"
      />
    </van-cell-group>
    <van-cell-group>
      <van-field
        v-model="mi"
        label="密码"
        placeholder="请输入密码"
        type="password"
      />
    </van-cell-group>

    <!-- 登录按钮 -->
    <van-button class="deng" round type="primary" size="small" @click="zhanghao"
      >登 录</van-button
    >

    <!-- 一键登录 -->
    <van-divider :style="{ padding: '0 16px' }"> 一键登录 </van-divider>

    <!-- 第三方登录模块 -->
    <div class="login-block">
      <span class="small-img">
        <van-image
          round
          width="60"
          height="60px"
          fit="cover"
          :src="require('../../assets/weixin.jpg')"
        />
        <van-button class="icon-text" to="bookrack">微信登录</van-button>
      </span>

      <span class="small-img">
        <van-image
          round
          width="60px"
          height="60px"
          fit="cover"
          :src="require('../../assets/qq.png')"
        />
        <van-button class="icon-text" to="bookrack">QQ登录</van-button>
      </span>

      <span class="small-img">
        <van-image
          round
          width="60px"
          height="60px"
          fit="cover"
          :src="require('../../assets/weibo.png')"
        />
        <van-button class="icon-text" to="bookrack">微博登录</van-button>
      </span>
    </div>
    <!-- 注册跳转按钮 -->
    <van-button class="register" round type="primary" to="register"
      >去注册>></van-button
    >
  </div>
</template>

<script>

import { getItem, setItem } from '../../utils/storage'
export default {

  name: 'Login',
  components: {},
  data () {
    return {
      loading: false,
      // register: getItem('register'),
      zhang: '',
      mi: ''
    }
  },
  computed: {},
  watch: {},
  created () {
    // console.log(this.$route.params)
  },
  activated () {
    this.register = getItem('register')
  },
  mounted () {},
  methods: {
    // wei () {
    //   this.loading = false
    //   this.$toast.success('微信登录成功')
    // },
    // qq () {
    //   this.loading = false
    //   this.$toast.success('qq登录成功')
    // },
    // weibo () {
    //   this.loading = false
    //   this.$toast.success('微博登录成功')
    // },
    zhanghao () {
      const regArr = getItem('register')
      const bl = regArr.some(v => {
        return v.mobile === this.zhang.toString() && v.password === this.mi.toString()
      })
      if (bl) {
        this.$router.push('/my')
        setItem('user', { username: this.zhang.toString(), password: this.mi.toString() })
        this.$store.commit('removeInclude', 'Home')
      } else {
        this.$toast('密码或账号错误')
      }
    }

  }

}
</script>

<style lang="scss" scoped>
.login {
  .big-img {
    margin-top: 30px;
    text-align: center;
  }
  .text {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    .text-top {
      font-size: 35px;
      color: rgb(90, 93, 90);
    }
    .text-bottom {
      margin-top: 3px;
      margin-bottom: 35px;
      font-size: 16px;
      color: rgb(153, 153, 153);
    }
  }
  .deng {
    width: 78px;
    height: 35px;
    margin-left: 145px;
    margin-top: 7px;
    font-size: 15px;
  }
  .van-divider {
    color: rgb(102, 102, 102);
    font-size: 18px;
  }
  .van-divider::before {
    background-color: rgb(70, 53, 53);
  }
  .van-divider::after {
    background-color: rgb(70, 53, 53);
  }
  .login-block {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;

    .small-img {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      .icon-text {
        font-size: 15px;
        color: rgb(61, 57, 59);
        border: 0;
      }
    }
  }
  .register {
    width: 93px;
    height: 30px;
    margin-top: 12px;
    margin-left: 250px;
    font-size: 15px;
    background-color: rgb(246, 248, 248);
    border: 0px;
    color: rgb(7, 193, 96);
  }
}
</style>
