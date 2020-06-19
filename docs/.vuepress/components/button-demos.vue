<template>
  <div>
    <h-button>默认按钮</h-button>
    <h-button icon="setting">默认按钮</h-button>
    <h-button :loading="true">默认按钮</h-button>
    <h-button :disabled="true">默认按钮</h-button>
    <pre><code>{{ content }}</code></pre>
  </div>
</template>

<script>
import Button from "../../../src/button"
export default {
  components: {
    "h-button": Button,
  },
  data() {
    return {
      content: `
      <h-button>默认按钮</h-button>
      <h-button icon="setting">默认按钮</h-button>
      <h-button :loading="true">默认按钮</h-button>
      <h-button :disabled="true">默认按钮</h-button>
      `
        .replace(/\t+ | +/g, "")
        .trim(),
    }
  },
}
</script>

<style></style>
