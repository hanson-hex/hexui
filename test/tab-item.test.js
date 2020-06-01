const expect = chai.expect
import Vue from "vue"
import Tabs from "../src/tabs"
import TabsItem from "../src/tabs-item"
import TabsBody from "../src/tabs-body"
import TabsHead from "../src/tabs-head"
import TabsPane from "../src/tabs-pane"

Vue.config.productionTip = false
Vue.config.devtools = false

describe("TabsItem", () => {
  it("存在", () => {
    expect(TabsItem).to.exist
  })
  it("子组件接受 name 属性", () => {
    let constructor = Vue.extend(TabsItem)
    let vm = new constructor({
      propsData: {
        name: "1234",
      },
    })
    vm.$mount()
    expect(vm.$el.getAttribute("data-name")).to.eq("1234")
  })
  it("子组件接受 disabled 属性", () => {
    let constructor = Vue.extend(TabsItem)
    let vm = new constructor({
      propsData: {
        disabled: true,
        name: "1234",
      },
    })
    vm.$mount()
    expect(vm.$el.classList.contains("disabled")).to.be.true
    const callback = sinon.fake()
    vm.$on("click", callback)
    vm.$el.click()
    expect(callback).to.have.not.been.called
  })
})
