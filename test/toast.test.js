const expect = chai.expect
import Vue from "vue"

import Toast from "../src/toast"

Vue.config.productionTip = false
Vue.config.devtools = false

describe("Toast", () => {
  it("存在", () => {
    console.log("haha")
    expect(Toast).to.be.exist
  })
  describe("props", () => {
    let constructor = Vue.extend(Toast)
    let vm
    afterEach(() => {
      vm.$el.remove()
      vm.$destroy()
    })
    it("接收 value", () => {
      // vm = new constructor({
      //   propsData: {
      //     value: "1234",
      //   },
      // })
      // vm.$mount()
      console.log(";value")
    })
  })
})
