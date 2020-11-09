<template>
  <div class="special-container">
    <van-nav-bar left-arrow
                 @click-left="onClickLeft"
                 fixed
                 @click-right="onClickRight">
      <template slot="right">
        <van-icon name="share-o" />
      </template>
    </van-nav-bar>
    <div class="books_special">
      <div class="books_special_top">该书籍所在专题</div>
      <div class="books_special_bottom">
        <div class="books_special_banner">
          <div class="banner_box">
            <van-image fit="cover"
                       src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2468556485,634014640&fm=26&gp=0.jpg" />
          </div>
          <div class="books_special_introduce">
            <div>人民的名义</div>
            <div>揭秘中国官场“潜规则”</div>
          </div>
        </div>
        <div class="books_special_button">
          <button>查看全部10本书</button>
        </div>
      </div>
    </div>
    <div class="user_like">
      <div class="user_like_top">用户还喜欢</div>
      <div class="user_like_bottom">
        <div class="user_like_books">
          <div class="user_like_books_cover">
            <van-image fit="cover"
                       src="http://img.dashenxiaoshuo.com/image/0/343/343s.jpg" />
          </div>
          <div class="user_like_books_name">权利红人</div>
        </div>
        <div class="user_like_books">
          <div class="user_like_books_cover">
            <van-image fit="cover"
                       src="https://www.biqudd.com/files/article/image/13/13633/13633s.jpg" />
          </div>
          <div class="user_like_books_name">官谋</div>
        </div>
        <div class="user_like_books">
          <div class="user_like_books_cover">
            <van-image fit="cover"
                       src="http://www.booksky.cc/headimgs/30/30802/s30802.jpg" />
          </div>
          <div class="user_like_books_name">官笙</div>
        </div>
        <div class="user_like_books">
          <div class="user_like_books_cover">
            <van-image fit="cover"
                       src="https://dss1.baidu.com/-4o3dSag_xI4khGko9WTAnF6hhy/boxapp_novel/wh%3D315%2C423/sign=20ff2d9a526034a829b7b082fa266560/023b5bb5c9ea15ce8f094492b8003af33b87b242.jpg" />
          </div>
          <div class="user_like_books_name">因为遇到你</div>
        </div>
      </div>
    </div>
    <div class="tabBar">
      <van-row>
        <van-col span="8"
                 class="first">5阅豆/千字</van-col>
        <van-col span="8">加入书架</van-col>
        <van-col span="8">立即阅读</van-col>
      </van-row>
    </div>
  </div>

</template>

<script>
export default {
  name: 'Special-book',
  data () {
    return {

    }
  },
  methods: {
    onClickLeft () {

    },
    onClickRight () {

    }
  }
}
</script>

<style lang="scss" scoped>
.special-container {
  background-color: #fff !important;
  padding-top: 46px;
  height: 575px;
  ::v-deep .van-nav-bar {
    .van-icon {
      color: #b2b2b2;
      font-size: 22px;
    }
  }
  .books_special {
    background-color: #f5f5f5;
    .books_special_top {
      font-size: 15px;
      padding: 10px;
      color: #898279;
    }
  }
  .books_special_bottom {
    .books_special_banner {
      margin: 0 22px;
      .van-image {
        position: relative;
        width: 310px;
        height: 100px;
      }
    }
    .books_special_introduce {
      font-size: 15px;
      :nth-child(1) {
        margin: 2px 0 4px 0;
      }
      :nth-child(2) {
        font-size: 13px;
        color: #b2b2b2;
      }
    }
    .books_special_button {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-top: 20px;
      padding-bottom: 24px;
      button {
        width: 280px;
        height: 38px;
        font-size: 16px;
        color: #868482;
        letter-spacing: 1px;
      }
    }
  }
  .banner_box {
    ::after {
      content: "10086人围观";
      display: block;
      position: absolute;
      left: 4px;
      bottom: 3px;
      font-size: 13px;
      width: 80px;
      background-color: black;
      opacity: 0.8;
      height: 21px;
      line-height: 21px;
      color: #a5a3a2;
      padding-left: 2px;
    }
  }
  .user_like {
    display: flex;
    flex-direction: column;
    margin-top: 20px;
    .user_like_top {
      margin: 10px 7px;
      font-size: 15px;
      color: #958e86;
    }
    .user_like_bottom {
      display: flex;
      justify-content: space-around;
    }
    .user_like_books {
      width: 22%;
      .user_like_books_cover {
        height: 110px;
        .van-image {
          height: 100%;
        }
      }
      .user_like_books_name {
        font-size: 14px;
        color: #060b11;
        margin: 6px 0 0 2px;
      }
    }
  }
  .tabBar {
    position: relative;
    margin-top: 37px;
    border-top: 1px solid #cccccc;
    .van-row {
      font-size: 15px;
      color: #ed6460;
      text-align: center;
      height: 50px;
      line-height: 3;
      :nth-child(1) {
        &::after {
          content: "";
          display: block;
          position: absolute;
          left: 123px;
          top: 14px;
          width: 1px;
          height: 17px;
          background-color: #ccc;
        }
      }
      :nth-child(3) {
        background-color: #ed6460;
        color: #fff;
        height: 100%;
      }
    }
  }
}
</style>
