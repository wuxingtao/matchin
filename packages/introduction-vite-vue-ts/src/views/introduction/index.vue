<template>
  <div>
    <p @click="switchShow">introduction</p>
    <div>
        <intro-tabs v-model="activeName" class="introduction-tabs">
          <intro-tab-pane name="first" label="第一"><div style="color:red">111 <span>first content</span></div></intro-tab-pane>
          <intro-tab-pane name="second" label="第二"><div>second content</div></intro-tab-pane>
          <intro-tab-pane name="third" label="第三"><div>third content</div></intro-tab-pane>
          <intro-tab-pane name="four" label="第四"><div>four content</div></intro-tab-pane>
        </intro-tabs>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import IntroTabs from './components/intro-tabs.vue'
import IntroTabPane from './components/intro-tab-pane.vue'

const activeName = ref('first'); // 当前选中tab-pane
const showTest = ref(false)
function switchShow (){
  showTest.value = !showTest.value
}
</script>

<style lang='scss' scoped>
.introduction-tabs{
  position: relative;
  width: 980px;
  margin: auto;
  ::v-deep {
    .intro-tabs__item{
      height: 200px;
      box-sizing: border-box;
      transition: all 0.2s ease;
      display: flex;
      .title{
        width: 50px;
        padding: 15px;
      }
      .intro-tabs__item-content{
        .intro-tab-pane{
          width: 0;
          height: 100%;
          &.pane-show{
            width: 700px;
          }
        }
      }
      &:nth-child(1){
        background-color: yellow;

      }
      &:nth-child(2){
        background-color: blue;
      }
      &:nth-child(3){
        background-color: orange;
      }
      &:nth-child(4){
        background-color: red;
      }
      &.is-active{
        //margin-right: 700px;
      }
    }
    .intro-tabs__header{
      display: flex;
    }
    .intro-tabs__content{
      position: absolute;
      top: 0;
      width: 700px;
      height: 100%;
      background: antiquewhite;
      left: 50px;
      transition: all 0.2s ease;
      .intro-tab-pane{
        height: 100%;
        &:nth-child(1){
          background-color: yellow;
        }
        &:nth-child(2){
          background-color: blue;
        }
        &:nth-child(3){
          background-color: orange;
        }
        &:nth-child(4){
          background-color: red;
        }
      }

    }
  }

}
</style>
