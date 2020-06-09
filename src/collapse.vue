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
      type: Array,
      default: [],
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
    this.eventBus.$on("update:addSelected", (name) => {
      let selectedCopy
      if (this.single) {
        selectedCopy = [name]
      } else {
        selectedCopy = JSON.parse(JSON.stringify(this.selected))
        selectedCopy.push(name)
      }
      this.eventBus.$emit("update:selected", selectedCopy)
      this.$emit("update:selected", selectedCopy)
    })
    this.eventBus.$on("update:removeSelected", (name) => {
      let selectedCopy = JSON.parse(JSON.stringify(this.selected))
      console.log(name, this.selected)
      const index = this.selected.indexOf(name)
      console.log("index:", index)
      selectedCopy.splice(index, 1)
      this.eventBus.$emit("update:selected", selectedCopy)
      this.$emit("update:selected", selectedCopy)
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
