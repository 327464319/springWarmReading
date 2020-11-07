<template>
  <div class="book-rack">
    <div class="top-details">
      <!-- 顶部导航栏 -->
      <van-row class="top-nav">
        <van-col span="7" class="title">春暖阅读</van-col>
        <van-col span="14" class="min-des">面朝大海，春暖花开</van-col>
        <van-col span="3" class="more-icon">
          <van-icon name="weapp-nav" />
        </van-col>
      </van-row>
      <!-- 书籍详情 -->
      <div class="book-detail">
        <div class="book-img">
          <img :src="firstbook.book_image" alt="封面" />
        </div>
        <div class="book-information">
          <div class="name">{{ firstbook.book_name }}</div>
          <div class="author">{{ firstbook.books_author }}</div>
          <div class="description">{{ firstbook.books_description }}</div>
          <div class="has-read">已读{{ firstbook.book_hasRead }}%</div>
        </div>
      </div>
    </div>
    <!-- 书籍列表 -->
    <div class="book-lists">
      <div class="book-list-item" v-for="item in bookList" :key="item.books_id">
        <div class="listItem-image">
          <img :src="item.book_image" alt="封面" />
        </div>
        <div class="listItem-name">{{ item.book_name }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import { getBookList } from '@/api/books'
export default {
  name: 'BookRack',
  data () {
    return {
      bookList: [],
      firstbook: {}
    }
  },
  created () {
    this.getBooks()
  },
  methods: {
    async getBooks () {
      try {
        const { data: res } = await getBookList()
        console.log(res)
        if (res.status !== 200) return this.$toast.fail('获取书籍列表失败！')
        this.bookList = res.data
        this.firstbook = res.data[0]
        this.$toast.success('获取书籍列表成功！')
      } catch (error) {
        this.$toast.fail('获取书籍列表失败！请稍后重试')
      }
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
        text-align: center;
        height: 30px;
        line-height: 40px;
        color: #fff;
      }
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
        width: 97px;
        height: 129px;
        margin-bottom: 10px;
        img {
          width: 100%;
        }
      }
      .listItem-name {
        height: 6px;
        font-size: 14px;
        text-align: center;
      }
    }
  }
}
</style>
