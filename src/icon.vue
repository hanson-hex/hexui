<template>
  <svg class="icon h-icon">
    <use :xlink:href="`#i${name}`"></use>
  </svg>
</template>

<script>
import "./svg"
export default {
  name: "HIcon",
  props: ["name"],
}
</script>

<style lang="scss" scoped>
.h-icon {
  width: 1em;
  height: 1em;
}
</style>
