import Toast from "./toast"

let currentToast

function createToast({ Vue, message, propsData, onClose }) {
  let Constructor = Vue.extend(Toast)
  let toast = new Constructor({
    propsData,
  })
  toast.$slots.default = message
  toast.$mount()
  toast.$on("close", onClose)
  document.body.appendChild(toast.$el)
  return toast
}

export default {
  install(Vue, opitons) {
    Vue.prototype.$toast = function(message, toastOpitons) {
      if (currentToast) {
        currentToast.close()
      }
      currentToast = createToast({
        Vue,
        message,
        propsData: toastOpitons,
        onClose: () => {
          currentToast = null
        },
      })
    }
  },
}
