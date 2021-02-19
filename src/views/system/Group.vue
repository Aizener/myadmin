<template>
  <div class="group">
    <el-table
      :data="tableData"
    >
      <el-table-column
        width="50px"
        type="selection"
      ></el-table-column>
      <el-table-column
        prop="name"
        label="名称"
      ></el-table-column>
      <el-table-column
        prop="addTime"
        label="添加时间"
      ></el-table-column>
      <el-table-column
        label="操作"
        width="300px"
      >
        <el-button size="mini">修改</el-button>
        <el-button size="mini" @click="toManagePage">权限管理</el-button>
        <el-button size="mini">停用</el-button>
        <el-button size="mini">删除</el-button>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: 'System',
  data () {
    return {
      tableData: [
        { name: '管理员', addTime: '2020-12-12 12:12:12', checked: false },
        { name: '超级管理员', addTime: '2020-12-12 12:12:12', checked: false }
      ],
      checkAll: true
    }
  },
  methods: {
    toManagePage () {
      this.$router.push({
        name: 'GroupManage'
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.group {
  padding: 20px;
}
</style>
