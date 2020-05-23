const expect = chai.expect
import Vue from "vue"
import Row from "../src/row"
import Col from "../src/col"

Vue.config.productionTip = false
Vue.config.devtools = false

describe("Row", () => {
  it("存在", () => {
    expect(Row).to.be.exist
  })
  it("接受 gutter 属性", (done) => {
    const div = document.createElement("div")
    document.body.appendChild(div)
    Vue.component("h-row", Row)
    Vue.component("h-col", Col)
    div.innerHTML = `
            <h-row gutter="20">
                <h-col span="12"></h-col>
                <h-col span="12"></h-col>
            </h-row>
        `
    const vm = new Vue({
      el: div,
    })
    setTimeout(() => {
      const row = vm.$el.querySelector(".row")
      expect(getComputedStyle(row).marginLeft).to.be.eq("-10px")
      expect(getComputedStyle(row).marginRight).to.be.eq("-10px")
      const col = vm.$el.querySelectorAll(".col")
      expect(getComputedStyle(col[0]).paddingLeft).to.be.eq("10px")
      expect(getComputedStyle(col[1]).paddingRight).to.be.eq("10px")
      done()
      vm.$el.remove()
      vm.$destory()
    }, 0)
  })
  it("接受 align 属性", (done) => {
    const div = document.createElement("div")
    document.body.appendChild(div)
    Vue.component("h-row", Row)
    div.innerHTML = `
    <h-row align="right">
    </h-row>
    `
    const vm = new Vue({
      el: div,
    })
    setTimeout(() => {
      const row = vm.$el.querySelector(".row")
      expect(getComputedStyle(row).justifyContent).to.be.eq("flex-end")
      done()
      vm.$el.remove()
      vm.$destory()
    }, 0)
  })
})
