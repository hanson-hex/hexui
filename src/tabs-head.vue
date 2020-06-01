<template>
  <div class="tabs-head">
    <slot></slot>
    <div class="line" ref="line"></div>
    <div class="actions-wrapper">
      <slot name="actions"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "HTabsHead",
  inject: ["eventBus"],
  mounted() {
    this.eventBus.$on("update:selected", (item, vm) => {
      const { width, left } = vm.$el.getBoundingClientRect()
      this.$refs.line.style.width = `${width}px`
      this.$refs.line.style.left = `${left}px`
      this.$refs.line.style.transfrom = `translateX${left}px`
    })
  },
}
</script>

<style lang="scss" scoped>
$tab-height: 40px;
$blue: blue;
$border-text-color: #ddd;
.tabs-head {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  border-bottom: 1px solid $border-text-color;
  position: relative;
  > .line {
    position: absolute;
    bottom: 0;
    border-bottom: 1px solid $blue;
    transition: all 350ms;
  }
  > .actions-wrapper {
    margin-left: auto;
  }
}
</style>
