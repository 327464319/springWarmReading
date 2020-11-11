<template>
  <div class="gender">
    <!-- 选择性别 -->
    <div class="choice">选择性别</div>

    <!-- 男生女生模块 -->
    <div class="sex">
      <div class="icon" :class="isCon==='1'?'con':''" @click="isCon='1'">
        <van-image class="sheng" round width="100px" height="100px" fit="cover" @click="man" :src="require('../../assets/boy-3.png')" />
        <span class="text">男生</span>
        <span class="text-two">热血爽文,酷帅狂拽</span>
      </div>
      <div class="icon" :class="isCon==='2'?'con':''" @click="isCon='2'">
        <van-image round width="100px" height="100px" @click="woman" fit="cover" :src="require('../../assets/girl-26.png')" />
        <span class="text">女生</span>
        <span class="text-two">总裁王爷,绝不将就</span>
      </div>
    </div>

    <!-- 立即体验 -->
    <div class="btn">
      <van-button round plain hairline type="info" @click="nowExperience ">立即体验</van-button>
    </div>

  </div>
</template>

<script>
export default {
  name: 'Gender',
  data () {
    return {
      index: null,
      isCon: '0'

    }
  },
  methods: {
    nowExperience () {
      if (this.index === null) {
        return this.$toast('请选择你的性别')
      } else {
        this.$toast.loading({
          message: '加载中...',
          forbidClick: true,
          duration: 0
        })
      }
      window.localStorage.setItem('sex', this.index)
      this.$router.push('/bookrack')
      this.$toast.success('进入书城')
    },
    man (index) {
      this.index = 0
      this.isCon = !this.isCon
    },
    woman (index) {
      this.index = 1
    }

  }
}
</script>

<style lang="scss" scoped>
.gender {
  .choice {
    margin: 0 auto;
    text-align: center;
    margin-top: 30px;
    margin-bottom: -50px;
    font-size: 30px;
    color: rgb(184, 181, 127);
  }
  .sex {
    position: relative;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    margin-top: 240px;
    text-align: center;
    color: rgb(149, 149, 149);
    ::v-deep .icon {
      position: relative;
      display: flex;
      flex-direction: column;
      justify-content: center;
      width: 116px;
      height: 150px;

      .van-image {
        text-align: center;
        margin-left: 9px;
        .van-image__img {
          background: rgb(105, 189, 149);
        }
      }

      .text {
        font-size: 22px;
      }
      .text-two {
        font-size: 13px;
      }
    }
    .con {
      background: #eee;
      border-radius: 10px;
    }
  }
  ::v-deep .btn {
    text-align: center;
    width: 250px;
    height: 35px;
    margin-top: 150px;
    margin: 0 auto;

    .van-button {
      margin-top: 150px;
      color: #ccc;
      width: 250px;
      height: 35px;
      border: 1px solid #ccc;
      text-align: center;
      background: rgb(241, 240, 223);
      .van-button__text {
        color: rgb(59, 60, 60);
      }
    }
  }
}
</style>
