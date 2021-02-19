<template>
  <div class="home-index">
    <el-table
      :data="tableData"
      :border="true"
      header-row-class-name="table-head"
    >
      <el-table-column
        prop="info"
        label="服务器信息"
      ></el-table-column>
      <el-table-column
        prop="content"
        label="内容"
      ></el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      tableData: [{
        info: '服务器地址',
        content: '909.ecuca.net:10526'
      }, {
        info: '操作系统',
        content: 'Linux'
      }, {
        info: '运行环境',
        content: 'Centos OS7'
      }, {
        info: 'PHP版本',
        content: '5.6.8'
      }, {
        info: '最大上传限制',
        content: '80M'
      }, {
        info: 'ZEND版本',
        content: '2.6.0'
      }, {
        info: '最大执行时间',
        content: '600S'
      }, {
        info: '脚本运行占用最大内存',
        content: '256M'
      }]
    }
  }
}
</script>

<style lang="scss">
.home-index {
  padding: 20px;
}
.table-head > th {
  background: #eee;
}
.el-table, .el-table th, td {
  border-color: #ddd !important;
}
.el-table--border::after, .el-table--group::after, .el-table::before {
  background: #ddd;
}
</style>
