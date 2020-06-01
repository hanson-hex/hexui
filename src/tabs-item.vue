<template>
  <div class="tabs-item" :class="classes" :data-name="name" @click="update">
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
        disabled: this.disabled,
      }
    },
  },
  created() {
    if (this.eventBus) {
      this.eventBus.$on("update:selected", (name) => {
        this.active = name === this.name
      })
    }
  },
  methods: {
    update() {
      if (this.disabled) return
      this.eventBus && this.eventBus.$emit("update:selected", this.name, this)
      this.$emit('click', this)
    },
  },
}
</script>

<style lang="scss" scoped>
$tab-height: 40px;
$blue: blue;
$disabled-color: grey;
.tabs-item {
  flex-shrink: 0;
  padding: 0 1em;
  cursor: pointer;
  height: $tab-height;
  display: flex;
  align-items: center;
  &.active {
    color: $blue;
    font-weight: bold;
  }
  &.disabled {
    color: $disabled-color;
    cursor: not-allowed;
  }
}
</style>
