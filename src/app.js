import Vue from "vue"
import Button from "./button"
import Icon from "./icon"
import ButtonGroup from "./button-group"
import Input from "./input"
import Col from "./col"
import Row from "./row"
import Layout from "./layout"
import Header from "./header"
import Sider from "./Sider"
import Content from "./content"
import Footer from "./footer"
import Toast from "./toast"
import Plugin from "./plugin"
import Tabs from "./tabs"
import TabsHead from "./tabs-head"
import TabsItem from "./tabs-item"
import TabsBody from "./tabs-body"
import TabsPane from "./tabs-pane"
import Popover from "./popover"

Vue.component("h-button", Button)
Vue.component("h-icon", Icon)
Vue.component("h-button-group", ButtonGroup)
Vue.component("h-input", Input)
Vue.component("h-row", Row)
Vue.component("h-col", Col)
Vue.component("h-layout", Layout)
Vue.component("h-content", Content)
Vue.component("h-header", Header)
Vue.component("h-sider", Sider)
Vue.component("h-footer", Footer)
Vue.component("h-toast", Toast)
Vue.use(Plugin)
Vue.component("h-tabs", Tabs)
Vue.component("h-tabs-body", TabsBody)
Vue.component("h-tabs-pane", TabsPane)
Vue.component("h-tabs-head", TabsHead)
Vue.component("h-tabs-item", TabsItem)
Vue.component("h-popover", Popover)

new Vue({
  el: "#app",
  data: {
    selectedTab: "sports",
  },
  created() {},
  methods: {
    YYY(e) {
      // console.log("e:", e)
      console.log("YYY")
    },
    inputChange(e) {
      console.log("1", e.target.value)
    },
    showToast1() {
      this.$toast("hello", {
        position: "top",
      })
    },
    showToast2() {
      this.$toast("hello", {
        position: "middle",
      })
    },
    showToast3() {
      this.$toast("hello", {
        position: "bottom",
      })
    },
    showToast() {
      this.$toast("智商需要充值", {
        enableHtml: false,
        position: "bottom",
        closeButton: {
          text: "知道了",
          callback: () => {},
        },
        autoClose: 2,
      })
    },
  },
})
