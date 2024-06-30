function __isNaN (a, b) {
  return Number.isNaN(a) && Number.isNaN(b)
}

class Dep {
  static target = null

  constructor () {
    this.deps = new Set()
  }

,

  add (dep) {
    if (dep && dep.update) this.deps.add(dep)
  }

  notify () {
    this.deps.forEach(dep => dep.update())
  }
}

// 观察者(发布者)
class Observe {
  constructor (data) {
    this.walk(data)
  }

  walk (data) {
    if (!data || typeof data !== 'object') return
    Object.keys(data).forEach(key => this.defineReactive(data, key, data[key]))
  }

  defineReactive (obj, key, value) {
    let vm = this
    this.walk(value)
    let dep = new Dep()
    Object.defineProperty(obj, key, {
      configurable: true,
      enumerable: true,
      get () {
        Dep.target && dep.add(Dep.target)
        return value
      },
      set (newValue) {
        if(value === newValue || __isNaN(value,newValue))return;
        value = newValue
        vm.walk(newValue)
        // 通知Dep类
        dep.notify()
      }
    })
  }
}

class Watcher {
  constructor (vm, key, cb) {
    this.vm = vm
    this.key = key
    this.cb = cb
    Dep.target = this
    this.__old = vm[key]
    Dep.target = null
  }

  update () {
    let newValue = this.vm[this.key]
    if (this.__old === newValue || __isNaN(this.__old, newValue)) return
    this.cb(newValue)
    this.__old = newValue
  }
}

var aa = new Watcher(this.vm, key, val => {

})

