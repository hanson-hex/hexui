<template>
  <div class="toast" ref="wrapper" :class="toastClass">
    <div class="message">
      <slot v-if="!enableHtml"></slot>
      <div v-else v-html="$slots.default"></div>
    </div>
    <div class="line" ref="line"></div>
    <span class="close" v-if="closeButton" @click="onClickClose">
      {{ closeButton.text }}
    </span>
  </div>
</template>

<script>
export default {
  name: "HToast",
  props: {
    autoClose: {
      type: [Boolean, Number],
      default: 5,
      validator: (value) => {
        return value === false || typeof value === "number"
      },
    },
    closeButton: {
      type: Object,
      default: () => ({
        text: "关闭",
        callback: undefined,
      }),
    },
    enableHtml: {
      type: Boolean,
      default: false,
    },
    position: {
      type: String,
      default: "top",
      validator(value) {
        return ["top", "bottom", "middle"].indexOf(value) >= 0
      },
    },
  },
  computed: {
    toastClass() {
      return {
        [`position-${this.position}`]: true,
        [`animation-${this.position}`]: true,
      }
    },
  },
  created() {},
  mounted() {
    this.executeAutoClose()
    this.updateStyle()
  },
  methods: {
    executeAutoClose() {
      if (this.autoClose) {
        setTimeout(() => {
          this.close()
        }, this.autoClose * 1000)
      }
    },
    updateStyle() {
      this.$nextTick(() => {
        this.$refs.line.style.height = `${
          this.$refs.wrapper.getBoundingClientRect().height
        }px`
      })
    },
    onClickClose() {
      this.close()
      if (this.closeButton.callback) {
        this.closeButton.callback(this)
      }
    },
    close() {
      this.$el.remove()
      this.$emit("close")
      this.$destroy()
    },
  },
}
</script>

<style lang="scss" scoped>
$font-size: 14px;
$toast-min-height: 40px;
$toast-bg: rgba(0, 0, 0, 0.75);
$animation-time: 300ms;
@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
@keyframes fadeUp {
  0% {
    opacity: 0;
    transform: translate(-50%, 100%);
  }
  100% {
    opacity: 1;
    transform: translate(-50%, 0);
  }
}
@keyframes fadeDown {
  0% {
    opacity: 0;
    transform: translate(-50%, -100%);
  }
  100% {
    opacity: 1;
    transform: translate(-50%, 0);
  }
}
.toast {
  font-size: $font-size;
  min-height: $toast-min-height;
  color: #fff;
  padding: 0 16px;
  position: fixed;
  line-height: 1.8;
  left: 50%;
  display: flex;
  align-items: center;
  transform: translateX(-50%);
  background: $toast-bg;
  border-radius: 4px;
  box-shadow: 0px 0px 3px 0px rgba(0, 0, 0, 0.5);
  .message {
    padding: 8px 0;
  }
  .close {
    padding-left: 16px;
    flex-shrink: 0;
  }
  .line {
    height: 100%;
    border-left: 1px solid #666;
    margin-left: 16px;
  }
  &.animation-top {
    animation: fadeDown $animation-time;
  }
  &.animation-middle {
    animation: fadeIn $animation-time;
  }
  &.animation-bottom {
    animation: fadeUp $animation-time;
  }
  &.position-top {
    top: 0;
    border-top-left-radius: 0;
    border-top-right-radius: 0;
  }
  &.position-bottom {
    bottom: 0;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
    transform: translateX(-50%);
  }
  &.position-middle {
    top: 50%;
    transform: translate(-50%, -50%);
  }
}
</style>
