<template>
  <button
    @click="() => $emit('click')"
    class="h-button"
    :class="{ [`icon-${iconPosition}`]: true }"
  >
    <h-icon v-if="icon && !loading" :name="icon"></h-icon>
    <h-icon class="loading" v-if="loading" name="loading"></h-icon>
    <div class="content">
      <slot></slot>
    </div>
  </button>
</template>

<script>
import Icon from "./icon"
export default {
  name: "HButton",
  props: ["icon", "iconPosition"],
  components: {
    "h-icon": Icon,
  },
  props: {
    icon: {},
    loading: {
      type: Boolean,
      default: false,
    },
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

<style lang="scss" scoped>
@import "var";
$button-height: $button-height;
.h-button {
  font-size: $font-size;
  height: $button-height;
  padding: 0 1em; /*width*/
  vertical-align: middle;
  border: 1px solid $border-color;
  border-radius: $border-radius;
  background: $button-bg;
  display: inline-flex;
  align-items: center;
  &:hover {
    border-color: $border-color-hover;
  }
  &:active {
    background: $button-active-bg;
  }
  &:focus {
    outline: none;
  }
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
  .loading {
    animation: spin 1s infinite linear;
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
