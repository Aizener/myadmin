<template>
  <div class="record">
    <Wrapper>
      <template v-slot:top>
        <div class="list-top flex flex-col-center">
          <el-date-picker
            v-model="value"
            type="daterange"
            align="right"
            unlink-panels
            range-separator="--"
            start-placeholder="开始日期"
            end-placeholder="结束日期"
            :picker-options="pickerOptions">
          </el-date-picker>
          <el-input
            placeholder="搜索..."
            class="record__input ml-20 mr-20"
          ></el-input>
          <el-button type="primary">搜索</el-button>
        </div>
      </template>
      <template v-slot:default>
        <el-table
          :data="tableData"
        >
          <el-table-column
            prop="name"
            label="用户名"
          ></el-table-column>
          <el-table-column
            prop="type"
            label="操作角色"
          ></el-table-column>
          <el-table-column
            prop="operate"
            label="操作详情"
          ></el-table-column>
          <el-table-column
            prop="path"
            label="操作路径"
          ></el-table-column>
          <el-table-column
            prop="date"
            label="操作时间"
          ></el-table-column>
        </el-table>
      </template>
      <template v-slot:bottom>
        <el-pagination
          background
          layout="total, sizes, prev, pager, next, jumper"
          :total="1000"
          class="flex flex-row-center flex-col-center pagin"
        >
        </el-pagination>
      </template>
    </Wrapper>
  </div>
</template>

<script>
import Wrapper from '@/components/Wrapper'

export default {
  name: 'SystemRecord',
  data () {
    return {
      value: '',
      pickerOptions: {
        shortcuts: [{
          text: '最近一周',
          onClick (picker) {
            const end = new Date()
            const start = new Date()
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 7)
            picker.$emit('pick', [start, end])
          }
        }, {
          text: '最近一个月',
          onClick (picker) {
            const end = new Date()
            const start = new Date()
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 30)
            picker.$emit('pick', [start, end])
          }
        }, {
          text: '最近三个月',
          onClick (picker) {
            const end = new Date()
            const start = new Date()
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 90)
            picker.$emit('pick', [start, end])
          }
        }]
      },
      tableData: [
        { name: 'admin', type: '超级管理员', operate: '兑换礼品审核 Table:exchange_main ID:27', path: '/manage/exchange/_save_audit_info/', date: '2021-02-20 20:07' },
        { name: 'admin', type: '超级管理员', operate: '兑换礼品审核 Table:exchange_main ID:27', path: '/manage/exchange/_save_audit_info/', date: '2021-02-20 20:07' },
        { name: 'admin', type: '超级管理员', operate: '兑换礼品审核 Table:exchange_main ID:27', path: '/manage/exchange/_save_audit_info/', date: '2021-02-20 20:07' },
        { name: 'admin', type: '超级管理员', operate: '兑换礼品审核 Table:exchange_main ID:27', path: '/manage/exchange/_save_audit_info/', date: '2021-02-20 20:07' },
        { name: 'admin', type: '超级管理员', operate: '兑换礼品审核 Table:exchange_main ID:27', path: '/manage/exchange/_save_audit_info/', date: '2021-02-20 20:07' },
        { name: 'admin', type: '超级管理员', operate: '兑换礼品审核 Table:exchange_main ID:27', path: '/manage/exchange/_save_audit_info/', date: '2021-02-20 20:07' }
      ]
    }
  },
  components: {
    Wrapper
  }
}
</script>

<style lang="scss" scoped>
.record__input {
  width: 200px;
}
</style>
