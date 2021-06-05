class MiniVueReactive {
  // Dependencias
  deps = new Map()

  constructor(options) {
    this.origen = options.data()

    const self = this

    // Destino
    this.$data = new Proxy(this.origen, {
      get(target, name) {
        const propertyFound = Reflect.has(target, name)
        self.track(target, name)

        if (propertyFound) return Reflect.get(target, name)
        else {
          console.warn('La propiedad', name, 'no existe')
          return ''
        }
      },

      set(target, name, value) {
        Reflect.set(target, name, value)
        self.trigger(name)
      }
    })
  }

  track(target, name) {
    if(!this.deps.has(name)) {
      const effect = () => {
        document.querySelectorAll(`*[mv-text=${name}]`).forEach(el => {
          this.mvText(el, target, name)
        })

        document.querySelectorAll(`*[mv-model=${name}]`).forEach(el => {
          this.mvModel(el, target, name)
        })
      }

      this.deps.set(name, effect)
    }
  }

  trigger(name) {
    const effect = this.deps.get(name)
    effect()
  }

  mount() {
    document.querySelectorAll('*[mv-text]').forEach((el) => {
      this.mvText(el, this.$data, el.getAttribute('mv-text'))
    })

    document.querySelectorAll('*[mv-model').forEach((el) => {
      const name = el.getAttribute('mv-model')

      this.mvModel(el, this.$data, name)

      el.addEventListener('input', () => {
        Reflect.set(this.$data, name, el.value)
      })
    })

    document.querySelectorAll('*[mv-bind]').forEach(el => {
      const [attr, name] = el.getAttribute('mv-bind').match(/(\w+)/g)
      this.mvBind(el, this.$data, name, attr)
    })
  }

  mvText(el, target, name) {
    el.innerText = Reflect.get(target, name)
  }

  mvModel(el, target, name) {
    el.value = Reflect.get(target, name)
  }

  mvBind(el, target, name, attr) {
    el.setAttribute(attr, Reflect.get(target, name))
  }
}

const MiniVue = {
  createApp(options) {
    return new MiniVueReactive(options)
  }
}
