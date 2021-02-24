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
        <div
          class="table-inner-wrapper"
          ref="table-inner-wrapper"
          v-loading="loading"
        >
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
              prop="truename"
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
              prop="create_time"
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
        </div>
      </template>
      <template v-slot:bottom>
        <el-pagination
          background
          layout="total, sizes, prev, pager, next, jumper"
          :total="total"
          class="flex flex-row-center flex-col-center pagin"
          @size-change="pageSizeChange"
          @current-change="currPageChange"
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
      tableData: [],
      page: 1,
      pageSize: 10,
      loading: false,
      total: 0
    }
  },
  components: {
    Wrapper
  },
  async created () {
    this.getData()
  },
  methods: {
    async getData () {
      this.loading = true
      const res = await this.$api.findUsers({ page: this.page, limit: this.pageSize })
      this.loading = false
      if (res.code === 200) {
        this.tableData = res.data.users
        this.total = res.data.total
      } else {
        this.$message({
          type: 'error',
          message: res.msg
        })
      }
    },
    scrollToTop () {
      const tableWrapper = this.$refs['table-inner-wrapper']
      // 滚动条回到顶部，在nextTick钩子后执行，保证能拿到更新后的DOM
      this.$nextTick(() => {
        tableWrapper.scrollTo({ top: 0 })
      })
    },
    pageSizeChange (pageSize) {
      this.pageSize = pageSize
      this.scrollToTop()
      this.getData()
    },
    currPageChange (page) {
      this.page = page
      this.scrollToTop()
      this.getData()
    }
  }
}
</script>

<style lang="scss" scoped>
.top {
  height: 50px;
  &__input {
    width: 220px;
    height: 35px !important;
    & /deep/ .el-input__inner {
      height: 35px !important;
    }
  }
  &__button {
    height: 35px;
    padding: 0 20px;
  }
}

.table-inner-wrapper {
  max-height: 480px;
  overflow-y: auto;
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
