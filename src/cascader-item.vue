<template>
  <div class="cascader-item">
    <div class="left">
      <div class="label" v-for="item in items" @click="selectedItem = item">
        {{ item.name }}
      </div>
    </div>
    <div class="right" v-if="rightItems">
      <cascader-item :items="rightItems"></cascader-item>
    </div>
  </div>
</template>

<script>
export default {
  name: "cascaderItem",
  props: {
    items: {
      type: Array,
    },
  },
  data() {
    return {
      selectedItem: null,
    }
  },
  computed: {
    rightItems() {
      if (this.selectedItem && this.selectedItem.children) {
        return this.selectedItem.children
      } else {
        return null
      }
    },
  },
}
</script>

<style scoped lang="scss">
.cascader-item {
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  .left {
    border: 1px solid red;
  }
  .right {
    margin-top: -1px;
  }
}
</style>
