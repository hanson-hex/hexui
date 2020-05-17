<template>
  <button class="h-button">按钮</button>
</template>

<script>
export default {}
</script>

<style lang="scss">
.h-button {
  font-size: var(--font-size);
  height: var(--button-height);
  padding: 0 1em; /*width*/
  font: inherit;
  border: 1px solid var(--border-color);
  border-radius: var(--border-radius);
  background: var(--button-bg);
  &:hover {
    border-color: var(--border-color-hover);
  }
  &:active {
    background: var(--button-active-bg);
  }
  &:focus {
    outline: none;
  }
}
</style>
