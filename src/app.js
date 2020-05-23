import Vue from "vue"
import Button from "./button"
import Icon from "./icon"
import ButtonGroup from "./button-group"
import Input from "./input"
import Col from "./col"
import Row from "./row"

Vue.component("h-button", Button)
Vue.component("h-icon", Icon)
Vue.component("h-button-group", ButtonGroup)
Vue.component("h-input", Input)
Vue.component("h-row", Row)
Vue.component("h-col", Col)

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
  },
})
