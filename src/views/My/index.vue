<template>
<!-- 已登录 -->
  <div class="my-contain">
    <div class="userInfo" v-if="user">
       <div class="box" >
      <van-image round
        class="avatar"
        lazy-load
        fit="cover"
        src="https://img.yzcdn.cn/vant/cat.jpeg"/>
     <span class="text">{{user.username}}</span>
    </div>
    <van-cell icon="location-o" title="我的账户"
      is-link>
      <van-button round
      class="user-btn"
        size="mini" to='/account'>立即充值</van-button>
    </van-cell>
    <van-cell icon="location-o"   title="我的阅历"
      is-link />
    <van-cell icon="location-o"  title="充值记录"
      is-link />
    <van-cell icon="location-o"  title="购买记录"
      is-link />
    <van-cell icon="location-o"  title="单元格"
      is-link />
    <van-cell icon="location-o"  title="浏览历史"
      is-link />
    <van-cell icon="location-o"  title="我的阅读基因"
      is-link />
    <van-cell icon="location-o"  title="设置"
      is-link />

    </div>

      <!-- 未登录 -->
    <div class="no-login" v-else>
      <van-image round
        class="avatar"
        lazy-load
        src="https://img.yzcdn.cn/vant/cat.jpeg"/>
      <button @click="$router.push('/login')">去登录</button>
      </div>

  </div>

</template>

<script>
// import { getuserInfo } from '../../mockJs/my-index'
import axios from 'axios'
import { mapState } from 'vuex'

export default {
  components: {

  },
  data () {
    return {
      isLoginShow: false
      // user: ''

    }
  },
  computed: {
    ...mapState(['user'])

  },
  created () {
    this.LoaduserInfo(this.user)
  },
  methods: {
    async LoaduserInfo () {
      try {
        const { data } = await axios.get('http://localhost:8080/getuserInfo')
        console.log('LoaduserInfo -> data', data)

        window.localStorage.setItem('user', JSON.stringify(data.data))
        // window.localStorage.setItem('user', JSON.parse(data.data))

        // this.user = window.localStorage.getItem('user')
        // this.user = JSON.parse(this.user)

        console.log('LoaduserInfo ->  this.user', this.user)
      } catch (err) {
        this.$router('获取用户数据失败')
      }
    }

  }
}
</script>

<style lang="scss" scoped>
.my-contain {
  .avatar{
    width:100px;
    height:100px;
    margin-bottom: 10px;
  }
  .box {
    height: 300px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: #3296FA;
    background-image: url("../../assets/banner.png");
    background-size: cover;
  }
  .no-login{
   height: 300px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: #3296FA;
    background-image: url("../../assets/banner.png");
    background-size: cover;

  }
 ::v-deep .text{
    width: 145px;
    height: 28px;
    font-size: 20px;
    font-family: MicrosoftYaHei;
    font-weight: 400;
    color: #fff;
   text-align: center;
  }

}
</style>
