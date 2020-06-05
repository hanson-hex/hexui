<template>
  <div class="popover" @click="onClick">
    <div
      class="content-wrapper"
      :class="{ [`content-${position}`]: true }"
      ref="contentWrapper"
      v-if="visible"
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
  props: {
    position: {
      type: String,
      default: "top",
      validator(value) {
        return ["left", "right", "top", "bottom"].indexOf(value) >= 0
      },
    },
  },
  data() {
    return {
      visible: false,
    }
  },
  methods: {
    positionContent() {
      document.body.appendChild(this.$refs.contentWrapper)
      let {
        width,
        height,
        left,
        top,
      } = this.$refs.triggerWrapper.getBoundingClientRect()
      this.$refs.contentWrapper.style.left = `${left + window.scrollX}px`
      this.$refs.contentWrapper.style.top = `${top + window.scrollY}px`
    },
    listenDocument() {
      let eventHander = (e) => {
        console.log("e", e.target)
        console.log("content", this.$refs.contentWrapper)
        if (
          this.$refs.contentWrapper &&
          this.$refs.contentWrapper.contains(e.target)
        ) {
          return
        }
        console.log("点击了body, 准备关闭")
        this.visible = false
        document.removeEventListener("click", eventHander)
      }
      document.addEventListener("click", eventHander)
    },
    onClick(e) {
      if (this.$refs.triggerWrapper.contains(e.target)) {
        console.log("点击了下面")
        this.visible = !this.visible
        if (this.visible) {
          setTimeout(() => {
            this.positionContent()
            this.listenDocument()
          }, 0)
        }
      }
      // console.log("切换visible")
      // } else {
      //   console.log("关闭2")
      // }
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
  // word-break: break-all;
}
.content-top::before {
  content: "";
  width: 0;
  height: 0;
  border-top: 10px solid #ccc;
  border-left: 10px solid transparent;
  border-right: 10px solid transparent;
  position: absolute;
}
</style>
