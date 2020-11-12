<template>
  <div class="bulk-buy-container">
    <!-- 顶部导航栏 -->
    <van-nav-bar
      class="topNavBar"
      title="批量购买"
      :right-text=" rightCheckAll ? '取消':'全选' "
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickRight"
    >

    </van-nav-bar>

    <!-- 章节与小节购买目录 -->
    <van-collapse
      class="catalogList"
      v-model="activeNames"
      right-icon=""
    >
      <van-checkbox-group
        v-model="result"
        ref="checkboxGroup"
      >

        <van-collapse-item
          v-for="(value,index) in catalogList.chapter"
          :key="index"
          :name="value.title"
          @click="toggle(index)"
        >
          <!-- ------------ -->
          <van-icon
            slot="right-icon"
            name="arrow"
          >123</van-icon>

          <template #title>
            <div>{{value.title}}
              <van-icon class="iconfont icon-jiami" />
            </div>
          </template>

          <van-cell
            :title="item.title"
            clickable
            v-for=" (item,index) in value.setion"
            :key="index"
          >
            <!-- <template #right-icon> -->
            <van-checkbox
              slot="right-icon"
              :name="item.location_id"
              ref="checkboxes"
            />
            <!-- </template> -->
          </van-cell>

          <!-- ------ -->
          <template #right-icon>
            <van-checkbox
              :name="value.title"
              ref="chapterCheckboxes"
              @click="rightCheckBtn(value.setion)"
            />
          </template>

          <!-- <van-checkbox
          v-model="chapterChecked"
          slot="right-icon"
          :name="value.title"
        /> -->

        </van-collapse-item>

      </van-checkbox-group>
    </van-collapse>

    <!-- 章节与小节购买目录 -->

    <!-- 底部购买提示栏 -->
    <div class="buyConfirm">
      <div class="confirmTop">
        <span class="checked">已选 {{ result.length }}小节</span>
        <div class="balance">
          <span>价格 {{  result.length*10  }} 春卷</span>
          <span>余额 {{  balance-result.length*10  }} 春卷</span>
        </div>

      </div>
      <van-button
        v-show="confirmBtnShow"
        class="confirmBtn"
        type="info"
        round
        :disabled="balance-result.length*10<0"
        @click="buyChapter"
      >购买并下载</van-button>

      <!-- 余额不足购买界面 -->
      <div
        v-show="rechargeShow"
        class="recharge"
      >
        <div class="rechargeTitle">
          <div class="straightLine"></div>
          <span class="rechargeText">余额不足，充值并购买</span>
        </div>
        <div class="rechargeItems">
          <van-button
            plain
            type="primary"
            @click="rechargeBtn(100)"
          >
            1元
            <span slot="default">100春卷</span>

          </van-button>
          <van-button
            plain
            type="primary"
            @click="rechargeBtn(600)"
          >
            6元
            <span slot="default">600春卷</span>
          </van-button>
          <van-button
            plain
            type="primary"
            @click="rechargeBtn(1500)"
          >
            12元
            <span slot="default">1500春卷</span>
          </van-button>
          <van-button
            plain
            type="primary"
            @click="rechargeBtn(3500)"
          >
            30元
            <span slot="default">3500春卷</span>
          </van-button>
        </div>
      </div>

      <!-- 点击购买本章支付弹出框 -->
      <van-share-sheet
        v-model="bulkBuyShow"
        title="请完成支付"
        :options="bulkBuyOptions"
        @select="bulkBuySelect"
      />
      <!-- 点击购买本章支付弹出框 -->

      <!-- 余额不足购买界面 -->
    </div>

    <!-- 底部购买提示栏 -->

  </div>
</template>

<script>
import { Dialog } from 'vant'
import { mapState } from 'vuex'

export default {
  name: 'BulkBuy',
  props: {},
  data () {
    return {
      catalogList: {},
      bookId: 1,
      activeNames: ['2'],
      result: [],
      chapterChecked: false,
      rightCheckAll: false,
      confirmBtnShow: true,
      rechargeShow: false,
      checkedCountNum: 0,
      balance: 10,
      bulkBuyShow: false,
      currentBtnData: 0,
      bulkBuyOptions: [
        { name: '微信支付', icon: 'wechat' },
        { name: '二维码', icon: 'qrcode' }
      ]
    }
  },
  mounted () {
    this.loadCatalogToBuy()
  },

  watch: {
    result (val) {
      this.rechargeShow = (this.balance - this.result.length * 10) < 0
    },
    userBalance (val) {
      this.balance = val
    }
  },
  computed: {
    ...mapState(['userBalance'])
  },
  methods: {
    // ...mapMutations(['updatePayDoneBack'])
    // 购买并下载章节
    buyChapter () {
      this.$store.commit('updateNoPayChapters')
      this.result = []
      this.$store.commit('updateIsBuy')
      // this.$store.commit('updatePayDoneBack')
      // this.$router.push('/bookinterface')
      this.$router.back()
      this.$toast('购买章节成功！')
    },
    // 余额不足按钮选项
    rechargeBtn (num) {
      this.bulkBuyShow = true
      this.currentBtnData = num
    },
    bulkBuySelect () {
      Dialog.confirm({
        title: '支付提示',
        message: '请确认是否支付？'
      })
        .then(() => {
          // on confirm
          this.bulkBuyShow = false
          this.$toast(`${this.currentBtnData} 春卷 已回血！`)
          this.$store.commit('updateBalance', this.currentBtnData)
        })
        .catch(() => {
          // on cancel
        })
    },
    onClickLeft () {
      this.$router.back()
    },
    onClickRight () {
      this.rightCheckAll = !this.rightCheckAll
      if (this.rightCheckAll) {
        this.catalogList.chapter.forEach(v => {
          this.result.push(v.title)
          v.setion.forEach(v => {
            this.result.push(v.location_id)
          })
        })
      } else {
        this.catalogList.chapter.forEach(v => {
          this.result.splice(this.result.findIndex(item => item === v.title))
          v.setion.forEach(v => {
            this.result.splice(this.result.findIndex(item => item === v.location_id))
          })
        })
      }
    },
    async loadCatalogToBuy () {
      const { data: res } = await this.$axios({
        method: 'get',
        url: 'http://localhost:8080/catalog',
        data: {
          bookId: this.bookId
        }
      })
      this.catalogList = res
    },
    rightCheckBtn (data) {
      console.log(data)
      this.chapterChecked = !this.chapterChecked
      if (this.chapterChecked) {
        data.forEach(v => {
          this.result.push(v.location_id)
        })
      } else {
        data.forEach(v => {
          this.result.splice(this.result.findIndex(item => item === v.location_id))
        })
      }
    }
  }

}

</script>

<style lang="scss" scoped>
.bulk-buy-container {
  .topNavBar {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
  }
  .catalogList {
    margin-top: 46px;
    margin-bottom: 260px;
    .van-collapse-item {
      ::v-deep .van-checkbox__icon--checked .van-icon {
        background-color: red;
        border-color: red;
      }
    }
  }
  .buyConfirm {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    border-top: 1px solid #cccccc;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 30px;
    background-color: #fff;
    z-index: 3;
    .confirmTop {
      display: flex;
      flex-direction: column;
      align-items: center;
      .checked {
        font-size: 16px;
        margin-top: 20px;
      }
      .balance {
        font-size: 12px;
        margin-top: 15px;
        span:nth-child(1) {
          color: red;
          margin-right: 36px;
        }
      }
    }
    .confirmBtn {
      width: 324px;
      height: 41px;
      font-size: 14px;
      margin-top: 8px;
    }
    .recharge {
      width: 100%;

      margin-top: 20px;
      padding-top: 20px;
      .rechargeTitle {
        position: relative;
        .straightLine {
          width: 100%;
          height: 1px;
          margin: 0 auto;
          background-color: #cccccc;
        }
        .rechargeText {
          position: absolute;
          top: -6px;
          left: 50%;
          transform: translateX(-50%);
          background-color: #fff;
          padding: 0 10px;
          font-size: 12px;
          color: #333333;
        }
      }
      .rechargeItems {
        width: 86%;
        margin: 20px auto;
        display: flex;
        justify-content: space-around;
        .van-button {
          width: 70px;
          height: 60px;
          border: 1px solid #9f9f9f;
          border-radius: 5px;
          color: #333333;
          .van-button__text {
            color: #333333;
            font-size: 14px;
            margin-top: 10px;
            span {
              display: block;
              width: 66px;
              color: #999999;
              font-size: 12px;
              margin-top: 5px;
            }
          }
        }
      }
    }
  }
}
</style>
