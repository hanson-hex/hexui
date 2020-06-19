<template>
  <div class="tabs-body">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "HTabsBody",
  inject: ["eventBus"],
  created() {},
}
</script>

<style lang="scss" scoped></style>
