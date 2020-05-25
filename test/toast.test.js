const expect = chai.expect
import Vue from "vue"

import Toast from "../src/toast"

Vue.config.productionTip = false
Vue.config.devtools = false

describe("Input", () => {
  it("存在", () => {
    expect(Toast).to.be.exist
  })
  describe("props", () => {
    let constructor = Vue.extend(Toast)
    let vm
    afterEach(() => {
      vm.$el.remove()
      vm.$destroy()
    })
    it("接收 autoClose", (done) => {
      let div = document.createElement(div)
      document.body.appendChild(div)
      vm = new constructor({
        propsData: {
          autoClose: 1,
        },
      })
      vm.$mount(div)
      vm.$on("close", () => {
        expect(document.body.contains(vm.$el)).to.eq(false)
        done()
      })
    })
  })
  it("接受 closeButton", (done) => {
    const callback = sinon.fake()
    const Constructor = Vue.extend(Toast)
    const vm = new Constructor({
      propsData: {
        closeButton: {
          text: "知道了",
          callback,
        },
      },
    })
    vm.$mount()
    var closeButton = vm.$el.querySelector(".close")
    expect(closeButton.textContent.trim()).to.eq("知道了")
    setTimeout(() => {
      closeButton.click() // 不知道哪里来的错误
      expect(callback).to.have.been.called
      done()
    }, 200)
  })
  it("接受 enableHtml", () => {
    const Constructor = Vue.extend(Toast)
    const vm = new Constructor({
      propsData: {
        enableHtml: true,
      },
    })
    vm.$slots.default = "<strong id='test'>hi</strong>"
    vm.$mount()
    const strong = vm.$el.querySelector("#test")
    expect(strong).to.exist
  })
  it("接受 position", () => {
    const Constructor = Vue.extend(Toast)
    const vm = new Constructor({
      propsData: {
        position: "bottom",
      },
    })
    vm.$mount()
    expect(vm.$el.classList.contains("position-bottom")).to.exist
  })
})
