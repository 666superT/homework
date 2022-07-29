<template>
  <div>
    <el-select v-model="val" v-bind="config" @change="handleInputEvent">
      <el-option v-for="item in config.option" :key="item.value" v-bind="item"></el-option>
    </el-select>
  </div>
</template>

<script>
import { mixin, props } from '@/components/control/basis'

export default {
  name: 'SelectComponent',
  props: {
    ...props
  },
  mixins: [mixin]
}
</script>

<style scoped>

</style>
