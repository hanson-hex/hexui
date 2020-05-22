const expect = chai.expect
import Vue from "vue"

import Input from "../src/input"

Vue.config.productionTip = false
Vue.config.devtools = false

describe("Input", () => {
  it("存在", () => {
    expect(Input).to.be.exist
  })
  describe("props", () => {
    let constructor = Vue.extend(Input)
    let vm
    afterEach(() => {
      vm.$el.remove()
      vm.$destroy()
    })
    it("接收 value", () => {
      vm = new constructor({
        propsData: {
          value: "1234",
        },
      })
      vm.$mount()
      let inputElement = vm.$el.querySelector("input")
      expect(inputElement.value).to.eq("1234")
    })
    it("接收 disabled", () => {
      vm = new constructor({
        propsData: {
          disabled: true,
        },
      })
      vm.$mount()
      const inputElement = vm.$el.querySelector("input")
      expect(inputElement.disabled).to.be.eq(true)
    })
    it("接收 readonly", () => {
      vm = new constructor({
        propsData: {
          readonly: true,
        },
      })
      vm.$mount()
      const inputElement = vm.$el.querySelector("input")
      expect(inputElement.readOnly).to.be.eq(true)
    })
    it("接收 error", () => {
      vm = new constructor({
        propsData: {
          error: "你错了",
        },
      })
      vm.$mount()
      const useElement = vm.$el.querySelector("use")
      expect(useElement.getAttribute("xlink:href")).to.be.eq("#ierror")
      const errorMessage = vm.$el.querySelector(".errorMessage")
      expect(errorMessage.innerText).to.eq("你错了")
    })
  })
  describe("事件", () => {
    let constructor = Vue.extend(Input)
    let vm
    afterEach(() => {
      vm.$el.remove()
      vm.$destroy()
    })
    it("支持 change/focus/blur/input 事件", () => {
      ;["focus", "change", "blur", "input"].forEach((eventName) => {
        vm = new constructor({}).$mount()
        const callback = sinon.fake()
        vm.$on(eventName, callback)
        const event = new Event(eventName)
        const inputElement = vm.$el.querySelector("input")
        inputElement.dispatchEvent(event)
        expect(callback).to.have.been.calledWith(event)
      })
    })
  })
})
