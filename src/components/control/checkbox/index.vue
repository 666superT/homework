<template>
  <div>
    <el-checkbox-group v-model="val" @change="handleInputEvent">
      <el-checkbox v-for="item in config.checkbox" :key="item.value" :label="item.value" name="type">{{ item.label }}
      </el-checkbox>
    </el-checkbox-group>
  </div>
</template>

<script>
import { mixin, props } from '../basis'

export default {
  name: 'CheckboxComponent',
  props: {
    ...props
  },
  mixins: [mixin]
}
</script>

<style scoped>

</style>
