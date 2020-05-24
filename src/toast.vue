<template>
  <div class="toast" ref="wrapper">
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
      type: Boolean,
      default: true,
    },
    autoCloseDelay: {
      type: Number,
      default: 50,
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
        }, this.autoCloseDelay * 1000)
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
      this.$destroy()
    },
  },
}
</script>

<style lang="scss" scoped>
$font-size: 14px;
$toast-min-height: 40px;
$toast-bg: rgba(0, 0, 0, 0.75);
.toast {
  font-size: $font-size;
  min-height: $toast-min-height;
  color: #fff;
  padding: 0 16px;
  position: fixed;
  line-height: 1.8;
  top: 0;
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
</style>
