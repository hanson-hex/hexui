<template>
  <transition name="fade">
    <div class="sider" v-show="visible">
      <slot></slot>
      <button @click="visible = !visible">关闭</button>
    </div>
  </transition>
</template>

<script>
export default {
  name: "HSider",
  data() {
    return {
      visible: true,
    }
  },
}
</script>

<style lang="scss" scoped>
.sider {
  position: relative;
  > button {
    position: absolute;
    top: 0;
    right: 0;
  }
}
.fade-enter-active,
.fade-leave-active {
  transition: all 0.5s;
}
.fade-enter,
.fade-leave-to {
  margin-left: -200px;
}
</style>
