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
    if (this.$children.length === 0) {
      console &&
        console.warn &&
        console.warn("tabs的子组件应该是tabs-head和tabs-body,但你没有写子组件")
    }
    this.$children.forEach((element) => {
      if (element.$options.name === "HTabsHead") {
        element.$children.forEach((item) => {
          if (
            item.name === this.selected &&
            item.$options.name === "HTabsItem"
          ) {
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
