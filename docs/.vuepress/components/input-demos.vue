<template>
  <div style="padding-top: 16px">
    <h-input value="hello"></h-input>
    <h-input value="hello" disabled></h-input>
    <h-input value="hello" readonly></h-input>
    <pre><code>{{ content }}</code></pre>
  </div>
</template>

<script>
import Input from "../../../src/input"
export default {
  components: {
    "h-input": Input,
  },
  data() {
    return {
      content: `
      <h-input value="hello"></h-input> 
      <h-input value="hello" disabled></h-input> 
      <h-input value="hello" readonly></h-input> 
      `,
    }
  },
}
</script>

<style>
* {
  box-sizing: border-box;
}
</style>
