<template>
  <div class="collapse-item">
    <div class="title" @click="toggle">{{ title }}</div>
    <div class="content" v-if="open">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "HCollapseItem",
  props: {
    title: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      open: false,
      single: false,
    }
  },
  inject: ["eventBus"],
  mounted() {
    this.eventBus &&
      this.eventBus.$on("update:selected", (name) => {
        if (name !== this.name) {
          if (this.single) {
            this.open = false
          }
        } else {
          this.open = true
        }
      })
  },
  methods: {
    toggle() {
      if (this.open) {
        this.open = false
      } else {
        this.eventBus && this.eventBus.$emit("update:selected", this.name)
      }
    },
  },
}
</script>

<style scoped lang="scss">
$grey-color: #ddd;
$border-radius: 4px;
.collapse-item {
  > .title {
    border: 1px solid $grey-color;
    margin-top: -1px;
    margin-left: -1px;
    margin-right: -1px;
    display: flex;
    align-items: center;
    min-height: 32px;
    padding: 0 8px;
  }
  &:first-child {
    > .title {
      border-top-left-radius: $border-radius;
      border-top-right-radius: $border-radius;
    }
  }
  &:last-child {
    > .title {
      margin-bottom: -1px;
      border-bottom-left-radius: $border-radius;
      border-bottom-right-radius: $border-radius;
    }
  }
  > .content {
    padding: 8px;
  }
}
</style>
