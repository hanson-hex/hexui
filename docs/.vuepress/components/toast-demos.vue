<template>
  <div style="padding-top: 16px">
    <h-button @click="$toast('点击弹出提示')">上方弹出</h-button>
    <h-button @click="$toast('点击弹出提示', { position: 'middle' })"
      >中间弹出</h-button
    >
    <h-button @click="$toast('点击弹出提示', { position: 'bottom' })"
      >下方弹出</h-button
    >
    <pre><code>{{ content }}</code></pre>
  </div>
</template>

<script>
import Button from "../../../src/button"
import plugin from "../../../src/plugin"
import Vue from "vue"
Vue.use(plugin)
export default {
  components: {
    "h-button": Button,
  },
  data() {
    return {
      content: `
      <h-button @click="$toast('点击弹出提示')">上方弹出</h-button>
      <h-button @click="$toast('点击弹出提示', { position: 'middle' })">中间弹出</h-button>
      <h-button @click="$toast('点击弹出提示', { position: 'bottom' })">下方弹出</h-button>
      `,
    }
  },
}
</script>

<style>
.toast {
  z-index: 30;
}
</style>
