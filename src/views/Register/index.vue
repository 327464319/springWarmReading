<template>
  <div>
    <van-icon slot="left" name="arrow-left" @click="$router.back()" />

    <van-form class="form" @submit="onSubmit">
      <van-field class="user-name" v-model="username.mobile" name="用户名" label="用户名" placeholder="请输入用户名" :rules="userFormRules.mobile" type="number" maxlength="11" />
      <van-field v-model="username.code" type="number" name="code" label="密码" placeholder="请填写密码" :rules="userFormRules.code" maxlength="6" />
      <div style="margin: 16px;">
        <van-button round block type="info" native-type="submit" to="gender">
          注册
        </van-button>
      </div>
    </van-form>
  </div>
</template>

<script>
export default {
  name: 'RegisterPage',
  data () {
    return {
      username: {
        mobile: '13034892275', // 手机号
        code: '123456' // 密码
      },
      userFormRules: {
        mobile: [{
          required: true,
          message: '手机号不能为空'
        }, {
          pattern: /^1[3|5|7|8]\d{9}$/,
          message: '手机号格式错误'
        }],
        code: [{
          required: true,
          message: '密码框不能为空'
        }, {
          pattern: /^\d{6}$/,
          message: '密码格式错误'
        }]
      }

    }
  },
  methods: {
    onSubmit (values) {
      console.log('submit', values)
    }

  }

}
</script>

<style lang="scss" scoped>
.user-name {
  margin-top: 8px;
}
</style>
