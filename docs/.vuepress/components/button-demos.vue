<template>
  <div style="padding-top: 16px">
    <h-button>默认按钮</h-button>
    <h-button icon="setting">默认按钮</h-button>
    <h-button :loading="true">默认按钮</h-button>
    <h-button :disabled="true">默认按钮</h-button>
    <h-button-group>
      <h-button :loading="true">默认按钮</h-button>
      <h-button :disabled="true">默认按钮</h-button>
    </h-button-group>
    <pre><code>{{ content }}</code></pre>
  </div>
</template>

<script>
import Button from "../../../src/button"
import ButtonGroup from "../../../src/button-group.vue"
export default {
  components: {
    "h-button": Button,
    "h-button-group": ButtonGroup,
  },
  data() {
    return {
      content: `
      <h-button>默认按钮</h-button>
      <h-button icon="setting">默认按钮</h-button>
      <h-button :loading="true">默认按钮</h-button>
      <h-button :disabled="true">默认按钮</h-button>
      <h-button-group>
        <h-button :loading="true">默认按钮</h-button>
        <h-button :disabled="true">默认按钮</h-button>
      </h-button-group>
      `,
    }
  },
}
</script>

<style></style>
