const expect = chai.expect
import Vue from "vue"
import Tabs from "../src/tabs"
import TabsItem from "../src/tabs-item"
import TabsBody from "../src/tabs-body"
import TabsHead from "../src/tabs-head"
import TabsPane from "../src/tabs-pane"

Vue.config.productionTip = false
Vue.config.devtools = false

describe("Tabs", () => {
  it("存在", () => {
    expect(Tabs).to.exist
  })
  it("接受 selected prop", (done) => {
    const div = document.createElement("div")
    document.body.appendChild(div)
    Vue.component("h-tabs", Tabs)
    Vue.component("h-tabs-item", TabsItem)
    Vue.component("h-tabs-body", TabsBody)
    Vue.component("h-tabs-head", TabsHead)
    Vue.component("h-tabs-pane", TabsPane)
    div.innerHTML = `
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
      </h-tabs
        `
    const vm = new Vue({
      el: div,
    })
    vm.$nextTick(() => {
      let x = vm.$el.querySelector(".tabs-item[data-name='finance']")
      expect(x.classList.contains("active")).to.be.true
      done()
    })
  })
  it("接受direction props", () => {})
})
