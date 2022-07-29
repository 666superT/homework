<template>
  <div>
    <el-input v-model="val" type="textarea" v-bind="config" @input="handleInputEvent"></el-input>
  </div>
</template>

<script>
import { mixin, props } from '@/components/control/basis'

export default {
  name: 'TextAreaComponent',
  props: {
    ...props
  },
  mixins: [mixin]
}
</script>

<style scoped>

</style>
