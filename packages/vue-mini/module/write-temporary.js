class Watcher {
  constructor (key, cb) {}
}

let uid = 0

class Dep {
  static target: ?Watcher
  id: number
  sub: Array<Watcher>

  constructor () {
    this.id = uid++
    this.subs = []
  }
  depend(){
    if(Dep.target){
      Dep.target.addDep(this)
    }
  }
  addSub (sub: Watcher) {
    this.subs.push(sub)
  }
  removeSub(sub: Watcher){
    remove(this.subs,sub)
  }
  notify(){
    const subs = this.subs.slice()
    for (let i = 0, l = subs.length; i < l; i++) {
      subs[i].update()
    }
  }
}

Dep.target = null
const taskStack = []
function pushTarget(target:?Watcher){
  targetStack.push(target)
  Dep.target = target
}

function popTarget(){
  targetStack.pop()
  Dep.target = targetStack[targetStack.length - 1]
}


export function defineReactive (
  obj: Object,
  key: string,
  val: any,
  customSetter?: ?Function,
  shallow?: boolean
) {
  const dep = new Dep()
}
