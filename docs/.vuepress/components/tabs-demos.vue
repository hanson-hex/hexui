<template> 
  <div style="padding-top: 16px">
    <h-tabs selected="finance">
      <h-tabs-head>
        <h-tabs-item name="woman">美女</h-tabs-item>
        <h-tabs-item name="finance">财经</h-tabs-item>
        <h-tabs-item name="sports">体育</h-tabs-item>
      </h-tabs-head>
      <h-tabs-body>
        <h-tabs-pane name="woman">美女相关咨询</h-tabs-pane>
        <h-tabs-pane name="finance">财经相关咨询</h-tabs-pane>
        <h-tabs-pane name="sports">体育相关咨询</h-tabs-pane>
      </h-tabs-body>
    </h-tabs>
    <pre><code>{{ content }}</code></pre>
  </div>
</template>

<script>
import Tabs from "../../../src/tabs"
import TabsBody from "../../../src/tabs-body" 
import TabsHead from "../../../src/tabs-head"
import TabsItem from "../../../src/tabs-item" 
import TabsPane from "../../../src/tabs-pane" 
export default {
  components: {
    "h-tabs": Tabs,
    "h-tabs-body": TabsBody, 
    "h-tabs-head": TabsHead,
    "h-tabs-item": TabsItem,
    "h-tabs-pane": TabsPane
    },
  data() {
    return {
      content: `
      <h-tabs selected="finance"> 
       <h-tabs-head>
          <h-tabs-item name="woman">美女</h-tabs-item>
          <h-tabs-item name="finance">财经</h-tabs-item>
          <h-tabs-item name="sports">体育</h-tabs-item>
        </h-tabs-head>
        <h-tabs-body>
          <h-tabs-pane name="woman">美女相关咨询</h-tabs-pane>
          <h-tabs-pane name="finance">财经相关咨询</h-tabs-pane>
          <h-tabs-pane name="sports">体育相关咨询</h-tabs-pane>
        </h-tabs-body>
      </h-tabs>
      `
    }
  },
}
</script>

<style>
* {
  box-sizing: border-box;
}
</style>

