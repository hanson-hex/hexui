<template>
  <div class="cascader">
    <div class="trigger" @click="popoverVisible = !popoverVisible">
      <slot></slot>
    </div>
    <div class="popover" v-if="popoverVisible">
      <cascader-item :items="source"></cascader-item>
    </div>
  </div>
</template>

<script>
import CascaderItem from "./cascader-item"
export default {
  name: "HCascader",
  components: {
    cascaderItem: CascaderItem,
  },
  props: {
    source: {
      type: Array,
    },
  },
  data() {
    return {
      popoverVisible: false,
      selectedItem: null,
      level2Selected: null,
    }
  },
  computed: {
    level2Items() {
      if (this.selectedItem) {
        return this.selectedItem.children
      } else {
        return []
      }
    },
    level3Items() {
      if (this.level2Selected) {
        return this.level2Selected.children
      } else {
        return []
      }
    },
  },
}
</script>

<style scoped lang="scss">
@import "var";
.cascader {
  .trigger {
    width: 100px;
    height: 32px;
    border: 1px solid red;
  }
  .popover {
    width: 400px;
    height: 200px;
    border: 1px solid red;
    display: flex;
    .level1 {
    }
    .level2 {
    }
    .level3 {
    }
    .label {
      white-space: nowrap;
    }
  }
}
</style>
