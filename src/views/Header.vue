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
