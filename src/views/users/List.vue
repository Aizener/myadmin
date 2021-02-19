<template>
  <div class="list">
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
            width="70px"
            prop="avatar"
            label="头像"
          >
            <template v-slot="data">
              <el-image
                class="avatar"
                :src="data.row.avatar"
                fill="cover"
              ></el-image>
            </template>
          </el-table-column>
          <el-table-column
            prop="name"
            label="姓名"
          ></el-table-column>
          <el-table-column
            width="50px"
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
            prop="registerTime"
            label="注册时间"
          ></el-table-column>
          <el-table-column
            width="180px"
            prop="status"
            label="状态"
          >
            <template v-slot="data">
              <div v-if="data.row.status === 1">
                <el-button size="mini" type="success">正常</el-button>
                <el-button size="mini">冻结</el-button>
              </div>
              <div v-else>
                <el-button size="mini" type="danger">已冻结</el-button>
                <el-button size="mini">解冻</el-button>
              </div>
            </template>
          </el-table-column>
          <el-table-column
            width="180px"
            label="操作"
          >
            <template>
              <el-button size="mini">查看</el-button>
              <el-button size="mini">编辑</el-button>
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
  name: 'UserList',
  data () {
    return {
      tableData: [
        {
          id: 1, avatar: 'https://dss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1565151725,2194396539&fm=26&gp=0.jpg', name: '张三', sex: '男', mobile: '13678398293', email: '1215627787@qq.com', registerTime: '2020-12-12 12:12:12', status: 0
        },
        {
          id: 2, avatar: 'https://dss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1565151725,2194396539&fm=26&gp=0.jpg', name: '张三张三张三张三张三张三张三张三', sex: '男', mobile: '13678398293', email: '1215627787@qq.com', registerTime: '2020-12-12 12:12:12', status: 1
        },
        {
          id: 1, avatar: 'https://dss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1565151725,2194396539&fm=26&gp=0.jpg', name: '张三', sex: '男', mobile: '13678398293', email: '1215627787@qq.com', registerTime: '2020-12-12 12:12:12', status: 0
        },
        {
          id: 2, avatar: 'https://dss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1565151725,2194396539&fm=26&gp=0.jpg', name: '张三张三张三张三张三张三张三张三', sex: '男', mobile: '13678398293', email: '1215627787@qq.com', registerTime: '2020-12-12 12:12:12', status: 1
        },
        {
          id: 1, avatar: 'https://dss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1565151725,2194396539&fm=26&gp=0.jpg', name: '张三', sex: '男', mobile: '13678398293', email: '1215627787@qq.com', registerTime: '2020-12-12 12:12:12', status: 0
        },
        {
          id: 2, avatar: 'https://dss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1565151725,2194396539&fm=26&gp=0.jpg', name: '张三张三张三张三张三张三张三张三', sex: '男', mobile: '13678398293', email: '1215627787@qq.com', registerTime: '2020-12-12 12:12:12', status: 1
        },
        {
          id: 1, avatar: 'https://dss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1565151725,2194396539&fm=26&gp=0.jpg', name: '张三', sex: '男', mobile: '13678398293', email: '1215627787@qq.com', registerTime: '2020-12-12 12:12:12', status: 0
        },
        {
          id: 2, avatar: 'https://dss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1565151725,2194396539&fm=26&gp=0.jpg', name: '张三张三张三张三张三张三张三张三', sex: '男', mobile: '13678398293', email: '1215627787@qq.com', registerTime: '2020-12-12 12:12:12', status: 1
        },
        {
          id: 1, avatar: 'https://dss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1565151725,2194396539&fm=26&gp=0.jpg', name: '张三', sex: '男', mobile: '13678398293', email: '1215627787@qq.com', registerTime: '2020-12-12 12:12:12', status: 0
        },
        {
          id: 2, avatar: 'https://dss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1565151725,2194396539&fm=26&gp=0.jpg', name: '张三张三张三张三张三张三张三张三', sex: '男', mobile: '13678398293', email: '1215627787@qq.com', registerTime: '2020-12-12 12:12:12', status: 1
        }
      ]
    }
  },
  components: {
    Wrapper
  }
}
</script>

<style lang="scss">
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

.table-head th {
  background: #eee !important;
}
.el-table, .el-table th, td {
  border-color: #ddd !important;
}

.avatar {
  width: 36px;
  height: 36px;
  border-radius: 50%;
}

.pagin {
  height: 60px;
}
</style>
