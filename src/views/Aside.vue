<template>
  <nav class="aside">
    <div class="nav-top flex flex-center">111</div>
    <el-menu
      background-color="#e4e7ea"
      text-color="#555"
      active-text-color="#fff"
      :default-active="tabActive"
      :router="true"
    >
      <div v-for="item in showTabs" :key="item.name">
        <el-submenu :index="item.index" v-if="item.children && item.children.length">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span>{{ item.name }}</span>
          </template>
          <el-menu-item
            v-for="(itemC, idxC) in item.children"
            :key="idxC"
            :index="itemC.index"
          >{{ itemC.name }}</el-menu-item>
        </el-submenu>
        <el-menu-item v-else :index="item.index">
          <i class="el-icon-menu"></i>
          <span slot="title">{{ item.name }}</span>
        </el-menu-item>
      </div>
    </el-menu>
  </nav>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Aside',
  data () {
    return {
      tabActive: '',
      defaultOpeneds: []
    }
  },
  computed: {
    ...mapGetters('aside', [
      'showTabs'
    ])
  },
  watch: {
    $route: {
      handler (to) {
        // 监听路由，高亮选中项
        let path = to.path
        const paths = path.split('/')
        if (paths.length > 3) {
          path = '/' + paths[1] + '/' + paths[2]
        }
        console.log(path)
        // 为了让/pathname和/pathname/得到一致的内容
        const endIndex = path.charAt(path.length - 1) === '/' && path.length > 1 ? path.length - 1 : path.length
        this.tabActive = '/' + path.substring(1, endIndex)
      },
      immediate: true
    }
  }
}
</script>

<style lang="scss">
.aside {
  width: 220px;
  height: 100%;
  position: fixed;
  background: #e4e7ea;
  .nav-top {
    height: 64px;
    background: #50a1ff;
  }
  .el-submenu .el-menu-item {
    background: #fff !important;
  }
  .el-menu .is-active {
    background: #868e96 !important;
  }
  .el-submenu.is-active {
    .el-submenu__title {
      background: #868e96 !important;
    }
    i, span {
      color: #fff !important;
    }
  }
  .el-submenu.is-opened.is-active {
    .el-submenu__title {
      background: #e4e7ea !important;
    }
    i, span {
      color: #555 !important;
    }
  }
}

</style>
