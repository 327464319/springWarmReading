<template>
  <div class="bookItemContain" @click="goDetail">
    <div class="bookCover">
      <van-image :src="bookitem.book_cover"></van-image>
    </div>
    <div class="bookContent">
      <span>
        {{ bookitem.title }}
      </span>
      <span>{{ bookitem.author }}</span>
      <span class="van-multi-ellipsis--l3">{{ bookitem.description }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BookItem',
  props: {
    bookitem: {
      type: Object,
      required: true
    }
  },
  methods: {
    goDetail () {
      this.$router.push({
        name: 'DetailsIndex',
        params: {
          bookId: this.bookitem.id
        }
      })
    }
  }

}
</script>

<style lang="scss" scoped>
.bookItemContain {
  height: 101px;
  display: flex;
  .van-image {
    width: 76px;
    height: 101px;
  }
  .bookContent {
    display: flex;
    flex-direction: column;
    margin-left: 10px;
    justify-content: space-between;
    span:first-child {
      font-family: "微软雅黑 Bold", "微软雅黑";
      font-weight: 700;
      font-style: normal;
      font-size: 14px;
      color: #333333;
    }
    span:nth-child(2) {
      font-size: 12px;
      color: #666666;
      font-family: "微软雅黑 Regular", "微软雅黑";
      font-weight: 400;
      font-style: normal;
    }
    span:last-child {
      font-size: 12px;
      color: #999999;
      line-height: 18px;
      font-family: "微软雅黑 Regular", "微软雅黑";
      font-weight: 400;
      font-style: normal;
    }
  }
}
</style>
