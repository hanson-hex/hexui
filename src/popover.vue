<template>
  <div class="popover" @click="xxx">
    <div class="content-wrapper" ref="contentWrapper" v-if="visible">
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
    xxx() {
      this.visible = !this.visible
      console.log("切换visible")
      if (this.visible === true) {
        this.$nextTick(() => {
          document.body.addEventListener("click", () => {
            this.visible = false
            console.log("点击body关闭popover")
          })
        })
      }
      // if (this.visible) {
      //   setTimeout(() => {
      //     let eventHander = () => {
      //       console.log("点击了body")
      //       this.visible = false
      //       document.removeEventListener("click", eventHander)
      //       console.log("关闭1")
      //     }
      //     console.log("新增监听器")
      //     // document.addEventListener("click", eventHander)
      //     document.addEventListener(
      //       "click",
      //       function x() {
      //         console.log("点击了body")
      //         this.visible = false
      //         console.log("移除监听器")
      //         document.removeEventListener("click", x)
      //       }.bind(this)
      //     )
      //   }, 3000)
      //   // })
      //   // this.$nextTick(() => {
      //   // document.body.appendChild(this.$refs.contentWrapper)
      //   // let {
      //   //   width,
      //   //   height,
      //   //   left,
      //   //   top,
      //   // } = this.$refs.triggerWrapper.getBoundingClientRect()
      //   // this.$refs.contentWrapper.style.left = `${left + window.scrollX}px`
      //   // this.$refs.contentWrapper.style.top = `${top + window.scrollY}px`
      // } else {
      //   console.log("关闭2")
      // }
      // console.log("执行完毕")
    },
  },
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
