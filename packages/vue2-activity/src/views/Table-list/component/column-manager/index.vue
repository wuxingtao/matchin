<template>
  <div>
    <el-dialog :visible.sync="showDialog" custom-class="column-manage-dialog" title="自定义排序" width="1126px">
      <div class="column__body">
        <div>
          <h4 class="title">选中的字段将显示在列表上</h4>
          <el-checkbox :indeterminate="isIndeterminate"
                       v-model="checkAll"
                       @change="handleAllChange">全选
          </el-checkbox>
        </div>

        <div class="column__list">
          <el-checkbox-group v-model="checkedColumns" @change="handleChange">
            <li class="column__item" v-for="item in columnList" :key="item.text">
              <el-checkbox-button :label="item.propName" @change="(val)=>{item.visible=val}"><span>{{
                  item.text
                }}</span><span v-if="!item.disabled" class="column__item--icon">x</span>
              </el-checkbox-button>
            </li>
            <i v-for="(item,index) in columnList" :key="index"></i>
          </el-checkbox-group>
        </div>
        <!--  拖拽列表  -->
        <div class="column__drag">
          <div class="header mg_16">
            已选中<span class="theme-color fs_18 f_w_500">{{ checkedColumns.length }}</span>个字段（注：拖动以下字段，可进行从左至右排序）
          </div>
          <div class="content">
            <draggable
                v-model="checkedColumnsDrag"
                ghost-class="ghost"
                v-bind="dragOptions"
                @change="dragChange">
              <transition-group>
                <template v-for="(element,index) in checkedColumnsDrag" >
                  <div :class="['drag-item',{'drag--able':!element.disabled}]" :key="element.text">
                    <el-button class="item__btn">
                      <span class="num">{{ index + 1 }}</span>
                      <span>{{ element.text }}</span>
                      <span v-if="!element.disabled" class="delete" @click="()=>deleteItem(element.propName)">删除</span>
                    </el-button>
                  </div>
                </template>
              </transition-group>

            </draggable>

          </div>
        </div>
      </div>
      <template #footer>
    <span class="dialog-footer">
      <el-button @click="handleSubmit">取 消</el-button>
      <el-button type="primary" @click="handleSubmit">确 定</el-button>
    </span>
      </template>
    </el-dialog>
  </div>
</template>

<script>
import draggable from 'vuedraggable';

export default {
  name: 'column-manager' ,
  props: {} ,
  components: {draggable} ,
  data() {
    return {
      showDialog: false ,
      // 选中的列
      checkedColumns: [] ,
      // 选中的列对象
      checkedColumnsDrag: [] ,
      // 拖拽排序列
      dragColumns: [] ,
      // isIndeterminate: false,
      // 全部数据列
      columnList: [] ,
      columnListObj: {} ,
      dragOptions: {
        animation: 0 ,
        group: 'description' ,
        // disabled: !this.editable,
        ghostClass: 'ghost' ,
        draggable: '.drag--able'
      }
    };
  } ,
  computed: {
    isIndeterminate() {
      return this.checkedColumns.length > 0 && this.checkedColumns.length !== this.columnList.length;
    } ,
    checkAll() {
      return this.checkedColumns.length > 0 && this.checkedColumns.length === this.columnList.length;
    }
  } ,
  methods: {
    handleAllChange(val) {
      if (val) {
        this.checkedColumns = this.columnList.map((item) => {
          return item.propName;
        });
        this.checkedColumnsDrag = [...this.columnList];
      } else {
        this.checkedColumns = [];
        this.checkedColumnsDrag = [];
      }
    } ,
    /* 当个check选中 */
    handleChange(val) {
      this.checkedColumnsDrag = val.map(item => {
        return this.columnListObj[item];
      });
    } ,

    /* 初始化显示弹窗 */
    openDialog(param) {
      this.columnList = param.column;
      param.column.forEach(item => {
        if (item.propName) {
          const name = item.propName.toString();
          this.columnListObj[name] = item;
        }
      });
      this.showDialog = true;
    } ,
    /* column 列表拖拽change */
    dragChange() {
      this.checkedColumns = this.checkedColumnsDrag.map((item) => {
        return item.propName;
      });
    } ,
    /* 删除指定字段 */
    deleteItem(propName) {
      for (let i = 0; i < this.checkedColumnsDrag.length; i++) {
        if (this.checkedColumnsDrag[i].propName === propName) {
          this.checkedColumnsDrag.splice(i , 1);
          break;
        }
      }
      const deleteIndex = this.checkedColumns.indexOf(propName);
      if (deleteIndex !== -1) {
        this.checkedColumns.splice(deleteIndex , 1);
      }
    } ,
    handleSubmit() {
      this.showDialog = false;
    }
  }
};
</script>

<style lang="scss" scoped>
@import './index';
</style>
