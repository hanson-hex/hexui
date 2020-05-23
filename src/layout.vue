<template>
  <div class="layout" :class="layoutClass">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "HLayout",
  data() {
    return {
      layoutClass: {
        hasSider: false,
      },
    }
  },
  created() {},
  mounted() {
    this.$children.forEach((vm) => {
      if (vm.$options.name === "HSider") {
        this.layoutClass.hasSider = true
      }
    })
  },
}
</script>

<style lang="scss" scoped>
.layout {
  display: flex;
  flex-grow: 1;
  border: 1px solid red;
  flex-direction: column;
  &.hasSider {
    flex-direction: row;
  }
}
</style>
