<template>
  <div class="tabs-item" :class="classes" @click="update">
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
  computed: {
    classes () {
      return {
        active: this.active
      }
    }
  },
  created() {
    this.eventBus.$on("update:selected", (name) => {
      this.active = name === this.name
      // if (name === this.name) {
      //   this.active = true
      // } else {
      //   this.active = false
      // }
      // console.log("name:", name)
    })
  },
  methods: {
    update() {
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
  &.active {
    background: red;
  }
}
</style>
