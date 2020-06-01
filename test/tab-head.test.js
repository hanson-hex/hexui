const expect = chai.expect
import Vue from "vue"
import Tabs from "../src/tabs"
import TabsItem from "../src/tabs-item"
import TabsBody from "../src/tabs-body"
import TabsHead from "../src/tabs-head"
import TabsPane from "../src/tabs-pane"

Vue.config.productionTip = false
Vue.config.devtools = false

describe("TabsHead", () => {
  it("存在", () => {
    expect(TabsHead).to.exist
  })
})
