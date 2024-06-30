<template>
  <div>
  <a-menu style="width:250px;" mode="inline">
    <template v-for="(item,index) in menuArr">
      <a-sub-menu :key="'sub'+index">
        <span slot="title">{{item.title}}</span>

        <template v-for="(childItem,childIndex) in item.child">
          <a-menu-item :key="'item'+childIndex">
            {{childItem.title}}
          </a-menu-item>
        </template>
      </a-sub-menu>
    </template>

  </a-menu>
  <a-menu style="width:250px;" mode="inline">
    <a-sub-menu>
      <span slot="title">title</span>
      <a-menu-item key="1">
        1111
      </a-menu-item>
      <a-menu-item key="2">
        222
      </a-menu-item>
    </a-sub-menu>
  </a-menu>
  </div>
</template>

<script>
import { Menu } from 'ant-design-vue'
import 'ant-design-vue/dist/antd.min.css'
import menuArr from '@/views/MenuView/menuArr'
export default {
  name: 'MenuView',
  components: {
    'a-menu': Menu,
    'a-menu-item': Menu.Item,
    'a-sub-menu': Menu.SubMenu
  },
  data () {
    return {
      menuArr: menuArr
    }
  }
}
</script>

<style scoped>

</style>
