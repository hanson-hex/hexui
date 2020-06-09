<template>
  <div class="collapse">
    <slot></slot>
  </div>
</template>

<script>
import Vue from "vue"
export default {
  name: "HCollapse",
  props: {
    single: {
      type: Boolean,
      default: false,
    },
    selected: {
      type: String,
    },
  },
  data() {
    return {
      eventBus: new Vue(),
    }
  },
  provide() {
    return {
      eventBus: this.eventBus,
    }
  },
  mounted() {
    this.eventBus.$emit("update:selected", this.selected)
    this.eventBus.$on("update:selected", (name) => {
      this.$emit("update:selected", name)
    })
    this.$children.forEach((vm) => {
      vm.single = this.single
    })
  },
}
</script>

<style scoped lang="scss">
$grey-color: #ddd;
$border-radius: 4px;
.collapse {
  border-radius: $border-radius;
  border: 1px solid $grey-color;
}
</style>
