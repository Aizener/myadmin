<template>
  <div class="manage">
    <el-tree
      :data="tableData"
      :props="defaultProps"
      :show-checkbox="true"
      :indent="30"
      @check-change="handleCheckChange"
    ></el-tree>
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
            { name: '账号明细', checked: false, children: [{ name: '积分明细', checked: false, children: [{ name: '第四级', checked: false }] }, { name: '余额明细', checked: false }] }
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
      ],
      defaultProps: {
        label: 'name',
        children: 'children'
      }
    }
  },
  computed: {},
  methods: {
    handleCheckChange (e) {
      console.log(e)
    }
  }
}
</script>

<style lang="scss" scoped>
.manage {
  padding: 20px;
}
</style>
