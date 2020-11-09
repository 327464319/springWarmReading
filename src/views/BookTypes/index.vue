<template>
  <div class="book-types">
    <van-nav-bar title="全部分类">
      <template #left>
        <van-icon name="arrow-left"
          color="#8E8E8E"
          size="26px"
          @click="$router.back()" />
      </template>
      <template #right>
        <van-icon class="iconfont icon-chaxun"
          size="28px"
          @click="$router.push('/search')" />
      </template>
    </van-nav-bar>

    <van-cell class="manType">
      <!-- 男生分类 -->
      <van-cell class="iconfont icon-woman1"
        title=" 男生"
        :border="false">
      </van-cell>
      <van-grid :column-num="3">
        <van-grid-item v-for="value in 9"
          :key="value"
          text="文字"
          to="/NextTypes">
          <span class="manText"
            slot="text">玄幻</span>
          <span class="manSum"
            slot="text">共1231312册</span>
        </van-grid-item>
      </van-grid>
    </van-cell>
    <!-- 女生分类 -->
    <van-cell class="womanType">
      <van-cell title="女生"
        class="iconfont icon-fenzu2"
        :border="false">
      </van-cell>
      <van-grid :column-num="3">
        <van-grid-item v-for="value in 9"
          :key="value"
          text="文字"
          to="/NextTypes">
          <span class="womanText"
            slot="text">古代言情</span>
          <span class="womanSum"
            slot="text">共22221册</span>
        </van-grid-item>
      </van-grid>
    </van-cell>
  </div>

</template>

<script>
export default {
  name: 'BookTypes',
  data () {
    return {
      tpyeShow: false
    }
  },
  // created () {

  // },

  methods: {
    bookShowPopup () {
      this.tpyeShow = true
    }
  }
}
</script>

<style lang="scss" scoped>
.book-types {
  .van-icon::before {
    color: #9e9e9e;
  }

  .icon-woman1:before {
    color: #4da6fe;
  }

  .icon-fenzu2:before {
    color: #ffa2c0;
  }
  padding: 5px;
  .manText,
  .womanText {
    font-size: 18px;
    color: #666666;
  }
  .manSum,
  .womanSum {
    font-size: 10px;
    color: #ccccd6;
  }
}
</style>
