/**
 * @Desc: simple-vue
 * @Author: wu xingtao
 * @Date: 2021/7/2
 */
class Vue {
  constructor(options) {
    this.$options = options;
    this.$data = options.data || {};
    this.$el = typeof options.el === 'string' ? document.querySelector(options.el):options.el;
    this.$methods = options.methods;
    this.proxy(this.$data);
    new Observer(this.$data);
    new Compiler(this)
  }

  proxy(data) {
    Object.keys(data).forEach(key => {
      Object.defineProperty(this , key , {
        configurable: true ,
        enumerable: true ,
        get() {
          return data[key];
        } ,
        set(newValue) {
          data[key] = newValue;
        }
      });
    });
  }
}

class Dep {
  constructor() {
    this.deps = new Set();
  }

  add(dep) {
    if (dep?.update) {
      this.deps.add(dep);
    }
  }

  notify() {
    this.deps.forEach(dep => dep.update());
  }
}

class Observer {
  constructor(data) {
    this.recursion(data);
  }
  // 递归代理对象
  recursion(data) {
    if (typeof data !== 'object') {
      return;
    }
    Object.keys(data).forEach(key => {
      this.defineReactive(data , key , data[key]);
    });
  }

  defineReactive(obj , key , value) {
    let vm = this;
    this.recursion(value);
    let dep = new Dep();
    Object.defineProperty(obj , key , {
      configurable: true ,
      enumerable: true ,
      get() {
        Dep.target && dep.add(Dep.target);
        return value;
      } ,
      set(newValue) {
        value = newValue;
        vm.recursion(newValue);
        dep.notify();
      }
    });
  }
}

class Watcher {
  /**
   * @param vm 当前实例
   * @param key 指定data下的key
   * @param cb callback fn
   */
  constructor(vm , key , cb) {
    this.vm = vm;
    this.key = key;
    this.cb = cb;
    Dep.target = this
    this.__old = vm[key]
    Dep.target = null
  }
  update(){
    let newValue = this.vm[this.key]
    this.cb(newValue)
    this.__old = newValue
  }
}

class Compiler{
  constructor(vm) {
    this.vm = vm
    this.el = vm.$el
    this.methods = vm.$methods
    this.compile(vm.$el)
  }
  compile(el){
    let childNodes = el.childNodes
    Array.from(childNodes).forEach(node=>{
      if(this.isTextNode(node)){
        this.compileText(node)
      }else if(this.isElementNode(node)){
        this.compileElement(node)
      }
    })
  }
  compileText(node){
    let value = node.textContent
    let reg = /\{\{(.+?)\}\}/
    if(reg.test(value)){
      let key = RegExp.$1.trim();
      node.textContent = value.replace(reg,this.vm[key])
      new Watcher(this.vm,key,val=>{
        node.textContent = val
      })
    }
  }
  compileElement(node){
    if(node.attributes.length){
      Array.from(node.attributes).forEach(attr=>{
        let attrName = attr.name
        if(this.isDirective(attrName)){
          attrName = attrName.indexOf(':') > -1 ? attrName.substr(5) : attrName.substr(2);
          let key = attr.value
          this.updateEmit(node,key,attrName,this.vm[key])
        }
      })
    }
  }
  // 渲染指定key绑定值
  updateEmit(node,key,attrName,value){
    if(attrName === 'text'){
      node.textContent = value
      new Watcher(this.vm,key,val=>node.textContent = val)
    }else if(attrName === 'model'){
      node.value = value
      new Watcher(this.vm,key,val=>node.value=val)
      node.addEventListener('input',()=>{
        this.vm[key] = node.value
      })
    }else if(attrName === 'click'){
      node.addEventListener(attrName,this.methods[key].bind(this.vm))
    }
  }
  isTextNode(node){
    return node.nodeType === 3
  }
  isElementNode(node){
    return node.nodeType === 1
  }
  isDirective(dir){
    return dir.startsWith('v-')
  }
}
