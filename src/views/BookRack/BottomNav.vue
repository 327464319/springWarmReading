<template>
  <div>
    <div class="bottom_nav">
      <div>下载</div>
      <div>免费试读</div>
      <div>加入书架</div>
    </div>
  </div>
</template>

<script>
export default {

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
  }
  :nth-child(2) {
    background-color: #ff6666;
    height: 100%;
    width: 44%;
    color: #fff;
  }
}
</style>
