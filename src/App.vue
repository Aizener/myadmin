<template>
  <el-container class="container">
    <el-aside class="hidden-xs-only" width="220px"><Aside /></el-aside>
    <el-container>
      <el-header><Header /></el-header>
      <el-main><Main /></el-main>
      <el-footer><Footer /></el-footer>
    </el-container>
  </el-container>
</template>

<script>
import Aside from '@/views/Aside'
import Header from '@/views/Header'
import Main from '@/views/Main'
import Footer from '@/views/Footer'

export default {
  name: 'app',
  components: {
    Aside,
    Header,
    Main,
    Footer
  }
}
</script>

<style>
.el-container {
  width: 100%;
  min-height: 100vh;
  overflow: hidden;
}
.el-header {
  height: auto !important;
}
.el-main {
  padding: 0 !important;
  background-color: rgb(242, 248, 249) !important;
}
.el-header, .el-footer {
  padding-left: 0 !important;
  padding-right: 0 !important;
}
</style>
