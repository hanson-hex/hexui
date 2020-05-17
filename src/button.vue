<template>
  <button class="h-button" :class="{ [`icon-${iconPosition}`]: true }">
    <h-icon :name="icon"></h-icon>
    <div class="content">
      <slot></slot>
    </div>
  </button>
</template>

<script>
export default {
  props: ["icon", "iconPosition"],
  props: {
    icon: {},
    iconPosition: {
      type: String,
      default: "left",
      validator: (value) => {
        return value === "left" || value === "right"
      },
    },
  },
}
</script>

<style lang="scss">
.h-button {
  font-size: var(--font-size);
  height: var(--button-height);
  padding: 0 0.8em; /*width*/
  font: inherit;
  vertical-align: middle;
  border: 1px solid var(--border-color);
  border-radius: var(--border-radius);
  background: var(--button-bg);
  display: inline-flex;
  justify-content: center;
  align-items: center;
  &:hover {
    border-color: var(--border-color-hover);
  }
  &:active {
    background: var(--button-active-bg);
  }
  &:focus {
    outline: none;
  }
  > .icon {
    order: 1;
    margin-right: 0.3em;
  }
  > .content {
    order: 2;
  }
}
.icon-right {
  > .icon {
    order: 2;
    margin-left: 0.3em;
    margin-right: 0;
  }
  > .content {
    order: 1;
  }
}
</style>
