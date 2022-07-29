<template>
  <div>
    <el-switch v-model="val" @change="handleInputEvent"></el-switch>
  </div>
</template>

<script>
import { mixin, props } from '@/components/control/basis'

export default {
  name: 'SwitchComponent',
  props: {
    ...props
  },
  mixins: [mixin]
}
</script>

<style scoped>

</style>
