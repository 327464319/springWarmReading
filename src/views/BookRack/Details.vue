<template>
  <div class="details-container">
    <div class="header">
      <van-icon name="arrow-left" @click="$router.back()" />
    </div>
    <div class="box">
      <div class="books_introduce">
        <div class="introduce_left">
          <van-image
            fit="cover"
            src="https://wfqqreader-1252317822.image.myqcloud.com/cover/735/357735/b_357735.jpg"
          />
        </div>
        <div class="introduce_right">
          <div class="books_name">
            <div class="name">择天记</div>
            <div class="star">
              <van-icon name="star"></van-icon>
              <van-icon name="star"></van-icon>
              <van-icon name="star"></van-icon>
              <van-icon name="star"></van-icon>
              <van-icon name="star-o"></van-icon>
              <span>8.4</span>
            </div>
          </div>
          <div class="books_type">
            <div class="books_type_top">
              <span>猫腻</span>
              <span class="books_type_top_middle">|</span>
              <span>玄幻</span>
            </div>
            <div class="books_type_bottom">
              <span class="books_type_bottom_left">5春卷/千字</span>
              <span>313万字</span>
            </div>
          </div>
        </div>
      </div>
      <div class="books_synopsis" v-if="informationContent">
        <div>命里有时终须有，命里无时要强求。</div>
        <div>
          <span
            >这是一个长生果的故事。择是选择。这是一个关于选择的故事。三千世界，满天神魔，手握道卷，掌天下...</span
          >
          <span class="books_synopsis_left">
            <van-icon
              name="arrow-down"
              @click="informationContent = !informationContent"
            ></van-icon>
          </span>
        </div>
      </div>
      <div class="books_synopsis" v-if="!informationContent">
        <div>命里有时终须有，命里无时要强求。</div>
        <div>
          <span
            >这是一个长生果的故事。择是选择。这是一个关于选择的故事。三千世界，满天神魔，手握道卷，掌天下天上一应事。
            太始元年，有神石自太空飞来，分散落在人间，其中落在东土大陆的神石，上面镌刻着奇怪的图腾，人因观其图腾而悟道，后立国教。数千年后，十四岁的少年孤儿陈长生，为治病改命离开自己的师父，带着一纸婚约来到神都，从而开启了一个逆天强者的崛起征程。</span
          >
          <span class="books_synopsis_left">
            <van-icon
              name="arrow-up"
              @click="informationContent = !informationContent"
            ></van-icon>
          </span>
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
            <span class="pdr" @click="togglePopularBooks">换一换</span>
          </div>
        </div>
        <div class="popular_books_bottom" v-if="popularBooks === 0">
          <div class="popular_books_cover">
            <van-image
              fit="cover"
              src="https://wfqqreader-1252317822.image.myqcloud.com/cover/75/33812075/b_33812075.jpg"
            />
            <div class="popular_books_name">九天帝尊</div>
          </div>
          <div class="popular_books_cover">
            <van-image
              fit="cover"
              src="https://www.zhetian.org/public/cover/bd/64/6e/bd646ed67ecab483539b2185fb56a64b.jpg"
            />
            <div class="popular_books_name">太古战天诀</div>
          </div>
          <div class="popular_books_cover">
            <van-image
              fit="cover"
              src="https://wfqqreader-1252317822.image.myqcloud.com/cover/783/818783/b_818783.jpg"
            />
            <div class="popular_books_name">八荒剑神</div>
          </div>
          <div class="popular_books_cover">
            <van-image
              fit="cover"
              src="https://wfqqreader-1252317822.image.myqcloud.com/cover/365/31449365/b_31449365.jpg"
            />
            <div class="popular_books_name">七届武神</div>
          </div>
        </div>
        <div class="popular_books_bottom" v-else-if="popularBooks === 1">
          <div class="popular_books_cover">
            <van-image
              fit="cover"
              src="http://img.dashenxiaoshuo.com/image/0/343/343s.jpg"
            />
            <div class="popular_books_name">权利红人</div>
          </div>
          <div class="popular_books_cover">
            <van-image
              fit="cover"
              src="https://www.biqudd.com/files/article/image/13/13633/13633s.jpg"
            />
            <div class="popular_books_name">官谋</div>
          </div>
          <div class="popular_books_cover">
            <van-image
              fit="cover"
              src="http://www.booksky.cc/headimgs/30/30802/s30802.jpg"
            />
            <div class="popular_books_name">官笙</div>
          </div>
          <div class="popular_books_cover">
            <van-image
              fit="cover"
              src="https://dss1.baidu.com/-4o3dSag_xI4khGko9WTAnF6hhy/boxapp_novel/wh%3D315%2C423/sign=20ff2d9a526034a829b7b082fa266560/023b5bb5c9ea15ce8f094492b8003af33b87b242.jpg"
            />
            <div class="popular_books_name">因为遇到你</div>
          </div>
        </div>
        <div class="popular_books_bottom" v-else>
          <div class="popular_books_cover">
            <van-image
              fit="cover"
              src="https://wfqqreader-1252317822.image.myqcloud.com/cover/735/357735/b_357735.jpg"
            />
            <div class="popular_books_name">择天记</div>
          </div>
          <div class="popular_books_cover">
            <van-image
              fit="cover"
              src="https://wfqqreader-1252317822.image.myqcloud.com/cover/952/462952/b_462952.jpg"
            />
            <div class="popular_books_name">将夜</div>
          </div>
          <div class="popular_books_cover">
            <van-image
              fit="cover"
              src="https://wfqqreader-1252317822.image.myqcloud.com/cover/39/469039/b_469039.jpg"
            />
            <div class="popular_books_name">间客</div>
          </div>
          <div class="popular_books_cover">
            <van-image
              fit="cover"
              src="https://wfqqreader-1252317822.image.myqcloud.com/cover/592/462592/b_462592.jpg"
            />
            <div class="popular_books_name">庆余年</div>
          </div>
        </div>
      </div>
      <div class="popular_books other_books">
        <div class="popular_books_top">
          <div class="popular_books_top_left">作者其他作品</div>
          <div class="popular_books_top_right">
            <span @click="$router.push('/bookmall')">全部作品 </span>
            <span class="popular_books_top_right_right">
              <van-icon name="arrow" />
            </span>
          </div>
        </div>
        <div class="popular_books_bottom">
          <div class="popular_books_cover">
            <van-image
              fit="cover"
              src="https://wfqqreader-1252317822.image.myqcloud.com/cover/735/357735/b_357735.jpg"
            />
            <div class="popular_books_name">择天记</div>
          </div>
          <div class="popular_books_cover">
            <van-image
              fit="cover"
              src="https://wfqqreader-1252317822.image.myqcloud.com/cover/952/462952/b_462952.jpg"
            />
            <div class="popular_books_name">将夜</div>
          </div>
          <div class="popular_books_cover">
            <van-image
              fit="cover"
              src="https://wfqqreader-1252317822.image.myqcloud.com/cover/39/469039/b_469039.jpg"
            />
            <div class="popular_books_name">间客</div>
          </div>
          <div class="popular_books_cover">
            <van-image
              fit="cover"
              src="https://wfqqreader-1252317822.image.myqcloud.com/cover/592/462592/b_462592.jpg"
            />
            <div class="popular_books_name">庆余年</div>
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
import BottomNav from './BottomNav.vue'
import Catalog from './Catalog.vue'
export default {
  name: 'DetailsIndex',
  props: {
    // bookId: {
    //   type: [Number, String],
    //   required: true
    // }
  },
  data () {
    return {
      informationContent: true,
      popularBooks: 0
    }
  },
  components: {
    BottomNav,
    Catalog
  },
  methods: {
    togglePopularBooks () {
      this.popularBooks++
      if (this.popularBooks > 2) {
        this.popularBooks = 0
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.details-container {
  background-color: #f2f2f2;
  padding-bottom: 40px;
  .header {
    background-color: #fff;
    .van-icon {
      padding-top: 9px;
      color: #b6b6b6;
      font-size: 28px;
    }
  }
  .books_introduce {
    background-color: #fff;
    display: flex;
    padding: 6px 11px 0;
    .introduce_left {
      width: 100px;
      height: 132px;
      .van-image {
        width: 100%;
        height: 100%;
      }
    }
    .introduce_right {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      font-size: 16px;
      color: #454545;
      margin-left: 12px;
      width: 200px;
      height: 110px;
      .name {
        margin-bottom: 8px;
      }
      .star {
        color: #999999;
        font-size: 15px;
        span {
          margin-left: 4px;
        }
      }
      .books_type {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        width: 100%;
        height: 50px;
        font-size: 15px;
        .books_type_top {
          .books_type_top_middle {
            margin: 0 3px;
          }
        }
        .books_type_bottom {
          .books_type_bottom_left {
            margin-right: 9px;
          }
        }
      }
    }
  }
  .books_synopsis {
    background-color: #fff;
    box-sizing: border-box;
    font-size: 13.5px;
    color: #7d7f7d;
    padding: 5px 10px;
    .books_synopsis_left {
      padding-left: 23px;
      font-size: 15px;
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
      .popular_books_top_right {
        color: #b2b2b2;
        font-size: 14px;
        display: flex;
        justify-content: center;
        align-items: center;
        :nth-child(1) {
          padding: 2px 2px 0 0;
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
        width: 23%;
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
    overflow-y: aoto;
    overflow-x: hidden;
    top: 50px;
    bottom: 45px;
    background-color: #f2f2f2;
  }
  .pdr {
    padding-right: 10px;
  }
}
</style>
