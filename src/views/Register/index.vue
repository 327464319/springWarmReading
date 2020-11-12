<template>
  <div>
    <van-icon
      class="icon"
      size="small"
      slot="left"
      name="arrow-left"
      @click="$router.back()"
    />

    <van-form>
      <van-field
        v-model="user.mobile"
        label="账号"
        placeholder="请输入手机号"
        type="number"
        maxlength="11"
        :rules="userRules.mobile"
      />

      <van-field
        type="password"
        v-model="user.password"
        label="密码"
        placeholder="请输入新置密码"
        maxlength="16"
        :rules="userRules.password"
      />

      <van-field
        type="password"
        v-model="user.code"
        label="确认密码"
        placeholder="请重新输入密码"
        maxlength="16"
        :rules="userRules.code"
      />
    </van-form>
    <van-button
      class="login"
      round
      block
      type="info"
      native-type="submit"
      @click="zhuce"
    >
      注册
    </van-button>
  </div>
</template>

<script>

import { getItem, setItem } from '../../utils/storage'
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
        return this.$toast('手机号不能为空')
      } else if (this.user.password !== this.user.code) {
        return this.$toast('两次密码不一致')
      }
      const regArr = getItem('register')
      if (regArr === null) {
        // 如果本地注册数据为空
        setItem('register', [this.user])
        setItem('user', {
          username: this.user.mobile,
          password: this.user.password
        })
        this.$store.commit('removeInclude', 'Home')
        this.$router.push('/my')
      } else {
        // 判断注册数组里是否有重复数据

        const bl = regArr.some(v => v.mobile === this.user.mobile)
        if (bl) {
          return this.$toast('用户名已经存在')
        } else {
          regArr.push(this.user)
          setItem('register', regArr)
          setItem('user', {
            username: this.user.mobile,
            password: this.user.password
          })
          this.$store.commit('removeInclude', 'Home')
          this.$router.push('/my')
        }
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
