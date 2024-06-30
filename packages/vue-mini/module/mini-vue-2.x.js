function __isNaN(a,b){
  return Number.isNaN(a) && Number.isNaN(b);
}
class miniVue{
  constructor(options = {}){
    this.$options = options;
    this.$el = typeof options.el === 'string' ? document.querySelector(options.el) : options.el;
    this.$data = options.data;
    this.$methods = options.methods;
    this.proxy(this.$data);
    // observer,拦截this.$data
    new Observer(this.$data);
    new Compiler(this);
  }
  // 代理,this.$data.xxx -> this.xxx
  proxy(data){
    Object.keys(data).forEach(key => {
      Object.defineProperty(this,key,{
        enumerable:true,
        configurable:true,
        get(){
          return data[key];
        },
        set(newValue){
          // NaN !== NaN
          if(data[key] === newValue || __isNaN(data[key],newValue))return;
          data[key] = newValue;
        }
      })
    })
  }
}

/** 收集依赖，订阅者
 * A dep is an observable that can have multiple
 * directives subscribing to it.
 * dep:Watcher
 */
class Dep {
  // static target: ?Watcher;
  static target = null
  constructor(){
    this.deps = new Set();
  }
  add(dep){
    //判断dep是否存在并且是否存在update方法,然后添加到存储的依赖数据结构中
    if(dep && dep.update)this.deps.add(dep);
  }
  notify(){
    // 发布通知无非是遍历一道dep，然后调用每一个dep的update方法，使得每一个依赖都会进行更新
    this.deps.forEach(dep => dep.update());
  }
}
// 数据响应式观察者（发布者）observer类 （不考虑数组）
class Observer {
  constructor(data){
    this.walk(data);
  }
  /**
   * Walk through all properties and convert them into
   * getter/setters. This method should only be called when
   * value type is Object.
   */
  walk(data){
    if(!data || typeof data !== 'object')return;
    // 数据的每一个属性都调用定义响应式对象的方法
    Object.keys(data).forEach(key => this.defineReactive(data,key,data[key]));
  }
  defineReactive(obj,key,value){
    // 获取当前this，以避免后续用vm的时候，this指向不对
    let vm = this;
    // 递归调用walk方法，因为对象里面还有可能是对象
    this.walk(value);
    //实例化收集依赖的类
    let dep = new Dep();
    Object.defineProperty(obj,key,{
      configurable:true,
      enumerable:true,
      get(){
        Dep.target && dep.add(Dep.target);
        return value;
      },
      set(newValue){
        if(value === newValue || __isNaN(value,newValue))return;
        value = newValue;
        vm.walk(newValue);
        // 通知Dep类
        dep.notify();
      }
    })
  }
}

// 订阅者 确保每个组件实例可以由这个类来发送视图更新以及状态流转的操作。这个类，我们把它叫做Watcher。
class Watcher {
  constructor(vm,key,cb){
    this.vm = vm;
    this.key = key;
    this.cb = cb;
    Dep.target = this;
    // 赋值触发Dep依赖收集
    this.__old = vm[key];
    // 收集完毕清空target
    Dep.target = null;
  }
  update(){
    let newValue = this.vm[this.key];
    if(this.__old === newValue || __isNaN(this.__old,newValue))return;
    this.cb(newValue);
    this.__old = newValue;
  }
}

class Compiler {
  constructor(vm){
    this.el = vm.$el;
    this.vm = vm;
    this.methods = vm.$methods;
    this.compile(vm.$el);
  }

  compile(el){
    let childNodes = el.childNodes;
    Array.from(childNodes).forEach(node => {
      if(this.isTextNode(node)){
        this.compileText(node);
      }else if(this.isElementNode(node)){
        this.compileElement(node);
      }
      if(node.childNodes && node.childNodes.length)this.compile(node)
    })
  }
  compileElement(node){
    if(node.attributes.length){
      Array.from(node.attributes).forEach(attr => {
        let attrName = attr.name;
        if(this.isDirective(attrName)){
          attrName = attrName.indexOf(":") > -1 ? attrName.substr(5) : attrName.substr(2);
          let key = attr.value;
          this.update(node,key,attrName,this.vm[key]);
        }
      })
    }
  }
  update(node,key,attrName,value){
    if(attrName === 'text'){
      node.textContent = value;
      new Watcher(this.vm,key,val => node.textContent = val);
    }else if(attrName === 'model'){
      node.value = value;
      new Watcher(this.vm,key,val => node.value = val);
      node.addEventListener('input',() => {
        this.vm[key] = node.value;
      })
    }else if(attrName === 'click'){
      node.addEventListener(attrName,this.methods[key].bind(this.vm));
    }
  }
  //{{ count }}
  compileText(node){
    let reg = /\{\{(.+?)\}\}/
    let value = node.textContent;
    if(reg.test(value)){
      let key = RegExp.$1.trim();
      node.textContent = value.replace(reg,this.vm[key]);
      new Watcher(this.vm,key,val => {
        node.textContent = val;
      })
    }
  }
  isDirective(dir){
    return dir.startsWith('v-');
  }
  isTextNode(node){
    return node.nodeType === 3;
  }
  isElementNode(node){
    return node.nodeType === 1;
  }
}
