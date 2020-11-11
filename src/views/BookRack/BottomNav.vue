import { mapState } from 'vuex';
<template>
  <div>
    <div class="bottom_nav">
      <div>下载</div>
      <div>免费试读</div>
      <div @click="addBookMall"
           v-if="isAddShow">加入书架</div>
      <div v-else-if="!isAddShow">
        <span>
          <van-icon name="coupon-o" />
        </span>
        <span @click="addBookMall">已加入</span>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'BottomNav',
  data () {
    return {
      isAddShow: true
    }
  },
  methods: {
    addBookMall () {
      this.isAddShow = !this.isAddShow
    }
  },
  computed: {
    ...mapState(['user'])
  }
}
</script>

<style lang="scss" scoped>
.bottom_nav {
  position: fixed;
  display: flex;
  width: 100%;
  bottom: 0;
  right: 0;
  left: 0;
  background-color: #fff;
  border-top: 1px solid #b2b2b2;
  height: 50px;
  text-align: center;
  line-height: 2.7;
  font-size: 20px;
  :nth-child(1),
  :nth-child(3) {
    width: 28%;
    display: flex;
    justify-content: center;
    align-items: center;
    :nth-child(1) {
      color: blue;
      padding-top: 2px;
      margin-right: 1px;
      font-size: 30px;
    }
    :nth-child(2) {
      background: #fff;
      color: black;
      width: 60%;
    }
  }
  :nth-child(2) {
    background-color: #ff6666;
    height: 100%;
    width: 44%;
    color: #fff;
  }
}
</style>
