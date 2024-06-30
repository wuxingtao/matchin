<template>
  <div>
    <el-button @click="setColums">列设置</el-button>
    <column-manager ref="columnsRef"></column-manager>
    <div style="margin: 20px 0 0 150px">
    </div>
  </div>
</template>

<script>
import ColumnManager from './component/column-manager/index.vue';
import data from './data';

const tableColumn = [
  {
    propName: 'jjCompany',
    text: '寄件公司',
    minWidth: '100',
    sortable: false,
    visible: true,
    disabled: true
  },
  {
    propName: 'sjCompany',
    text: '收件公司',
    minWidth: '100',
    sortable: false,
    visible: true
  },
  {
    propName: 'sjContactPerson',
    text: '收件人',
    minWidth: '80',
    sortable: false,
    visible: true
  },
  {
    propName: 'goods',
    text: '托寄物',
    minWidth: '100',
    sortable: false,
    visible: true
  },
  {
    propName: 'type',
    text: '是否打印',
    minWidth: '100',
    sortable: false,
    visible: true
  },
  {
    propName: 'joeoneSendTime',
    text: '寄件时间',
    minWidth: '150',
    sortable: true,
    visible: true
  },
  {
    propName: 'jjDateTime',
    text: '取货时间',
    minWidth: '150',
    sortable: true,
    visible: true
  },
  {
    propName: 'ydStatus',
    text: '运单状态',
    minWidth: '90',
    sortable: false,
    visible: true
  },
  {
    propName: 'deliveryModel',
    text: '发货模式',
    minWidth: '120',
    sortable: false,
    visible: true
  },
  // { propName: "hhDateTime", text: "货好时间", minWidth: "100" },
  {propName: 'sjAddress', text: '收件地址', minWidth: '120'},
  {propName: 'sjMobile', text: '收件手机', minWidth: '110'},
  {propName: 'sjTelephone', text: '收件电话', minWidth: '100'},
  {propName: 'weight', text: '重量(kg)', minWidth: '80'},
  {propName: 'count', text: '件数', minWidth: '80'},
  {propName: 'serviceWay', text: '服务方式', minWidth: '80'},
  {propName: 'payWay', text: '付款方式', minWidth: '100'},
  {propName: 'payAccount', text: '月结卡号', minWidth: '100'},
  {propName: 'jjRemark', text: '寄件备注', minWidth: '100'},
  {propName: 'jjContactPerson', text: '寄件人', minWidth: '80'},
  {propName: 'sms', text: '寄件手机', minWidth: '110'},
  {propName: 'jjTelephone', text: '寄件电话', minWidth: '100'},
  {propName: 'receiver', text: '签收人', minWidth: '80'},
  {propName: 'receiveDate', text: '签收时间', minWidth: '100'}
  // { propName: "printTimes", text: "打印次数", minWidth: "80" }
  // { propName: 'receiptFlag', text: '回单服务', minWidth: '100'},
  // { propName: 'hdCount', text: '回单份数', minWidth: '80'},
  // { propName: 'money', text: '声明价值', minWidth: '80'},
  // { propName: 'dsMoney', text: '代收货款', minWidth: '80'},
  // { propName: 'mjWay', text: '包装服务', minWidth: '80'},
];

export default {
  name: 'table-list',
  props: {},
  data() {
    return {
      tableColumn,
      tableData: data.tableData,
      columns: data.tableColumns
    };
  },
  components: {
    ColumnManager
  },
  methods:{
    setColums(){
      this.$refs.columnsRef.openDialog({
        column: tableColumn
      })
    }
  }
};
</script>

<style lang="scss" scoped>

</style>
