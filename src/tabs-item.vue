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
    classes() {
      return {
        active: this.active,
      }
    },
  },
  created() {
    this.eventBus.$on("update:selected", (name) => {
      this.active = name === this.name
    })
  },
  methods: {
    update() {
      this.eventBus.$emit("update:selected", this.name, this)
    },
  },
}
</script>

<style lang="scss" scoped>
$tab-height: 40px;
$blue: blue;
.tabs-item {
  // flex-grow: 1;
  flex-shrink: 0;
  padding: 0 1em;
  cursor: pointer;
  // border: 1px solid green;
  height: $tab-height;
  display: flex;
  align-items: center;
  &.active {
    // background: red;
    color: $blue;
    font-weight: 500;
  }
}
</style>
