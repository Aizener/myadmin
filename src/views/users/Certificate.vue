<template>
  <div class="certificate">
    <Wrapper>
      <template v-slot:top>
        <div class="top flex flex-col-center">
          <el-input placeholder="用户名/手机号/邮箱" class="top__input mr-10"></el-input>
          <el-button class="top__button" type="primary">搜索</el-button>
        </div>
      </template>
      <template v-slot:default>
        <el-table
          :data="tableData"
          header-row-class-name="table-head"
        >
          <el-table-column
            width="50px"
            prop="id"
            label="ID"
          ></el-table-column>
          <el-table-column
            width="100px"
            prop="name"
            label="姓名"
          ></el-table-column>
          <el-table-column
            width="80px"
            prop="sex"
            label="性别"
          ></el-table-column>
          <el-table-column
            width="120px"
            prop="mobile"
            label="手机号"
          ></el-table-column>
          <el-table-column
            prop="email"
            label="邮箱"
          ></el-table-column>
          <el-table-column
            prop="applyTime"
            label="申请时间"
          ></el-table-column>
          <el-table-column
            prop="status"
            label="状态"
          >
            <template v-slot="data">
              <span :style="getColor(data.row.status)">{{ getText(data.row.status) }}</span>
            </template>
          </el-table-column>
          <el-table-column
            width="180px"
            label="操作"
          >
            <template>
              <el-button size="mini">查看</el-button>
            </template>
          </el-table-column>
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
  data () {
    return {
      tableData: [
        { id: 1, name: '张三', sex: '男', mobile: '13678398293', email: '1215627787@qq.com', applyTime: '2020-12-12 12:12:12', status: 0 },
        { id: 1, name: '张三', sex: '男', mobile: '13678398293', email: '1215627787@qq.com', applyTime: '2020-12-12 12:12:12', status: 1 },
        { id: 1, name: '张三', sex: '男', mobile: '13678398293', email: '1215627787@qq.com', applyTime: '2020-12-12 12:12:12', status: 2 },
        { id: 1, name: '张三', sex: '男', mobile: '13678398293', email: '1215627787@qq.com', applyTime: '2020-12-12 12:12:12', status: 3 },
        { id: 1, name: '张三', sex: '男', mobile: '13678398293', email: '1215627787@qq.com', applyTime: '2020-12-12 12:12:12', status: 0 },
        { id: 1, name: '张三', sex: '男', mobile: '13678398293', email: '1215627787@qq.com', applyTime: '2020-12-12 12:12:12', status: 1 },
        { id: 1, name: '张三', sex: '男', mobile: '13678398293', email: '1215627787@qq.com', applyTime: '2020-12-12 12:12:12', status: 2 },
        { id: 1, name: '张三', sex: '男', mobile: '13678398293', email: '1215627787@qq.com', applyTime: '2020-12-12 12:12:12', status: 3 },
        { id: 1, name: '张三', sex: '男', mobile: '13678398293', email: '1215627787@qq.com', applyTime: '2020-12-12 12:12:12', status: 0 },
        { id: 1, name: '张三', sex: '男', mobile: '13678398293', email: '1215627787@qq.com', applyTime: '2020-12-12 12:12:12', status: 1 }
      ]
    }
  },
  components: {
    Wrapper
  },
  methods: {
    getColor (status) {
      const colorStyle = {}
      switch (status) {
        case 0: colorStyle.color = '#909399'; break
        case 1: colorStyle.color = '#409EFF'; break
        case 2: colorStyle.color = '#F56C6C'; break
        case 3: colorStyle.color = '#67C23A'; break
      }
      return colorStyle
    },
    getText (status) {
      let text = ''
      switch (status) {
        case 0: text = '尚未激活'; break
        case 1: text = '等待审核'; break
        case 2: text = '审核失败'; break
        case 3: text = '审核成功'; break
      }
      return text
    }
  }
}
</script>

<style lang="scss" scoped>
.top {
  height: 50px;
  &__input {
    width: 220px;
    height: 35px;
    & /deep/ .el-input__inner {
      height: 35px;
    }
  }
  &__button {
    height: 35px;
    padding: 0 20px;
  }
}
</style>
