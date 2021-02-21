<template>
  <div class="manage">
    <table class="v-table" border="1" cellspacing="0">
      <thead>
        <tr>
          <td col style="width: 100px;"><el-checkbox></el-checkbox></td>
          <td>一级</td>
          <td>二级</td>
          <td>三级</td>
          <td>四级</td>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, idx) in list" :key="idx">
          <td :rowspan="item.rows" style="width: 100px;">
            <el-checkbox @change="handleCheck" v-model="item.checked"></el-checkbox>
          </td>
          <td :colspan="item.cols">{{ item.name }}</td>
        </tr>
      </tbody>
    </table>
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
      ]
    }
  },
  computed: {
    list () {
      const data = []
      this.pushData(data, this.tableData)
      return data
    }
  },
  methods: {
    getChildrenLength (item) {
      // 获取表格跨行数量
      let length = 1
      if (item.children && item.children.length) {
        item.children.forEach(_item => {
          length += this.getChildrenLength(_item)
        })
      }
      return length
    },
    pushData (data, children) {
      // 把树形对象平展开来
      children.forEach(item => {
        item.rows = this.getChildrenLength(item)
        item.cols = 4
        data.push(item)
        if (item.children && item.children.length) {
          this.pushData(data, item.children)
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.manage {
  padding: 20px;
}
.v-table {
  width: 100%;
  color: #666 !important;
  border-color: #fff;
  thead {
    background: #dee2e6;
  }
  td {
    height: 45px;
    padding-left: 10px;
    &:first-child {
      padding-left: 0;
      text-align: center;
    }
  }
}
</style>
