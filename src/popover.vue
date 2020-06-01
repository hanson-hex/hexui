<template>
  <div class="popover" @click.stop="xxx()">
    <div class="content-wrapper" v-if="visible" @click.stop>
      <slot name="content"></slot>
    </div>
    <slot name="trigger"></slot>
  </div>
</template>

<script>
export default {
  name: "HPopover",
  data() {
    return {
      visible: false,
    }
  },
  methods: {
    xxx() {
      this.visible = !this.visible
      console.log("设置了监听")
      this.$nextTick(() => {
        console.log("开启监听")
        let eventHander = () => {
          this.visible = false
          document.removeEventListener("click", eventHander)
        }
        document.addEventListener("click", eventHander)
      })
    },
  },
}
</script>

<style scoped lang="scss">
.popover {
  display: inline-block;
  position: relative;
  .content-wrapper {
    position: absolute;
    left: 0;
    bottom: 100%;
    border: 1px solid red;
    box-shadow: 0 0 3px rgba(0, 0, 0.5);
  }
}
</style>
