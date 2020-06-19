<template>
  <div style="padding-top: 16px">
    <h-row class="demoRow">
      <h-col span="8">
        <div class="demoCol">8</div>
      </h-col>
      <h-col span="8">
        <div class="demoCol">8</div>
      </h-col>
      <h-col span="8">
        <div class="demoCol">8</div>
      </h-col>
    </h-row>
    <h-row class="demoRow">
      <h-col span="6">
        <div class="demoCol">6</div>
      </h-col>
      <h-col span="6">
        <div class="demoCol">6</div>
      </h-col>
      <h-col span="6">
        <div class="demoCol">6</div>
      </h-col>
      <h-col span="6">
        <div class="demoCol">6</div>
      </h-col>
    </h-row>
    <h-row class="demoRow">
      <h-col span="4">
        <div class="demoCol">4</div>
      </h-col>
      <h-col span="4">
        <div class="demoCol">4</div>
      </h-col>
      <h-col span="4">
        <div class="demoCol">4</div>
      </h-col>
      <h-col span="4">
        <div class="demoCol">4</div>
      </h-col>
      <h-col span="4">
        <div class="demoCol">4</div>
      </h-col>
      <h-col span="4">
        <div class="demoCol">4</div>
      </h-col>
    </h-row>
    <h-row class="demoRow">
      <h-col span="2">
        <div class="demoCol">2</div>
      </h-col>
      <h-col span="2">
        <div class="demoCol">2</div>
      </h-col>
      <h-col span="2">
        <div class="demoCol">2</div>
      </h-col>
      <h-col span="2">
        <div class="demoCol">2</div>
      </h-col>
      <h-col span="2">
        <div class="demoCol">2</div>
      </h-col>
      <h-col span="2">
        <div class="demoCol">2</div>
      </h-col>
      <h-col span="2">
        <div class="demoCol">2</div>
      </h-col>
      <h-col span="2">
        <div class="demoCol">2</div>
      </h-col>
      <h-col span="2">
        <div class="demoCol">2</div>
      </h-col>
      <h-col span="2">
        <div class="demoCol">2</div>
      </h-col>
      <h-col span="2">
        <div class="demoCol">2</div>
      </h-col>
      <h-col span="2">
        <div class="demoCol">2</div>
      </h-col>
    </h-row>
    <div>
      <pre><code>{{ content }}</code></pre>
    </div>
  </div>
</template>

<script>
import Row from "../../../src/row"
import Col from "../../../src/col"
export default {
  components: {
    "h-row": Row,
    "h-col": Col,
  },
  data() {
    return {
      content: `
      <h-row class="demoRow">
        <h-col span="8">
          <div class="demoCol">8</div>
        </h-col>
        <h-col span="8">
          <div class="demoCol">8</div>
        </h-col>
        <h-col span="8">
          <div class="demoCol">8</div>
        </h-col>
      </h-row>
      <h-row class="demoRow">
        <h-col span="6">
          <div class="demoCol">6</div>
        </h-col>
        <h-col span="6">
          <div class="demoCol">6</div>
        </h-col>
        <h-col span="6">
          <div class="demoCol">6</div>
        </h-col>
        <h-col span="6">
          <div class="demoCol">6</div>
        </h-col>
      </h-row>
      <h-row class="demoRow">
        <h-col span="4">
          <div class="demoCol">4</div>
        </h-col>
        <h-col span="4">
          <div class="demoCol">4</div>
        </h-col>
        <h-col span="4">
          <div class="demoCol">4</div>
        </h-col>
        <h-col span="4">
          <div class="demoCol">4</div>
        </h-col>
        <h-col span="4">
          <div class="demoCol">4</div>
        </h-col>
        <h-col span="4">
          <div class="demoCol">4</div>
        </h-col>
      </h-row>
      <h-row class="demoRow">
        <h-col span="2">
          <div class="demoCol">2</div>
        </h-col>
        <h-col span="2">
          <div class="demoCol">2</div>
        </h-col>
        <h-col span="2">
          <div class="demoCol">2</div>
        </h-col>
        <h-col span="2">
          <div class="demoCol">2</div>
        </h-col>
        <h-col span="2">
          <div class="demoCol">2</div>
        </h-col>
        <h-col span="2">
          <div class="demoCol">2</div>
        </h-col>
        <h-col span="2">
          <div class="demoCol">2</div>
        </h-col>
        <h-col span="2">
          <div class="demoCol">2</div>
        </h-col>
        <h-col span="2">
          <div class="demoCol">2</div>
        </h-col>
        <h-col span="2">
          <div class="demoCol">2</div>
        </h-col>
        <h-col span="2">
          <div class="demoCol">2</div>
        </h-col>
        <h-col span="2">
          <div class="demoCol">2</div>
        </h-col>
      </h-row>
      `,
    }
  },
}
</script>

<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.demoRow {
  margin: 10px 0;
}
.demoCol {
  height: 50px;
  border: 1px solid #ccc;
  background-color: #eee;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
