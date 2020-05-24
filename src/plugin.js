import Toast from "./toast"
export default {
  install(Vue, opitons) {
    Vue.prototype.$toast = function(message, toastOpitons) {
      let Constructor = Vue.extend(Toast)
      let toast = new Constructor({
        propsData: toastOpitons,
      })
      toast.$slots.default = message
      toast.$mount()
      document.body.appendChild(toast.$el)
    }
  },
}
