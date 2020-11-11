<template>
  <div class="sliderCatalog-container">
    <van-tabs
      class="catalogMain"
      v-model="activeName"
      animated
      type="card"
    >

      <van-tab
        class="catalogPanel"
        title="目录"
        name="catalog"
      >
        {{catalogData.book_name}}
        <van-cell title="封面" />
        <van-cell title="版权信息" />
        <van-cell title="致读者们" />

        <!-- 章节与小节目录 -->
        <van-collapse
          class="catalogList"
          v-model="activeNames"
          right-icon=""
        >
          <van-collapse-item
            :name="value.title"
            v-for="(value,index) in catalogData.chapter"
            :key="index"
          >
            <template #title>
              <div>{{value.title}}
                <van-icon :class="value.chapter_id!==1?'iconfont icon-IOTtubiao_huabanfuben':''" />
              </div>
            </template>
            <van-cell
              :style="{color:  item.locationId===setionCheckedId? 'red':'black' }"
              :title="item.title"
              v-for=" (item,index) in value.setion"
              :key="index"
              @click="setionChecked(catalogData.book_id,value.chapter_id,item.setion_id,item.locationId)"
            />
          </van-collapse-item>

        </van-collapse>
        <!-- 章节与小节目录 -->

      </van-tab>

      <van-tab
        class="bookMarksPanel"
        title="书签"
        name="bookMarks"
      >
        <!-- 书签 -->
        <van-collapse
          class="bookMaskList"
          v-model="activeNames"
          right-icon=""
        >
          <van-collapse-item
            :name="value.title"
            v-for="(value,index) in bookMaskData.chapter"
            :key="index"
          >
            <template #title>
              <div>{{`第  ${value.chapterId}  章`}}
                <van-icon class="" />
              </div>
            </template>
            <van-cell
              class="bookMaskItem"
              :style="{color:  item.setion_id===setionCheckedId? 'red':'black' }"
              :title="item.setionId+ '小节' "
              v-for=" (item,index) in value.setion"
              :key="index"
              @click="setionChecked(catalogData.book_id,value.chapterId,item.setionId)"
            >
              <van-icon
                name="label"
                slot="icon"
              ></van-icon>
              <p
                slot="label"
                class="bookMaskTips"
              >昨夜，外面下了雪。玻璃小屋里却依然温暖、湿润而舒适。
                今天早上，厚厚的内窗上挂满了凝结的水珠......</p>
            </van-cell>
          </van-collapse-item>

        </van-collapse>

        <!-- 书签 -->
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>

export default {
  name: 'SliderCatalog',
  props: {},
  data () {
    return {
      activeName: 'bookMarkss',
      activeNames: ['2'],
      setionCheckedId: '',
      catalogData: {},
      bookMaskData: {},
      bookId: 1
    }
  },
  created () {},
  mounted () {
    this.loadCatalog()
    this.loadBookMask()
    this.monitoring()
  },
  watch: {},
  methods: {
    // testChild () {
    //   console.log('testChild')
    // },
    monitoring () {
      this.$on('testChild', (res) => {
        console.log(res)
      })
    },
    // 调用接口获取目录数据
    async loadCatalog () {
      const { data: res } = await this.$axios({
        method: 'get',
        url: 'http://localhost:8080/catalog',
        data: {
          bookId: this.bookId
        }
      })
      console.log(res)
      this.catalogData = res
    },
    // 调用接口获取书签数据
    async loadBookMask () {
      const { data: res } = await this.$axios({
        method: 'get',
        url: 'http://localhost:8080/bookmask/' + this.bookId
      })
      console.log(res)
      this.bookMaskData = res.data[0]
      console.log('created -> this.bookMaskData', this.bookMaskData)
    },
    setionChecked (bookId, chapterId, setionId, locationId) {
      this.setionCheckedId = locationId
      this.$emit('check-chapter', { bookId, chapterId, setionId, locationId })
    }
  }
}
</script>

<style lang="scss" scoped>
.sliderCatalog-container {
  .catalogMain {
    // position: relative;
    ::v-deep .van-tabs__content--animated {
      overflow-y: auto;
      height: 100vh;
    }
    .catalogPanel {
      ::v-deep .van-tab__pane {
        // margin-left: 20px;
        padding: 20px 10px 0 20px;
        font-size: 22px;
        .van-cell {
          padding-left: unset;
        }
      }
      .catalogList {
        .van-collapse-item {
          .iconfont {
            position: absolute;
            top: 15px;
            right: 15px;
            font-size: 16px;
            color: orangered;
          }
        }
        ::v-deep .van-icon-arrow {
          visibility: hidden;
        }
      }
    }
    ::v-deep .van-tabs__wrap {
      .van-tabs__nav--card {
        position: fixed;
        bottom: 5px;
        left: 0;
        right: 0;
        z-index: 10;
      }
    }
    .bookMarksPanel {
      .bookMaskList {
        .bookMaskItem {
          position: relative;
          height: 90px;
          padding: unset;
          .van-icon {
            position: absolute;
            top: 0;
            left: 0;
          }
          .bookMaskTips {
            margin-top: 15px;
            color: #777777;
          }
          .van-cell__title {
            span {
              position: absolute;
              top: 1px;
              left: 35px;
              color: orangered;
              line-height: 12px;
            }
          }
        }
      }
    }
  }
}
</style>
