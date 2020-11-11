<template>
  <div>
    <van-icon class="icon" size="small" slot="left" name="arrow-left" @click="$router.back()" />

    <van-form>
      <van-field v-model="user.mobile" label="账号" placeholder="请输入手机号" type="number" maxlength="11" :rules="userRules.mobile" />

      <van-field v-model="user.password" label="密码" placeholder="请输入新置密码" maxlength="16" :rules="userRules.password" />

      <van-field v-model="user.code" label="密码" placeholder="请重新输入密码" maxlength="16" :rules="userRules.code" />
    </van-form>
    <van-button class="login" round block type="info" native-type="submit" @click="zhuce">
      注册
    </van-button>
  </div>

</template>

<script>
export default {
  name: 'RegisterPage',
  data () {
    return {
      user: {
        mobile: '', // 用户账号
        password: '', // 密码
        code: '' // 验证密码
      },
      userRules: {
        mobile: [{
          required: true,
          message: '用户号不能为空'
        }, {
          pattern: /^1[3|5|7|8]\d{9}$/,
          message: '账号格式错误'
        }],
        password: [{
          required: true,
          message: '密码不能为空'
        }, {
          pattern: /^[a-zA-Z0-9]{6,16}$/,
          message: '验证码格式错误'
        }],
        code: [{
          required: true,
          message: '密码不能为空'
        }]
      }

    }
  },
  methods: {
    zhuce () {
      if (this.user.mobile.length !== 11) {
        this.$toast('手机号不能为空')
      } else if (this.user.password !== this.user.code) {
        this.$toast('两次密码不一致')
      } else {
        this.$router.push({
          name: 'login',
          params: {
            name: this.user.mobile,
            password: this.user.password
          }
        }
        )
      }
    }

  }

}
</script>

<style lang="scss" scoped>
.icon {
  margin-top: 10px;
  margin-left: 7px;
}
.login {
  width: 340px;
  margin-left: 10px;
}
</style>
