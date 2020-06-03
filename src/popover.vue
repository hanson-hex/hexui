<template>
  <div class="popover" @click.stop="xxx()">
    <div
      class="content-wrapper"
      ref="contentWrapper"
      v-show="visible"
      @click="zzz"
    >
      <slot name="content"></slot>
    </div>
    <span ref="triggerWrapper">
      <slot name="trigger"></slot>
    </span>
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
    zzz() {
      console.log("zzz")
    },
    xxx() {
      this.visible = !this.visible
      if (this.visible) {
        this.$nextTick(() => {
          document.body.appendChild(this.$refs.contentWrapper)
          let {
            width,
            height,
            left,
            top,
          } = this.$refs.triggerWrapper.getBoundingClientRect()
          console.log("wdith", width)
          this.$refs.contentWrapper.style.left = `${left}px`
          this.$refs.contentWrapper.style.top = `${top}px`
          let eventHander = () => {
            this.visible = false
            document.removeEventListener("click", eventHander)
          }
          document.addEventListener("click", eventHander)
        })
      }
    },
  },
  mounted() {},
}
</script>

<style scoped lang="scss">
.popover {
  display: inline-block;
  position: relative;
}
.content-wrapper {
  position: absolute;
  transform: translateY(-100%);
  border: 1px solid red;
  box-shadow: 0 0 3px rgba(0, 0, 0.5);
}
</style>
