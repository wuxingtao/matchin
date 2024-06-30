/**
 * @Desc: data 数据
 * @Author: wu xingtao
 * @Date: 2021/1/25
 */

export default {
  tableData: [
    {
      date: '2016-05-03',
      name: '王小虎',
      province: '上海',
      city: '普陀区',
      address: '上海市普陀区金沙江路 1518 弄',
      zip: 200333
    }, {
      date: '2016-05-02',
      name: '王小虎',
      province: '上海',
      city: '普陀区',
      address: '上海市普陀区金沙江路 1518 弄',
      zip: 200333
    }, {
      date: '2016-05-04',
      name: '王小虎',
      province: '上海',
      city: '普陀区',
      address: '上海市普陀区金沙江路 1518 弄',
      zip: 200333
    }, {
      date: '2016-05-01',
      name: '王小虎',
      province: '上海',
      city: '普陀区',
      address: '上海市普陀区金沙江路 1518 弄',
      zip: 200333
    }, {
      date: '2016-05-08',
      name: '王小虎',
      province: '上海',
      city: '普陀区',
      address: '上海市普陀区金沙江路 1518 弄',
      zip: 200333
    }, {
      date: '2016-05-06',
      name: '王小虎',
      province: '上海',
      city: '普陀区',
      address: '上海市普陀区金沙江路 1518 弄',
      zip: 200333
    }, {
      date: '2016-05-07',
      name: '王小虎',
      province: '上海',
      city: '普陀区',
      address: '上海市普陀区金沙江路 1518 弄',
      zip: 200333
    }],
  tableColumns: [
    // {
    //   label: '序号',
    //   slot: 'index', // 使用这个的话，必须传入paging这个参数（自用）
    //   // type:'index',  如果使用这个是element默认的序号
    //   width: 55
    // },
    {
      label: '用户名',
      prop: 'name',
      fixed: true
    },
    {
      label: '省份',
      prop: 'province'
    },
    {
      label: '市',
      prop: 'city'
    },
    {
      label: '区域',
      prop: 'address'
    },
    {
      label: '日期',
      prop: 'date'
    },
    {
      slot: 'zip',
      label: '编码',
      prop: 'zip'
    }
  ]
};
