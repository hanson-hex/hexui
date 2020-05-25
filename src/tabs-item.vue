<template>
  <div class="tabs-item" @click="xxx">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "HTabsItem",
  data() {
    return {
      active: false,
    }
  },
  props: {
    disabled: {
      type: Boolean,
      default: false,
    },
    name: {
      type: [String, Number],
      required: true,
    },
  },
  inject: ["eventBus"],
  created() {
    console.log("爷爷给孙子的evetBus:", this.eventBus)
    this.eventBus.$on("update:selected", (name) => {
      if (name === this.name) {
      }
      console.log("name:", name)
    })
  },
  methods: {
    xxx() {
      this.eventBus.$emit("update:selected", this.name)
    },
  },
}
</script>

<style lang="scss" scoped>
.tabs-item {
  // flex-grow: 1;
  flex-shrink: 0;
  padding: 0 1em;
}
</style>
