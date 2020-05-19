<template>
  <div class="wrapper" :class="{ error }">
    <input
      :value="value"
      :disabled="disabled"
      :readonly="readonly"
      type="text"
    />
    <template v-if="error">
      <icon class="icon-error" name="error"></icon>
      <span class="errorMessage">{{ error }} </span>
    </div>
  </div>
</template>

<script>
import Icon from "./icon"
export default {
  name: "HInput",
  components: { Icon },
  props: {
    value: {
      type: String,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    readonly: {
      type: Boolean,
      default: false,
    },
    error: {
      type: String,
      default: "",
    },
  },
}
</script>

<style lang="scss" scoped>
$height: 32px;
$border-color: #999;
$border-color-hover: #666;
$font-size: 12px;
$border-radius: 4px;
$red: #F1453D;
$box-shadow-color: rgba(0, 0, 0, 0.5);
.wrapper {
  font-size: $font-size;
  display: inline-flex;
  align-items: center;
  > :not(:last-child) {
    margin-right: .5em;
  }
  &.error {
    > input {
      border-color: #F1453D;
    }
  }
  .icon-error {
    fill: $red;
  }
  .errorMessage {
    color: $red;
  }
  > input {
    height: $height;
    border: 1px solid $border-color;
    padding: 9px;
    border-radius: $border-radius;
    font-size: inherit;
    &:hover {
      border-color: $border-color-hover;
    }
    &:focus {
      box-shadow: inset 0 1px 3px $box-shadow-color;
      outline: none;
    }
    &[disabled],
    &[readonly] {
      border-color: #bbb;
      color: #bbb;
      cursor: not-allowed;
    }
  }
}
</style>
