<template>
  <div class="header">
    <el-tabs
      :value="tabName"
      @tab-click="handleTab"
    >
      <el-tab-pane
        v-for="(nav, idx) in navs"
        :key="idx"
        :name="nav.indexName"
        :label="nav.label"
      >{{ nav.name }}</el-tab-pane>
    </el-tabs>
    <el-popover
      placement="top-start"
      width="200"
      trigger="hover">
      <div class="cotent flex flex-row-between">
        <p class="content-left">Hi，Admin</p>
        <p class="content-right color-999 pointer" @click="handleQuite">退出</p>
      </div>
      <i slot="reference" class="el-icon-user user-logo"></i>
    </el-popover>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'

export default {
  name: 'Header',
  data () {
    return {}
  },
  computed: {
    ...mapState('navs', {
      navs: state => state.navs,
      tabName: state => state.currName
    })
  },
  watch: {
    $route: {
      handler (to) {
        // 监听路由，高亮选中项
        const firstPath = '/' + to.path.split('/')[1]
        this.setCurrName(firstPath)
      },
      immediate: true
    }
  },
  methods: {
    ...mapMutations('navs', [
      'setCurrName'
    ]),
    handleQuite () {
      this.$confirm('你是否要退出登录?', '登出提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.$message({
          type: 'success',
          message: '删除成功!'
        })
      })
    },
    handleTab (e) {
      if (e.name === this.tabName) {
        return
      }
      this.$router.push({
        path: e.name
      })
    }
  }
}
</script>

<style lang="scss">
.header {
  position: relative;
  .user-logo {
    position: absolute;
    right: 30px;
    top: 15px;
    font-size: 28px;
    z-index: 10;
  }
}
.el-tabs {
  padding-top: 64px;
  &__header {
    width: 100%;
    z-index: 9;
    top: 0;
    background: #fff;
    position: fixed !important;
  }
  &__nav-wrap {
    padding: 0 20px;
  }
  &__active-bar {
    top: 0;
  }
  &__item {
    height: 64px !important;
    line-height: 64px !important;
  }
  &__content {
    padding: 15px 20px;
    border-bottom: 1px solid #eee;
  }
}
</style>
