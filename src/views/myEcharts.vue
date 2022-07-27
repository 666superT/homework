<template>
  <div class="echarts">
    <div ref="main" class="main"></div>
  </div>
</template>

<script>
import * as echarts from 'echarts'

export default {
  name: 'myEcharts',
  data () {
    return {
      myChart: '',
      pieData: [
        {
          name: '小明',
          value: 70
        },
        {
          name: '本帅',
          value: 10
        },
        {
          name: '小刚',
          value: 100
        },
        {
          name: '红姐',
          value: 30
        },
        {
          name: '袁家豪',
          value: 80
        }
      ],
      option: {
        title: {
          text: '饼图测试'
        },
        series: [
          {
            // data: [100, 50, 30, 30, 90],
            type: 'pie',
            data: [
              {
                name: '小明',
                value: 70
              },
              {
                name: '本帅',
                value: 10
              },
              {
                name: '小刚',
                value: 100
              },
              {
                name: '红姐',
                value: 30
              },
              {
                name: '袁家豪',
                value: 80
              }
            ],
            radius: ['50%', '90%'],
            // roseType: 'radius',
            selectedMode: 'multiple'
          }
        ]
      }
    }
  },
  mounted () {
    this.myChart = echarts.init(this.$refs.main, 'dark')
    // console.log(this.myChart)
    this.myChart.setOption(this.option)
  }
}
</script>

<style lang="scss" scoped>
.echarts {
  width: 100%;
  height: 100%;

  .main {
    width: 500px;
    height: 300px;
  }
}
</style>
