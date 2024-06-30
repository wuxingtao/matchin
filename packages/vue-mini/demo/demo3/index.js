const App = {
  $data:null,
  setup(){
    let count = ref(0);
    let time = reactive({ second:0 });
    let com = computed(() => `${ count.value + time.second }`);
    setInterval(() => {
      time.second++;
    },1000);
    setInterval(() => {
      count.value++;
    },2000);
    return {
      count,
      time,
      com
    }
  },
  render(){
    return `
            <h1>How reactive?</h1>
            <p>this is reactive work:${ this.$data.time.second }</p>
            <p>this is ref work:${ this.$data.count.value }</p>
            <p>this is computed work:${ this.$data.com.value  }</p>
        `
  }
}
mount(App,document.querySelector("#app"));
