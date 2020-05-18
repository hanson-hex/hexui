const expect = chai.expect
import Vue from "vue"
import Button from "../src/button"

Vue.config.productionTip = false
Vue.config.devtools = false

describe("Button", () => {
  it("存在", () => {
    expect(Button).to.exist
  })

  it("可以设置icon", () => {
    const constructor = Vue.extend(Button)
    const vm = new constructor({
      propsData: {
        icon: "setting",
      },
    })
    vm.$mount()
    let useElement = vm.$el.querySelector("use")
    let href = useElement.getAttribute("xlink:href")
    expect(href).to.eq("#isetting")
    vm.$el.remove()
    vm.$destroy()
  })
  it("可以设置loading", () => {
    const constructor = Vue.extend(Button)
    const vm = new constructor({
      propsData: {
        icon: "setting",
        loading: true,
      },
    })
    vm.$mount()
    let useElement = vm.$el.querySelector("use")
    let href = useElement.getAttribute("xlink:href")
    expect(href).to.eq("#iloading")
    vm.$el.remove()
    vm.$destroy()
  })
  it("默认的order是:", () => {
    const div = document.createElement("div")
    document.body.appendChild(div)
    const constructor = Vue.extend(Button)
    const vm = new constructor({
      propsData: {
        icon: "setting",
        loading: true,
      },
    })
    vm.$mount(div)
    let svg = vm.$el.querySelector("svg")
    let { order } = window.getComputedStyle(svg)
    expect(order).to.eq("1")
    vm.$el.remove()
    vm.$destroy()
  })
  it("设置iconPosition可以改变order", () => {
    const div = document.createElement("div")
    document.body.appendChild(div)
    const constructor = Vue.extend(Button)
    const vm = new constructor({
      propsData: {
        icon: "setting",
        loading: true,
        iconPosition: "right",
      },
    })
    vm.$mount(div)
    let svg = vm.$el.querySelector("svg")
    let { order } = window.getComputedStyle(svg)
    expect(order).to.eq("2")
    vm.$el.remove()
    vm.$destroy()
  })
  it("点击vm触发，click事件", () => {
    const constructor = Vue.extend(Button)
    const hButton = new constructor({
      propsData: {
        icon: "setting",
        loading: true,
        iconposition: "right",
      },
    })
    hButton.$mount()
    // 希望这个函数被执行
    const callback = sinon.fake()
    hButton.$on("click", callback)
    let vm = hButton.$el
    vm.click()
    expect(callback).to.have.been.called
  })
})
