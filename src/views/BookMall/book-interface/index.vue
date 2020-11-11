<template>
  <div
    class="book-container"
    :style="{backgroundColor:nightModeFlag? '#000':'#c4b399'}"
  >
    <!-- 顶部导航栏 -->
    <van-nav-bar
      v-show="setShow"
      title=""
      right-text="按钮"
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickRight"
      v-model="current"
    >
      <!-- 添加书签 -->
      <van-icon
        slot="right"
        name="label-o"
        size="30px"
        @click="addBookMask"
      />
      <!-- 右上角更多 -->
      <van-icon
        slot="right"
        name="ellipsis"
        size="30px"
        @click="moreListShow=!moreListShow"
      />
    </van-nav-bar>
    <!-- 更多功能列表弹出框 -->
    <div
      class="moreList"
      v-show="moreListShow"
    >
      <van-cell
        title="搜索"
        :is-link="false"
        to="index"
      >
        <van-icon
          class="iconfont icon-wulumuqishigongandashujuguanlipingtai-ico-"
          slot="icon"
        ></van-icon>
      </van-cell>
      <van-cell
        title="书籍详情"
        :is-link="false"
        to="index"
      >
        <van-icon
          class="iconfont icon-shuji"
          slot="icon"
        ></van-icon>
      </van-cell>
    </div>

    <!-- 右上角更多 -->

    <!-- 正文主体部分 -->
    <van-swipe
      class="my-swipe"
      :initial-swipe="swipeContrlId"
      indicator-color="white"
      :loop="false"
      :show-indicators="false"
      ref="bookRef"
      @change="onSwipeChange"
      :touchable="true"
    >
      <van-swipe-item
        class="contentText"
        v-for=" (v,i) in list"
        :key="i"
        v-html="v.textContent"
        :style="{color: nightModeFlag? '#717171':'#000'}"
      >

      </van-swipe-item>
      <!-- 右下角显示页码 -->
      <!-- <template #indicator>
        <div class="custom-indicator">
          {{ current + 1 }}/{{list.length}}
        </div>
      </template> -->

    </van-swipe>

    <!-- 中部设置按钮 -->
    <van-button
      class="center-btn"
      type="warn"
      @click="setShow=!setShow"
    >
      setShow
    </van-button>

    <!-- 购买章节弹出框 -->
    <van-popup
      class="pay-popup"
      v-model="payShow"
      @click-overlay="noPayAction"
      position="bottom"
      :style="{ height: '65%' }"
    >
      <div class="pay-popup-content">
        <span class="tip">需要购买后阅读！</span>
        <div class="balance">
          <span>本节价格 10 春卷</span>
          <span>余额 1000春卷</span>
        </div>
        <van-button
          class="onlyBuyBtn"
          type="danger"
          round
          @click="buyOnlyChapterShow=true"
        >购买本章</van-button>
        <span
          class="bulkBuy"
          @click="$router.push('/bulkbuy')"
        >批量购买章节</span>
        <van-checkbox
          class="autoBuy"
          v-model="autoBuyChecked"
          icon-size="15px"
        >自动购买下一章</van-checkbox>
      </div>
    </van-popup>

    <!-- 点击购买本章支付弹出框 -->
    <van-share-sheet
      v-model="buyOnlyChapterShow"
      title="请完成支付"
      :options="buyOnlyChapterOptions"
      @select="byuOnlySelect"
    />
    <!-- 点击购买本章支付弹出框 -->

    <!-- 购买章节弹出框 -->

    <!-- 左侧弹出目录 -->
    <van-popup
      class="catalogLeft-popup"
      v-model="catalogLeftShow"
      position="left"
      :style="{ height: '100%',width:'70%' }"
    >
      <slider-catalog
        ref="childMethod"
        @check-chapter="checkChapter($event)"
      />
    </van-popup>

    <!-- 进度弹出框 -->
    <div
      class="progressBox"
      v-show="progressShow"
    >
      <span class="progressNum">已读</span>
      <div class="progressCenter">
        <van-icon
          name="arrow-left"
          @click="prevPage"
        ></van-icon>
        <van-slider
          class="progressItem "
          v-model="swipeContrlId"
          :min="0"
          :max="list.length-1"
        />
        <van-icon
          name="arrow"
          @click="nextPage"
        />
      </div>
      <span>{{progressTitle}}</span>
    </div>

    <!-- 字体设置弹出框 -->
    <div
      class="fontSetBox"
      v-show="fontSetShow"
    >
      <div class="top">
        <span class="text">亮度</span>
        <i
          class="iconfont icon-liangdu-"
          @click="$toast('亮度-')"
        />
        <van-slider
          class="progressItem "
          v-model="currentBrightness"
          :min="-50"
          :max="50"
        />
        <i
          class="iconfont icon-liangdu1"
          @click="$toast('亮度+')"
        />
      </div>
      <div class="bottom">
        <span class="text">字号</span>
        <van-button
          plain
          size="small"
          @click="fontSizeSubtract"
        >A-</van-button>
        <van-button
          plain
          size="small"
          @click="fontSizeFixed"
        >16</van-button>
        <van-button
          plain
          size="small"
          @click="fontSizePlus"
        >A+</van-button>

      </div>
    </div>

    <!-- 左翻页按钮 -->
    <van-button
      v-show="btnShow"
      class="left-btn"
      type="primary"
      @click="prevPage"
    >
      prevPage
    </van-button>
    <!-- 右翻页按钮 -->
    <van-button
      v-show="btnShow"
      class="right-btn"
      type="primary"
      @click="nextPage"
    >
      nextPage
    </van-button>

    <!-- 底部导航栏 -->
    <van-tabbar
      v-show="setShow"
      class="bottom-bar"
      v-model="active"
    >
      <van-tabbar-item
        class="iconfont icon-mulu"
        @click="catalogLeftShow=true"
      >目录</van-tabbar-item>
      <van-tabbar-item
        class="iconfont icon-jindu"
        @click="progressShow=!progressShow"
      >进度</van-tabbar-item>
      <van-tabbar-item
        class="iconfont icon-ziti"
        @click="fontSetShow=!fontSetShow"
      >设置</van-tabbar-item>
      <van-tabbar-item
        class="iconfont icon-yejian"
        @click="nightModeFlag=!nightModeFlag"
      >夜间</van-tabbar-item>

    </van-tabbar>
  </div>
</template>

<script>
import bookMasksData from '@/assets/bookMasksData'
import SliderCatalog from '@/views/BookMall/book-interface/components/slider-catalog'
import { Dialog } from 'vant'

export default {
  name: 'ArticleIndex',
  components: {
    SliderCatalog
  },
  data () {
    return {
      moreListShow: false,
      autoBuyChecked: false,
      payShow: false,
      btnShow: true,
      list: [],
      setShow: false,
      current: 0,
      active: 0,
      catalogLeftShow: false,
      progressShow: false,
      progressPct: 0,
      fontSetShow: false,
      currentBrightness: 0,
      Num: 20,
      nightModeFlag: false,
      bookId: 1,
      chapterId: 1,
      setionId: 0,
      swipeContrlId: 0,
      currentChapterId: 0,
      bookMasks: [],
      progressTitle: '',
      noPayChapters: [2, 3],
      buyOnlyChapterShow: false,
      buyOnlyChapterOptions: [
        { name: '微信支付', icon: 'wechat' },
        { name: '春卷余额支付', icon: 'https://img.yzcdn.cn/vant/custom-icon-water.png' },
        { name: '二维码', icon: 'qrcode' }
      ]

    }
  },
  watch: {
    setShow (val) {
      this.btnShow = !val
      this.progressShow = this.fontSetShow = false
      this.moreListShow = false
    },
    catalogLeftShow (val) {
      this.progressShow = this.fontSetShow = false
      if (val && this.$refs.childMethod) {
        this.$refs.childMethod.loadBookMask()
      }
    },
    nightModeFlag (val) {
      val ? this.$toast('NightMode-ON') : this.$toast('NightMode-OFF')
    },
    swipeContrlId (val) {
      const item = this.list.filter(v => {
        return v.setion_id === val
      })
      this.progressTitle = item[0].title
      this.setionId = val
    }
  },
  computed: {},
  created () {},
  mounted () {
    this.loadBookDdata()
  },
  methods: {
    // 购买本章确定按钮
    byuOnlySelect () {
      Dialog.confirm({
        title: '支付提示',
        message: '请确认是否支付购买本章节？'
      })
        .then(() => {
          // on confirm
          this.buyOnlyChapterShow = false
          this.payShow = false
          this.noPayChapters.splice(this.noPayChapters.indexOf(this.chapterId), 1)
          this.$toast(`第 ${this.chapterId} 章 已解锁`)
        })
        .catch(() => {
          // on cancel
        })
    },
    // 取消购买章节返回上一间节
    noPayAction () {
      this.chapterId--
      this.loadBookDdata()
    },
    async addBookMask () {
      const { data: res } = await this.$axios({
        method: 'post',
        url: 'http://localhost:8080/bookmask/add',
        data: {
          bookId: this.bookId,
          chapterId: this.chapterId,
          setionId: this.setionId
        }
      })
      this.$toast.success('添加书签成功\n' + '第' + this.chapterId + '章-' + this.progressTitle)
      console.log(res)
      console.log(bookMasksData)
    },
    onSwipeChange (index) {
      this.swipeContrlId = index
    },
    prevPage () {
      this.$refs.bookRef.prev()
    },
    nextPage () {
      if (this.chapterId < 3) {
        if (this.list.length - 1 === this.swipeContrlId) {
          this.chapterId++
          this.swipeContrlId = 0
          this.loadBookDdata()
          return
        }
      }
      this.$refs.bookRef.next()
    },
    checkChapter (data) {
      console.log(data)
      this.catalogLeftShow = false
      this.bookId = data.bookId
      this.chapterId = data.chapterId
      this.swipeContrlId = data.setionId
      this.loadBookDdata()

      console.log(this.list)
      // 设置跳转到选中文章目录中的小节
      this.setionId = data.setionId
    },
    async loadBookDdata () {
      const { data: res } = await this.$axios({
        method: 'get',
        url: 'http://localhost:8080/catalog',
        data: {
          bookId: this.bookId,
          chapterId: this.chapterId,
          setionId: this.setionId
        }
      })
      console.log(res)
      // 每次重新获取新章节后调用校验章节id是否付费的方法
      this.inspectBuiedChapterId(res[0].chapter_id)

      this.chapterId = res[0].chapter_id
      this.list = res[0].setions
      console.log('created -> this.list', this.list)
    },
    // 检查章节是否已付费方法
    inspectBuiedChapterId (chapterId) {
      // if (chapterId > 1) this.payShow = true
      this.payShow = this.noPayChapters.indexOf(chapterId) !== -1
    },
    onClickLeft () {},
    onClickRight () {},
    fontSizeSubtract () {
      // console.log(document.querySelector('.van-swipe-item').style.fontSize)
      // const fontSize = document.querySelector('.van-swipe-item')
      // if (this.Num > 40 || !this.Num) return this.$toast('字体调节已达下限')
      // fontSize.style.fontSize = fontSize.clientWidth / this.Num + 'px'
      // this.Num += 5
      // this.$toast(fontSize.style.fontSize)

      const items = document.querySelectorAll('.van-swipe-item')
      this.Num += 5
      if (this.Num > 40 || !this.Num) return this.$toast('字体调节已达下限')
      items.forEach(v => {
        v.style.fontSize = v.clientWidth / this.Num + 'px'
      })
      // this.$toast(fontSize.style.fontSize)
    },
    fontSizePlus () {
      const items = document.querySelectorAll('.van-swipe-item')
      this.Num -= 5
      if (this.Num > 40 || !this.Num) return this.$toast('字体调节已达上限')
      items.forEach(v => {
        v.style.fontSize = v.clientWidth / this.Num + 'px'
      })
      // const fontSize = document.querySelector('.van-swipe-item')
      // if (this.Num > 40 || !this.Num) return this.$toast('字体调节已达上限')
      // fontSize.style.fontSize = fontSize.clientWidth / this.Num + 'px'
      // this.Num -= 5
      // this.$toast(fontSize.style.fontSize)
    },
    fontSizeFixed () {
      const items = document.querySelectorAll('.van-swipe-item')
      items.forEach(v => {
        v.style.fontSize = '16px'
      })
      this.$toast('fontSize:16px')
      this.Num = 20
      // const fontSize = document.querySelector('.van-swipe-item')
      // fontSize.style.fontSize = '16px'
      // this.$toast(fontSize.style.fontSize)
      // this.Num = 20
    }

  }
}
</script>

<style lang="scss" scoped>
.book-container {
  // background-color: black;
  // color: white;
  .van-nav-bar {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    .van-icon {
      margin-right: 15px;
    }
    ::v-deep .van-icon-arrow-left {
      font-size: 22px;
    }
    ::v-deep .van-nav-bar__right {
      font-size: 40px;
    }
  }
  .moreList {
    position: fixed;
    top: 50px;
    right: 20px;
    z-index: 5;
    width: 110px;
    border-radius: 10px;
    border: 1px solid #dedede;
    overflow: hidden;
    .van-cell {
      display: flex;
      align-items: center;
      .iconfont {
        font-size: 16px;
        margin-right: 8px;
      }
    }
    &::after {
      position: fixed;
      content: "";
      top: 45px;
      right: 32px;
      width: 10px;
      height: 10px;
      border: 1px solid #dedede;
      border-left: unset;
      border-bottom: unset;
      transform: rotate(-45deg);
      background-color: #fff;
    }
  }
  .my-swipe .van-swipe-item {
    position: relative;
    margin-top: 50px;
    color: #000;
    // height: 550px;
    font-size: 16px;
    line-height: 30px;
    text-align: center;
    box-sizing: border-box;
    padding: 0 20px 0;
    ::v-deep h2 {
      text-align: left;
    }
    ::v-deep p {
      text-align: left;
      text-indent: 30px;
    }
    // background-color: #39a9ed;
  }
  ::v-deep .custom-indicator {
    position: fixed;
    right: 5px;
    bottom: 30px;
    padding: 2px 5px;
    font-size: 12px;
    background: rgba(0, 0, 0, 0.1);
  }
  .center-btn {
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 30%;
    height: 30%;
    opacity: 0;
  }
  .pay-popup-content {
    display: flex;
    // justify-content: center;
    flex-direction: column;
    align-items: center;
    .tip {
      color: #333;
      font-size: 16px;
      margin-top: 26px;
    }
    .balance {
      margin-top: 55px;
      font-size: 12px;
      span:nth-child(1) {
        color: red;
        margin-right: 16px;
      }
    }
    .onlyBuyBtn {
      width: 241px;
      height: 41px;
      margin-top: 10px;
    }
    .bulkBuy {
      font-size: 12px;
      margin-top: 20px;
    }
    .autoBuy {
      font-size: 12px;
      margin-top: 30px;
      // ::v-deep .van-icon-success {
      //   width: 12px;
      //   height: 12px;
      // }
    }
  }
  .left-btn {
    position: fixed;
    left: 0;
    top: 8%;
    width: 35%;
    height: 85%;
    opacity: 0;
  }
  .right-btn {
    position: fixed;
    right: 0;
    top: 8%;
    width: 35%;
    height: 85%;
    opacity: 0;
  }
  // 进度条弹出框
  .progressBox {
    position: fixed;
    bottom: 48px;
    // left: 0;
    // right: 0;
    background-color: #ffffff;
    width: 100%;
    height: 100px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-top: 1px solid #cccccc;
    border-bottom: 1px solid #cccccc;
    .progressNum {
      font-size: 16px;
    }
    .progressCenter {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      .progressItem {
        width: 75%;
        margin: 0 10px;
      }
    }
    span:nth-child(3) {
      font-size: 14px;
      margin-top: 15px;
    }
  }
  // 字体设置弹出框
  .fontSetBox {
    position: fixed;
    bottom: 48px;
    // left: 0;
    // right: 0;
    background-color: #ffffff;
    width: 100%;
    height: 121px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-top: 1px solid #cccccc;
    border-bottom: 1px solid #cccccc;
    z-index: 10;
    .top {
      display: flex;
      justify-content: center;
      align-items: center;
      .text {
        font-size: 14px;
        margin-right: 5px;
      }
      .progressItem {
        width: 255px;
        margin: 0 10px;
      }
    }
    .bottom {
      margin-top: 10px;
      .text {
        font-size: 14px;
        margin-right: 10px;
      }
      .van-button:nth-child(2) {
        width: 100px;
        border-radius: 18px 0 0 18px;
      }
      .van-button:nth-child(3) {
        width: 100px;
        border-left: none;
        border-right: none;
      }
      .van-button:nth-child(4) {
        width: 100px;
        border-radius: 0 18px 18px 0;
      }
    }
  }
  .bottom-bar {
    border-top: 1px solid #ccc;
    .iconfont {
      font-size: 14px;
    }
  }
}
</style>
