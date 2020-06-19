<template>
  <div>
    <h2>基础布局</h2>
    <h-layout style="height: 200px;">
      <h-header style="height: 50px;background-color: lightskyblue;">
        header
      </h-header>
      <h-content style="background-color: deepskyblue;">
        content
      </h-content>
      <h-footer style="height: 50px;background-color: lightskyblue;">
        footer
      </h-footer>
    </h-layout>
    <pre><code>{{ content1 }}</code></pre>
    <h2>侧边布局</h2>
    <h-layout style="height: 200px;">
      <h-header style="height: 50px;background-color: lightskyblue;">
        header
      </h-header>
      <h-layout>
        <h-sider style="width: 200px;background-color: #ddd;">
          sider
        </h-sider>
        <h-content style="background-color: deepskyblue;">
          content
        </h-content>
      </h-layout>
      <h-footer style="height: 50px;background-color: lightskyblue;">
        footer
      </h-footer>
    </h-layout>
    <pre><code>{{ content2 }}</code></pre>
  </div>
</template>

<script>
import Layout from "../../../src/layout"
import Footer from "../../../src/footer"
import Content from "../../../src/content"
import Header from "../../../src/header"
import Sider from "../../../src/sider"
export default {
  components: {
    "h-layout": Layout,
    "h-footer": Footer,
    "h-content": Content,
    "h-sider": Sider,
    "h-header": Header,
  },
  data() {
    return {
      content1: `
     <h-layout style="height: 200px;">
      <h-header style="height: 50px;background-color: lightskyblue;">
        header
      </h-header>
      <h-content style="background-color: deepskyblue;">
        content
      </h-content>
      <h-footer style="height: 50px;background-color: lightskyblue;">
        footer
      </h-footer>
    </h-layout>
      `,
      content2: `
    <h-layout style="height: 200px;">
      <h-header style="height: 50px;background-color: lightskyblue;">
        header
      </h-header>
      <h-layout>
        <h-sider style="width: 200px;background-color: #ddd;">
          sider
        </h-sider>
        <h-content style="background-color: deepskyblue;">
          content
        </h-content>
      </h-layout>
      <h-footer style="height: 50px;background-color: lightskyblue;">
        footer
      </h-footer>
    </h-layout>
      `,
    }
  },
}
</script>

<style></style>
