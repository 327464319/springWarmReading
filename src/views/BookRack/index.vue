<template>
  <div class="book-rack" v-if="!firstbook.books_id || bookList.length === 0">
    <div class="top-details">
      <!-- 顶部导航栏 -->
      <van-row class="top-nav">
        <van-col span="7" class="title">春暖阅读</van-col>
        <van-col span="14" class="min-des">面朝大海，春暖花开</van-col>
        <van-col
          span="3"
          class="more-icon"
          @click="isSearchShow = !isSearchShow"
        >
          <van-icon name="weapp-nav" />
          <div class="more-details" v-if="isSearchShow">
            <div class="first-operation" @click="$router.push('/search')">
              <van-icon name="search" size="15" />搜索
            </div>
            <div
              class="second-operation"
              @click="$toast.fail('书架为空哦，请搜索添加书籍')"
            >
              <van-icon name="apps-o" size="15" />整理书架
            </div>
          </div>
        </van-col>
      </van-row>
      <!-- 书籍详情 -->
      <div class="book-detail">
        <div class="book-img">
          <img src="../../assets/fengmian.jpg" />
        </div>
        <div class="book-information">
          <div class="description">书架暂无书籍</div>
        </div>
      </div>
    </div>
    <!-- 书籍列表 -->
    <!-- <div class="book-lists">
      <div class="book-list-item" v-for="item in bookList" :key="item.books_id">
        <div class="listItem-image">
          <img :src="item.book_image" alt="封面" />
        </div>
        <div class="listItem-name">{{ item.book_name }}</div>
      </div>
    </div> -->
  </div>

  <div class="book-rack" v-else>
    <div class="top-details">
      <!-- 顶部导航栏 -->
      <van-row class="top-nav" v-if="!isDeleteShow">
        <van-col span="7" class="title">春暖阅读</van-col>
        <van-col span="14" class="min-des">面朝大海，春暖花开</van-col>
        <van-col
          span="3"
          class="more-icon"
          @click="isSearchShow = !isSearchShow"
        >
          <van-icon name="weapp-nav" />
          <div class="more-details" v-if="isSearchShow">
            <div class="first-operation" @click="$router.push('/search')">
              <van-icon name="search" size="15" />搜索
            </div>
            <div class="second-operation" @click="finished">
              <van-icon name="apps-o" size="15" />整理书架
            </div>
          </div>
        </van-col>
      </van-row>
      <van-row class="top-operation" v-else>
        <van-nav-bar
          left-text="全选"
          right-text="完成"
          @click-left="onClickLeft"
          @click-right="onClickRight"
        >
          <template #title>
            最近阅读
            <van-icon name="ascending" size="18" class="ascending-icon" />
          </template>
        </van-nav-bar>
      </van-row>
      <!-- 书籍详情 -->
      <div class="book-detail">
        <div class="book-img">
          <img :src="bookList[0].book_image" alt="封面" />
        </div>
        <div class="book-information">
          <div class="name">{{ bookList[0].book_name }}</div>
          <div class="author">{{ bookList[0].books_author }}</div>
          <div class="description">{{ bookList[0].books_description }}</div>
          <div class="has-read">已读{{ bookList[0].book_hasRead }}%</div>
        </div>
      </div>
    </div>

    <!-- 书籍列表 -->
    <van-checkbox-group v-model="result" class="book-lists" ref="checkboxGroup">
      <div class="book-list-item" v-for="item in bookList" :key="item.books_id">
        <div class="listItem-image">
          <img :src="item.book_image" />
          <van-checkbox
            v-if="isDeleteShow"
            :name="item.books_id"
            class="checkbox-item"
          ></van-checkbox>
        </div>
        <div class="listItem-name">{{ item.book_name }}</div>
      </div>
    </van-checkbox-group>

    <van-button
      type="primary"
      size="large"
      v-if="isDeleteShow"
      class="del-button"
      @click="toDeleteshow = true"
      >删除所选({{ result.length }})</van-button
    >
    <van-popup
      v-model="toDeleteshow"
      position="bottom"
      :style="{ height: '20%' }"
      class="popup-del"
    >
      <h2>从书架删除</h2>
      <p>确定要删除所选书籍吗？</p>
      <div class="button-group">
        <van-button color="#f86566" @click="toDelChecked">删除</van-button
        ><van-button type="default" @click="toDeleteshow = false"
          >取消</van-button
        >
      </div>
    </van-popup>
  </div>
</template>

<script>
import { getBookList } from '@/api/books'
export default {
  name: 'BookRack',
  data () {
    return {
      bookList: [],
      firstbook: {},
      isSearchShow: false, // 更多显示与隐藏
      isDeleteShow: false, // 删除按钮显示与隐藏
      result: [],
      toDeleteshow: false // 删除弹出框
    }
  },
  mounted () {
    this.getBooks()
  },
  methods: {
    async getBooks () {
      try {
        const { data: res } = await getBookList()
        console.log(res)
        if (res.status !== 200) return this.$toast.fail('获取书籍列表失败！')
        this.bookList = res.data
        this.firstbook = this.bookList[0]
        this.$toast.success('获取书籍列表成功！')
      } catch (error) {
        this.$toast.fail('获取书籍列表失败！请稍后重试')
      }
    },
    onClickLeft () {
      // 全选
      this.$refs.checkboxGroup.toggleAll(true)
    },
    onClickRight () {
      this.isDeleteShow = !this.isDeleteShow
    },
    finished () {
      this.isSearchShow = !this.isSearchShow
      this.isDeleteShow = !this.isDeleteShow
    },
    toDelChecked () {
      this.toDeleteshow = false
      if (this.result.length === 0) {
        this.$toast.fail('您没有选择任何书籍')
      } else {
        for (const item of this.result) {
          console.log(item)
          this.bookList = this.bookList.filter(bookItem => {
            return bookItem.books_id !== item
          })
        }
      }
      this.result = []
      console.log(this.bookList)
    }
  }
}

</script>

<style lang="scss" scoped>
.book-rack {
  margin-bottom: 70px;
  .top-details {
    padding: 0 10px;
    background-color: #666;
    height: 262px;
    .top-nav {
      padding: 10px 0;
      .title {
        font-size: 22px;
        color: #fff;
      }
      .min-des {
        font-size: 14px;
        height: 30px;
        line-height: 35px;
        color: #999;
      }
      .more-icon {
        position: relative;
        text-align: center;
        height: 30px;
        line-height: 40px;
        color: #fff;
        .more-details {
          position: absolute;
          top: 40px;
          right: 5px;
          width: 100px;
          height: 80px;
          border-radius: 8px;
          color: #111;
          background-color: #fff;
          .first-operation {
            font-size: 12px;
            border-bottom: 1px solid #eee;
            ::v-deep.van-icon {
              vertical-align: middle;
              margin-right: 5px;
            }
          }
          .second-operation {
            font-size: 12px;
            ::v-deep.van-icon {
              vertical-align: middle;
              margin-right: 5px;
            }
          }
          &::after {
            content: "";
            position: absolute;
            right: 5px;
            top: -23px;
            display: block;
            width: 0;
            height: 0;
            border-right: 12px solid transparent;
            border-top: 12px solid transparent;
            border-left: 12px solid transparent;
            border-bottom: 12px solid #fff;
          }
        }
      }
    }
    .top-operation {
      padding-top: 6px;
      ::v-deep.van-nav-bar {
        background-color: #666;
        .van-nav-bar__left,
        .van-nav-bar__right {
          .van-nav-bar__text {
            color: #fff;
          }
        }
        .van-nav-bar__title {
          color: #fff;
          .ascending-icon {
            vertical-align: middle;
            margin-right: 5px;
            color: #fff;
          }
        }
      }
    }
    ::v-deep.van-hairline--bottom::after {
      border-bottom-width: 0;
    }
    .book-detail {
      display: flex;
      height: 200px;
      align-items: center;

      .book-img {
        width: 112px;
        height: 140px;
        img {
          width: 100%;
        }
      }
      .book-information {
        height: 140px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        margin-left: 10px;
        .name {
          font-size: 18px;
          color: #fff;
        }
        .author {
          font-size: 14px;
          color: #999;
        }
        .description {
          width: 220px;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 2;
          font-size: 12px;
          overflow: hidden;
          color: #fff;
        }
        .has-read {
          position: relative;
          font-size: 12px;
          width: 70px;
          height: 24px;
          background-color: #737373;
          line-height: 24px;
          margin-left: -10px;
          color: #fff;
          text-align: center;
          &::after {
            content: "";
            position: absolute;
            right: 0;
            top: 0;
            display: block;
            width: 0;
            height: 0;
            border-right: 12px solid #666;
            border-top: 12px solid transparent;
            border-left: 12px solid transparent;
            border-bottom: 12px solid transparent;
          }
        }
      }
    }
  }
  .book-lists {
    display: flex;
    flex-wrap: wrap;
    margin-top: 10px;
    .book-list-item {
      width: 97px;
      height: 135px;
      margin: 15px 10px;
      .listItem-image {
        position: relative;
        width: 97px;
        height: 129px;
        margin-bottom: 10px;
        img {
          width: 100%;
        }
        .checkbox-item {
          position: absolute;
          bottom: 5px;
          right: 5px;
        }
      }
      .listItem-name {
        height: 6px;
        font-size: 14px;
        text-align: center;
      }
    }
  }
  .del-button {
    position: fixed;
    bottom: 0;
    right: 0;
    left: 0;
    z-index: 99;
    background-color: #fff;
    border: 0;
    border-top: 1px solid #ccc;
    color: red;
  }
  .popup-del {
    h2 {
      font-size: 18px;
      text-align: center;
      color: #777;
    }
    p {
      font-size: 14px;
      text-align: center;
      color: #777;
    }
    .button-group {
      display: flex;
      justify-content: space-around;
      ::v-deep.van-button {
        height: 30px;
        width: 120px;
        border-radius: 5px;
      }
    }
  }
}
</style>
