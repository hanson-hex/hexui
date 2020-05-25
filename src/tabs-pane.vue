<template>
  <div class="tabs-pane">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "HTabsPane",
  inject: ["eventBus"],
  props: {
    name: {
      type: [String, Number],
      required: true,
    },
  },
  data() {
    return {
      active: false,
    }
  },
  created() {
    console.log("爷爷给pane的evetBus:", this.eventBus)
    this.eventBus.$on("update:selected", (name) => {
      console.log("name:", name)
    })
  },
}
</script>

<style lang="scss" scoped>
.tabs-pane {
}
</style>
