<template>
  <div style="padding-top: 16px">
    <h-collapse single :selected.sync="selectedTab">
      <h-collapse-item title="名称1" name="1">内容1</h-collapse-item>
      <h-collapse-item title="名称2" name="2">内容2</h-collapse-item>
      <h-collapse-item title="名称3" name="3">内容3</h-collapse-item>
    </h-collapse>
    <pre><code>{{ content }}</code></pre>
  </div>
</template>

<script>
import Collapse from "../../../src/collapse"
import CollapseItem from "../../../src/collapse-item"
export default {
  components: {
    "h-collapse": Collapse,
    "h-collapse-item": CollapseItem,
  },
  data() {
    return {
      selectedTab: ["1", "2"],
      content: `
      <h-collapse single :selected.sync="selectedTab">
        <h-collapse-item title="名称1" name="1">内容1</h-collapse-item>
        <h-collapse-item title="名称2" name="2">内容2</h-collapse-item>
        <h-collapse-item title="名称3" name="3">内容3</h-collapse-item>
      </h-collapse>
      `
    }
  },
}
</script>

<style></style>
