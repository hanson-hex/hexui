import vue from "vue"
import Button from "./button"
import Icon from "./icon"
import ButtonGroup from "./button-group"

vue.component("h-button", Button)
vue.component("h-icon", Icon)
vue.component("h-button-group", ButtonGroup)

new vue({
  el: "#app",
  data: {
    loading1: false,
    loading2: false,
    loading3: false,
  },
})

import chai from "chai"

const expect = chai.expect
// 单元测试 动态生成按钮
{
  const constructor = vue.extend(Button)
  const button = new constructor({
    propsData: {
      icon: "setting",
    },
  })
  button.$mount()
  let useElement = button.$el.querySelector("use")
  let href = useElement.getAttribute("xlink:href")
  expect(href).to.eq("#isetting")
  button.$el.remove()
  button.$destroy()
}
{
  const constructor = vue.extend(Button)
  const button = new constructor({
    propsData: {
      icon: "setting",
      loading: true,
    },
  })
  button.$mount()
  let useElement = button.$el.querySelector("use")
  let href = useElement.getAttribute("xlink:href")
  expect(href).to.eq("#iloading")
  button.$el.remove()
  button.$destroy()
}

{
  const div = document.createElement("div")
  document.body.appendChild(div)
  const constructor = vue.extend(Button)
  const button = new constructor({
    propsData: {
      icon: "setting",
      loading: true,
    },
  })
  button.$mount(div)
  let svg = button.$el.querySelector("svg")
  let { order } = window.getComputedStyle(svg)
  expect(order).to.eq("1")
  button.$el.remove()
  button.$destroy()
}

{
  const div = document.createElement("div")
  document.body.appendChild(div)
  const constructor = vue.extend(Button)
  const button = new constructor({
    propsData: {
      icon: "setting",
      loading: true,
      iconPosition: "right",
    },
  })
  button.$mount(div)
  let svg = button.$el.querySelector("svg")
  let { order } = window.getComputedStyle(svg)
  expect(order).to.eq("2")
  button.$el.remove()
  button.$destroy()
}
{
  const constructor = vue.extend(Button)
  const hButton = new constructor({
    propsData: {
      icon: "setting",
      loading: true,
      iconposition: "right",
    },
  })
  hButton.$mount()
  hButton.$on("click", function() {
    expect(1).to.eq(1)
  })
  let button = hButton.$el
  button.click()
}
