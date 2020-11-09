<template>
  <div class="catalog">
    <div class="catalog_left">
      <span>目录</span>
      <span>5月4日 20:00 更新至1238章</span>
    </div>
    <div class="catalog_right">
      <span>连载中</span>
      <span>
        <van-icon name="arrow" />
      </span>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.catalog {
  background-color: #fff;
  width: 100%;
  height: 35px;
  font-size: 15px;
  display: flex;
  border-top: 1px solid #b2b2b2;
  justify-content: space-between;
  align-items: center;

  .catalog_left {
    padding-left: 10px;
    :nth-child(2) {
      color: #b2b2b2;
      font-size: 13px;
      padding-left: 15px;
    }
  }
  .catalog_right {
    display: flex;
    justify-content: center;
    align-items: center;
    color: #b2b2b2;
    font-size: 13px;
    padding-left: 15px;
    :nth-child(2) {
      padding-top: 3px;
      font-size: 15px;
    }
  }
}
</style>
