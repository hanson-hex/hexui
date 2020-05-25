<template>
  <div class="tabs-body">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "HTabsBody",
  inject: ["eventBus"],
  created() {
    console.log("爷爷给body的evetBus:", this.eventBus)
  },
}
</script>

<style lang="scss" scoped>
.tabs-body {
}
</style>
