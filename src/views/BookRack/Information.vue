<template>
  <div class="information-container">
    <van-nav-bar title="书籍详情"
                 left-arrow
                 @click-left="onClickLeft" />
    <div class="box">
      <div class="introduce">
        <div class="introduce_top">
          <div class="introduc_book_cover">
            <van-image fit="cover"
                       src="https://wfqqreader-1252317822.image.myqcloud.com/cover/735/357735/b_357735.jpg" />
          </div>
          <div class="introduc_book_type">
            <div class="introduc_book_type_top">择天记</div>
            <div class="introduc_book_type_bottom">
              <span>猫腻</span>
              <span>|</span>
              <span>玄幻</span>
            </div>
          </div>
        </div>
        <div class="introduce_bottom">
          <div>命里有时终须有，命里无时要强求。</div>
          <div>这是一个长生果的故事。择是选择。这是一个关于选择的</div>
          <div>故事。三千世界，满天神魔，手握道卷，掌天下...</div>
          <div>
            <van-icon name="arrow-down" />
          </div>
        </div>
      </div>
      <catalog></catalog>
      <div class="popular_books">
        <div class="popular_books_top">
          <div class="popular_books_top_left">同类热门书籍</div>
          <div class="popular_books_top_right">
            <span>
              <van-icon name="replay" />
            </span>
            <span>换一换</span>
          </div>
        </div>
        <div class="popular_books_bottom">
          <div class="popular_books_cover">
            <van-image fit='cover'
                       src="https://wfqqreader-1252317822.image.myqcloud.com/cover/75/33812075/b_33812075.jpg" />
            <div class="popular_books_name">九天帝尊</div>
          </div>
          <div class="popular_books_cover">
            <van-image fit='cover'
                       src="https://www.zhetian.org/public/cover/bd/64/6e/bd646ed67ecab483539b2185fb56a64b.jpg" />
            <div class="popular_books_name">太古战天诀</div>
          </div>
          <div class="popular_books_cover">
            <van-image fit='cover'
                       src="https://wfqqreader-1252317822.image.myqcloud.com/cover/783/818783/b_818783.jpg" />
            <div class="popular_books_name">八荒剑神</div>
          </div>
        </div>
      </div>
      <div class="popular_books">
        <div class="popular_books_top">
          <div class="popular_books_top_left">同类热门书籍</div>
          <div class="popular_books_top_right">
            <span>全部作品</span>
          </div>
        </div>
        <div class="popular_books_bottom">
          <div class="popular_books_cover">
            <van-image fit='cover'
                       src="https://wfqqreader-1252317822.image.myqcloud.com/cover/75/33812075/b_33812075.jpg" />
            <div class="popular_books_name">九天帝尊</div>
          </div>
          <div class="popular_books_cover">
            <van-image fit='cover'
                       src="https://www.zhetian.org/public/cover/bd/64/6e/bd646ed67ecab483539b2185fb56a64b.jpg" />
            <div class="popular_books_name">太古战天诀</div>
          </div>
          <div class="popular_books_cover">
            <van-image fit='cover'
                       src="https://wfqqreader-1252317822.image.myqcloud.com/cover/783/818783/b_818783.jpg" />
            <div class="popular_books_name">八荒剑神</div>
          </div>
        </div>
      </div>
      <div class="books_info">
        <div class="books_info_name">书籍信息</div>
        <div class="books_info_introduce">
          <div>版权：跃文集团旗下创世中文网</div>
          <div>本书由春暖阅读电子版制作与发行</div>
          <div>版权所有·侵权必究</div>
        </div>
      </div>
    </div>
    <bottom-nav></bottom-nav>
  </div>
</template>

<script>
import Catalog from './Catalog.vue'
import BottomNav from './BottomNav.vue'
export default {
  name: 'Information-book',
  data () {
    return {

    }
  },
  props: {
    // bookId: {
    //   type: [Number, String],
    //   required: true
    // }
  },
  methods: {
    onClickLeft () {
      this.$router.back()
    }
  },
  components: {
    Catalog,
    BottomNav
  }
}
</script>

<style lang="scss" scoped>
.information-container {
  padding-bottom: 40px;
  ::v-deep .van-nav-bar__left {
    padding: 0;
    .van-icon {
      font-size: 26px;
      color: #b2b2b2;
    }
  }
  .introduce {
    background-color: #fff;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 14px;
    color: #39376b;
    .introduce_top {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      .introduc_book_cover {
        width: 94px;
        height: 126px;
        margin-top: 15px;
        .van-image {
          width: 100%;
          height: 100%;
        }
      }
      .introduc_book_type {
        .introduc_book_type_top {
          margin: 7px 0 3px 6px;
        }
        .introduc_book_type_bottom {
          :nth-child(2) {
            margin: 0 3px;
          }
        }
      }
    }
    .introduce_bottom {
      line-height: 1.6;
      margin-top: 10px;
      padding-left: 15px;
      font-size: 14px;
      :last-child {
        text-align: center;
      }
    }
  }
  .popular_books {
    background-color: #fff;
    display: flex;
    width: 100%;
    flex-direction: column;
    justify-content: space-between;
    margin-top: 10px;
    .popular_books_top {
      display: flex;
      justify-content: space-between;
      font-size: 18px;
      color: #423333;
      padding-top: 5px;
      .popular_books_top_right {
        color: #b2b2b2;
        font-size: 14px;
        display: flex;
        justify-content: center;
        align-items: center;
        padding-right: 7px;
        :nth-child(1) {
          padding: 3px 2px 0 0;
        }
      }
      .popular_books_top_left {
        margin-left: 8px;
      }
    }
    .popular_books_bottom {
      display: flex;
      justify-content: space-evenly;
      // justify-content: space-around;
      margin-top: 10px;
      width: 100%;
      font-size: 15px;
      .popular_books_cover {
        width: 24%;
        height: 140px;
        .van-image {
          width: 100%;
          height: 80%;
        }
        .popular_books_name {
          text-align: center;
        }
      }
    }
  }
  .popular_books_top_right_right {
    padding-top: 3px;
  }
  .books_info {
    background-color: #fff;
    font-size: 14px;
    height: 100px;
    width: 100%;
    color: #b2b2b2;
    margin-top: 7px;
    padding: 10px;
    .books_info_name {
      font-size: 18px;
      margin-bottom: 6px;
      color: black;
    }
    .books_info_introduce {
      line-height: 1.6;
    }
  }
  .box {
    position: fixed;
    overflow: auto;
    top: 45px;
    bottom: 1.27424rem;
    border-top: 1.5px solid #ccc;
  }
}
</style>
