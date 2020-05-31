<template>
  <div class="tabs">
    <slot></slot>
  </div>
</template>

<script>
import Vue from "vue"
export default {
  name: "HTabs",
  props: {
    selected: {
      type: String,
      required: true,
    },
    direction: {
      type: String,
      default: "horizontal",
      validator: (value) => {
        return ["horizontal", "vertical"].indexOf(value) >= 0
      },
    },
  },
  provide() {
    return {
      eventBus: this.eventBus,
    }
  },
  data() {
    return {
      eventBus: new Vue(),
    }
  },
  created() {},
  mounted() {
    // this.$emit("update:selected", "这时 this 出来的数据")
    this.$children.forEach((element) => {
      if (element.$options.name === "HTabsHead") {
        element.$children.forEach((item) => {
          if (item.name === this.selected) {
            this.eventBus.$emit("update:selected", this.selected, item)
          }
        })
      }
    })
  },
}
</script>

<style lang="scss" scoped>
.tabs {
}
</style>
