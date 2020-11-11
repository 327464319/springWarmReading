<template>
<!-- 已登录 -->
  <div class="my-contain">
    <div class="userInfo" v-if="user">
       <div class="box" >
      <van-image round
        class="avatar"
        lazy-load
        fit="cover"
        src="https://dss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2759434887,1188403402&fm=26&gp=0.jpg"/>
     <span class="text">{{user.username}}</span>
    </div>
    <van-cell icon="location-o" title="我的账户"
      is-link>
      <van-button round
      class="user-btn"
        size="mini" :to='{path:"/account",query:{userId:userlist.userId}}'>立即充值</van-button>
    </van-cell>
    <van-cell icon="like-o"   title="我的阅历"
      is-link />
    <van-cell icon="gem-o"  title="充值记录"
      is-link />
    <van-cell icon="balance-o"  title="购买记录"
      is-link />
    <van-cell icon="search"  title="浏览历史"
      is-link />
    <van-cell icon="points"  title="我的阅读基因"
      is-link />
       <van-cell icon="award-o"  title="设置"
      is-link />
    <van-cell class="goout" title="退出登录"
    @click="onLogout"
      />

    </div>

      <!-- 未登录 -->
    <div class="no-login" v-else>
      <!-- <van-image round
        fit="cover"
        class="avatar"
        lazy-load
        src="../../assets/mobile.png"/> -->
       <div class="login-photo"> <img class="mobile-img" src="../../assets/mobile.png"/></div>
      <button @click="$router.push('/login')" class="login">登录</button>
      </div>
      <!-- 宫格导航 -->
      <div v-if="!this.user">
         <van-grid :column-num="2" clickable>
          <van-grid-item class="gridItem"  >
            <i slot="icon" class="toutiao toutiao-shoucang"></i>
            <span slot="text" class="text">收藏</span>
          </van-grid-item>
           <van-grid-item class="gridItem"  >
             <i slot="icon" class="toutiao toutiao-lishi"></i>
             <span slot="text" class="text">历史</span>
           </van-grid-item>
      </van-grid>
        <van-cell title="消息通知" is-link  class="titleText"/>

      </div>

  </div>

</template>

<script>
// import { getuserInfo } from '../../mockJs/my-index'
import axios from 'axios'
import { mapState } from 'vuex'
import '../../style/myicon.scss'
export default {
  components: {

  },
  data () {
    return {
      isLoginShow: false,
      userlist: []

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
    onLogout () {
      // 退出提示
      // 在组件中需要使用this.$dialog来调用弹框组件
      this.$dialog.confirm({
        title: '确认退出吗？'
      }).then(() => {
        // on confirm
        // 确认退出：清除登录状态(容器中的user+本地存储中的user)
        this.$store.commit('setUser')
      }).catch(() => {
        console.log('取消执行这里')
      })
    },
    async LoaduserInfo () {
      try {
        const queryinfo = window.localStorage.getItem('user')
        const { data } = await axios.get('http://localhost:8080/getuserInfo', { params: queryinfo })
        // console.log('LoaduserInfo -> data', data)

        this.userlist = data.data

        window.localStorage.setItem('user', JSON.stringify(data.data))
        // window.localStorage.setItem('user', JSON.parse(data.data))

        // this.user = window.localStorage.getItem('user')
        // this.user = JSON.parse(this.user)

        // console.log('LoaduserInfo ->  this.user', this.user)
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
    height: 220px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: #3296FA;
    background-image: url("../../assets/timg (1).jpg");
    background-size: cover;
  }
  .no-login{
   height: 220px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: #3296FA;
    background-image: url("../../assets/timg (1).jpg");
    background-size: cover;
    .login{
      border: 0;
      // background-color: #3296FA;
      // color: #fff;
      font-size: 20px;
      border-radius: 8px;
    }
    .login-photo{
      ::v-deep .mobile-img {
        width: 100px;
        height: 100px;
        margin-bottom: 8px;
      }
}

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
.userInfo{
  overflow-y: auto;
  height: 92vh;
}
.goout{
  .van-cell__title{
    text-align: center;
    color:#D86262;
  }

}
.van-grid{
  display: flex;
  justify-content: center;
  align-items: center;

  .van-grid-item{
    .text{
      color: black;
      font-size: 14px;
    }

  }
  .gridItem{
    height:55px;
    .toutiao-shoucang{
      color: #D86262;
    }
.toutiao-lishi{
  color:#FF9D1D;
}

  }
 .van-cell{
  .van-icon-location-o{
      color: red !important;
    }

  }

}
</style>
