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
  created() {
    this.eventBus.$on("update:selected", (item, vm) => {
      console.log("item:", item)
      console.log("this:", vm)
    })
  },
}
</script>

<style lang="scss" scoped>
$tab-height: 40px;
$blue: blue;
.tabs-head {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  border: 1px solid red;
  position: relative;
  > .line {
    position: absolute;
    bottom: 0;
    width: 100px;
    border-bottom: 1px solid $blue;
  }
  > .actions-wrapper {
    margin-left: auto;
  }
}
</style>
