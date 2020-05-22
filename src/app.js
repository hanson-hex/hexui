import Vue from "vue"
import Button from "./button"
import Icon from "./icon"
import ButtonGroup from "./button-group"
import Input from "./input"

Vue.component("h-button", Button)
Vue.component("h-icon", Icon)
Vue.component("h-button-group", ButtonGroup)
Vue.component("h-input", Input)

new Vue({
  el: "#app",
  data: {
    loading1: false,
    loading2: false,
    loading3: false,
  },
  created() {
    setTimeout(() => {
      const event = new Event("change")
      const inputElement = this.$el.querySelector("input")
      inputElement.dispatchEvent(event)
    }, 3000)
  },
  methods: {
    inputChange(e) {
      console.log("1", e.target.value)
    },
  },
})
