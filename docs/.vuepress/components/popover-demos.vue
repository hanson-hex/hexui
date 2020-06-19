<template>
  <div style="padding-top: 16px">
    <h-popover>
      <h-button>上方弹出</h-button>
      <template slot="content">
        弹出内容
      </template>
    </h-popover>
    <h-popover position="bottom">
      <h-button>下方弹出</h-button>
      <template slot="content">
        弹出内容
      </template>
    </h-popover>
    <h-popover position="left">
      <h-button>左边弹出</h-button>
      <template slot="content">
        弹出内容
      </template>
    </h-popover>
    <h-popover position="right">
      <h-button>右边弹出</h-button>
      <template slot="content">
        弹出内容
      </template>
    </h-popover>
    <pre><code>{{ content }}</code></pre>
  </div>
</template>

<script>
import Popover from "../../../src/popover"
export default {
  components: {
    "h-popover": Popover,
  },
  data() {
    return {
      content: `
      <h-popover>
        <h-button>上方弹出</h-button>
        <template slot="content">
          弹出内容
        </template>
      </h-popover>
      <h-popover position="bottom">
        <h-button>下方弹出</h-button>
        <template slot="content">
          弹出内容
        </template>
      </h-popover>
      <h-popover position="left">
        <h-button>左边弹出</h-button>
        <template slot="content">
          弹出内容
        </template>
      </h-popover>
      <h-popover position="right">
        <h-button>右边弹出</h-button>
        <template slot="content">
          弹出内容
        </template>
      </h-popover>
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
