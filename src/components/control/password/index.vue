<template>
  <div>
    <el-input v-model="val" v-bind="config" @input="handleInputEvent"></el-input>
  </div>
</template>

<script>
import { mixin, props } from '../basis'

export default {
  name: 'PassWordComponent',
  props: {
    ...props
  },
  mixins: [mixin]
}
</script>

<style scoped>

</style>
