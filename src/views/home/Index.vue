<template>
  <div class="home-index">
    <el-table
      :data="tableData"
      :border="true"
      header-row-class-name="table-head"
    >
      <el-table-column
        prop="info"
        label="服务器信息"
      ></el-table-column>
      <el-table-column
        prop="content"
        label="内容"
      ></el-table-column>
    </el-table>
    <!-- <div class="charts mt-20">
      <div class="bar-charts" id="bar-charts"></div>
      <div class="pie-charts" id="pie-charts"></div>
    </div> -->
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      tableData: []
    }
  },
  created () {
    this.$api.getSystemInfo().then(res => {
      this.tableData = res.data
    })
  },
  mounted () {
    // const barCharts = this.$echarts.init(document.getElementById('bar-charts'))
    // barCharts.setOption({
    //   title: {
    //     text: 'ECharts 入门示例'
    //   },
    //   tooltip: {},
    //   legend: {
    //     data: ['销量']
    //   },
    //   xAxis: {
    //     data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
    //   },
    //   yAxis: {},
    //   series: [{
    //     name: '销量',
    //     type: 'bar',
    //     data: [5, 20, 36, 10, 10, 20]
    //   }]
    // })
    // const pieCharts = this.$echarts.init(document.getElementById('pie-charts'))
    // pieCharts.setOption({
    //   title: {
    //     text: 'ECharts 入门示例'
    //   },
    //   tooltip: {},
    //   legend: {
    //     data: ['销量']
    //   },
    //   xAxis: {
    //     data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
    //   },
    //   yAxis: {},
    //   series: [{
    //     name: '销量',
    //     type: 'pie',
    //     data: [
    //       { name: 'A', value: 20 },
    //       { name: 'B', value: 30 },
    //       { name: 'C', value: 10 }
    //     ]
    //   }]
    // })
  }
}
</script>

<style lang="scss">
.home-index {
  padding: 20px;
}
.table-head > th {
  background: #eee;
}
.el-table, .el-table th, td {
  border-color: #ddd !important;
}
.el-table--border::after, .el-table--group::after, .el-table::before {
  background: #ddd;
}
.charts > div {
  width: 350px;
  height: 350px;
}
</style>
