
<template>
  <div id="app">
    <transition :name="direction">
      <keep-alive> <router-view /></keep-alive>
    </transition>
  </div>
</template>
<script>
export default {
  data () {
    return {
      direction: 'fade-left'
    }
  },
  methods: {},
  watch: {
    $route: function (to, from) {
      if (to.meta.index < from.meta.index) {
        this.direction = 'fade-left'
      } else if (to.meta.index > from.meta.index) {
        this.direction = 'fade-right'
      } else {
        this.direction = ''
      }
    }
  }
}
</script>
<style lang="scss">
.fade-left-enter,
.fade-right-leave-to {
  transform: translateX(100%);
}
.fade-left-enter-to,
.fade-left-leave,
.fade-right-enter-to,
.fade-right-leave {
  transform: translateX(0);
}
.fade-left-leave-to,
.fade-right-enter {
  transform: translateX(-100%);
}
.fade-left-enter-active,
.fade-left-leave-active,
.fade-right-enter-active,
.fade-right-leave-active {
  transition: all 0.3s;
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
}
</style>
