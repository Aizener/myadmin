<template>
  <div class="list">
    <Wrapper>
      <template v-slot:top>
        <div class="list-top flex flex-row-between flex-col-center">
          <p>共1条</p>
          <el-input
            class="list-top__input"
            placeholder="搜索..."
            v-model="input"
            prefix-icon="el-icon-search"
            clearable
          ></el-input>
          <el-button type="primary">添加管理员</el-button>
        </div>
      </template>
      <template v-slot:default>
        <el-table
          :data="tableData"
        >
          <el-table-column
            width="50px"
            prop="id"
            label="ID"
          ></el-table-column>
          <el-table-column
            label="头像"
          >
            <template v-slot="data">
              <el-image
                fill="cover"
                class="list-table__avatar"
                :src="data.row.avatar"
              ></el-image>
            </template>
          </el-table-column>
          <el-table-column
            label="用户名"
          >
            <template v-slot="data">
              <p>{{ data.row.name }}</p>
              <p class="color-999">{{ data.row.mobile }}</p>
            </template>
          </el-table-column>
          <el-table-column
            prop="type"
            label="管理身份"
          ></el-table-column>
          <el-table-column
            prop="lastLogin"
            label="上次登录"
          ></el-table-column>
          <el-table-column
            label="操作"
          >
            <template>
              <el-button type="primary" size="mini" icon="el-icon-edit"></el-button>
              <el-button type="danger" size="mini" icon="el-icon-delete"></el-button>
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
  name: 'List',
  data () {
    return {
      input: '',
      tableData: [
        { id: 1, avatar: 'https://dss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2550039893,2946925800&fm=111&gp=0.jpg', name: 'admin', mobile: '13678398293', type: '超级管理员', lastLogin: '2021-02-20 19:35:50' },
        { id: 2, avatar: 'https://dss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2550039893,2946925800&fm=111&gp=0.jpg', name: 'admin', mobile: '13678398293', type: '超级管理员', lastLogin: '2021-02-20 19:35:50' },
        { id: 3, avatar: 'https://dss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2550039893,2946925800&fm=111&gp=0.jpg', name: 'admin', mobile: '13678398293', type: '超级管理员', lastLogin: '2021-02-20 19:35:50' }
      ]
    }
  },
  components: {
    Wrapper
  }
}
</script>

<style lang="scss" scoped>
.list-top {
  &__input {
    width: 300px;
    & /deep/ .el-input__inner {
      border-radius: 20px !important;
    }
  }
}
.list-table__avatar {
  width: 36px;
  height: 36px;
  border-radius: 50%;
}
</style>
