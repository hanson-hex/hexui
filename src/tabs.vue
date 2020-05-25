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
  created() {
    console.log("this.eventVus", this.eventBus)
  },
  mounted() {
    this.eventBus.$emit("update:selected", this.selected)
  },
}
</script>

<style lang="scss" scoped>
.tabs {
}
</style>
