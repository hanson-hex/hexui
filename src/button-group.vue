<template>
  <div class="h-button-group">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "HButtonGroup",
  mounted() {
    for (let node of this.$el.children) {
      if (node.nodeName.toLowerCase() !== "button") {
        console.warn(
          `button-group里面的元素必须都为h-button，里面发现了标签${node.nodeName}`
        )
      }
    }
  },
}
</script>

<style lang="scss" scoped>
.h-button-group {
  display: inline-flex;
  vertical-align: middle;
  > .h-button {
    border-radius: 0;
    &:not(:first-child) {
      //   border-left: none;
      margin-left: -1px;
    }
    &:first-child {
      border-top-left-radius: var(--border-radius);
      border-bottom-left-radius: var(--border-radius);
    }
    &:last-child {
      border-top-right-radius: var(--border-radius);
      border-bottom-right-radius: var(--border-radius);
    }
    &:hover {
      position: relative;
      z-index: 1;
    }
  }
}
</style>
