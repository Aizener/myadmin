<template>
  <div class="manage">
    <el-table :data="tableData" :border="true">
      <el-table-column width="100px" type="selection"></el-table-column>
      <el-table-column width="100px" prop="name" label="一级"></el-table-column>
      <el-table-column width="100px" prop="name" label="二级"></el-table-column>
      <el-table-column width="100px" prop="name" label="三级"></el-table-column>
      <el-table-column width="100px" prop="name" label="四级"></el-table-column>
      <el-table-column></el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  data () {
    return {
      tableData: [
        {
          name: '用户管理',
          checked: false,
          children: [
            { name: '用户管理', checked: false, children: [{ name: '用户认证', checked: false }, { name: '用户列表', checked: false }] },
            { name: '账号明细', checked: false, children: [{ name: '积分明细', checked: false }, { name: '余额明细', checked: false }] }
          ]
        },
        {
          name: '系统管理',
          checked: false,
          children: [
            { name: '管理员', checked: false, children: [{ name: '管理员列表', checked: false }, { name: '管理组', checked: false }] },
            { name: '控制台', checked: false, children: [{ name: '系统设置', checked: false }, { name: '操作记录', checked: false }] }
          ]
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.manage {
  padding: 20px;
}
</style>
