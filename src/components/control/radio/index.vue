<template>
  <div>
    <el-radio-group v-model="val" @change="handleInputEvent">
      <el-radio v-for="item in config.radios" :key="item.value" :label="item.value">{{ item.label }}</el-radio>
    </el-radio-group>
  </div>
</template>

<script>
import { mixin, props } from '../basis'

export default {
  name: 'RadioComponent',
  props: {
    ...props
  },
  mixins: [mixin]
}
</script>

<style scoped>

</style>
