<template>
  <div>
    <el-col :span="11">
      <el-date-picker v-model="form.date1" placeholder="选择日期" style="width: 100%;" type="date"></el-date-picker>
    </el-col>
    <el-col :span="2" class="line">-</el-col>
    <el-col :span="11">
      <el-time-picker v-model="form.date2" placeholder="选择时间" style="width: 100%;"></el-time-picker>
    </el-col>
  </div>
</template>

<script>
import { mixin, props } from '@/components/control/basis'

export default {
  name: 'DateComponent',
  props: {
    ...props
  },
  mixins: [mixin]
}
</script>

<style scoped>

</style>
