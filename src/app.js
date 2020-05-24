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

new Vue({
  el: "#app",
  data: {
    loading1: false,
    loading2: false,
    loading3: false,
    message: "hi",
  },
  created() {},
  methods: {
    inputChange(e) {
      console.log("1", e.target.value)
    },
    showToast() {
      this.$toast("hello")
    },
  },
})
