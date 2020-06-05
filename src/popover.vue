<template>
  <div class="popover" ref="popover" @click="onClick">
    <div
      class="content-wrapper"
      :class="{ [`position-${position}`]: true }"
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
      }
    }
  },
  data() {
    return {
      visible: false
    }
  },
  methods: {
    positionContent() {
      const { contentWrapper, triggerWrapper } = this.$refs
      document.body.appendChild(contentWrapper)
      let { width, height, left, top } = triggerWrapper.getBoundingClientRect()
      let { height: contentHeight } = contentWrapper.getBoundingClientRect()
      let positions = {
        top: {
          left: `${left + window.scrollX}px`,
          top: `${top + window.scrollY}px`
        },
        bottom: {
          left: `${left + window.scrollX}px`,
          top: `${top + window.scrollY + height}px`
        }
      }
      contentWrapper.style.left = positions[this.position].left
      contentWrapper.style.top = positions[this.position].top
    },
    listenDocument() {
      document.addEventListener("click", this.eventHandler)
    },
    onShow() {
      console.log("onShow")
      this.visible = true
      setTimeout(() => {
        this.positionContent()
        this.listenDocument()
      }, 0)
    },
    eventHandler(e) {
      console.log("e", e.target)
      if (this.$refs.popover && this.$refs.popover.contains(e.target)) {
        return
      }
      if (
        this.$refs.contentWrapper &&
        this.$refs.contentWrapper.contains(e.target)
      ) {
        return
      }
      this.onClose()
    },
    onClose() {
      this.visible = false
      document.removeEventListener("click", this.eventHandler)
    },
    onClick(e) {
      if (this.$refs.triggerWrapper.contains(e.target)) {
        console.log("点击了下面")
        if (!this.visible) {
          this.onShow()
        } else {
          console.log("关闭2")
          this.onClose()
        }
      }
    }
  }
}
</script>

<style scoped lang="scss">
$border-color: #333;
$border-radius: 4px;
.popover {
  display: inline-block;
  position: relative;
}
.content-wrapper {
  position: absolute;
  border: 1px solid $border-color;
  filter: drop-shadow(0 1px 1px rgba(0, 0, 0, 0.5));
  border-radius: $border-radius;
  background: white;
  padding: 0.5em 1em;
  word-wrap: break-word;
  max-width: 20em;
  &::before,
  &::after {
    content: "";
    display: block;
    border: 10px solid transparent;
    width: 0;
    height: 0;
    position: absolute;
  }
  &.position-top {
    transform: translateY(-100%);
    margin-top: -10px;
    &::before,
    &::after {
      left: 10px;
    }
    &::before {
      border-top-color: black;
      border-bottom: none;
      top: 100%;
    }
    &::after {
      border-top-color: white;
      border-bottom: none;
      top: calc(100% - 1px);
    }
  }
  &.position-bottom {
    // transform: translateY(100%);
    margin-top: 10px;
    &::before,
    &::after {
      left: 10px;
    }
    &::before {
      border-top-color: black;
      border-bottom: none;
      bottom: 100%;
    }
    &::after {
      border-top-color: white;
      border-bottom: none;
      bottom: calc(100% - 1px);
    }
  }
}
</style>
