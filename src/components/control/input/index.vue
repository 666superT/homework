<template>
  <div class="container">
    <el-input v-model.trim="val" v-bind="config" @input="handleInputEvent"></el-input>
    <el-button v-if="config.valueType==='sendCode'" :disabled="disabled" :loading="loading" round size="mini"
               type="primary" @click="handleSendCode">{{ text }}
    </el-button>
  </div>
</template>

<script>
import { mixin, props } from '@/components/control/basis'

export default {
  name: 'InputComponents',
  props: {
    ...props
  },
  mixins: [mixin],
  data () {
    return {
      text: '发送验证码',
      loading: false,
      s: 10,
      disabled: false
    }
  },
  methods: {
    // 发送验证码
    handleSendCode () {
      // console.log(this.config.sendCont)
      const beforeChange = this.config.beforeChange
      const cont = this.config.sendCont
      const regPhone = /^1[3-9]\d{9}$/
      if (!cont) {
        this.$message.error('请输入手机号码！')
        return false
      }
      console.log(regPhone.test(cont))
      if (!regPhone.test(cont)) {
        this.$message.error('手机号码格式不正确！')
        return false
      }
      if (beforeChange && Object.prototype.toString.call(beforeChange) === '[object Function]') {
        this.loading = true
        this.text = '发送中...'
        beforeChange().then(() => {
          this.disabled = true
          const timer = setInterval(() => {
            this.loading = false
            this.s--
            this.text = `倒计时${this.s}s后重新发送`
            if (this.s <= 1) {
              clearInterval(timer)
              this.disabled = false
              this.text = '重新发送'
              this.s = 10
            }
          }, 1000)
        }).catch(() => {
          this.loading = false
          this.text = '发送失败，重新发送'
        })
      }
    }
  }

}
</script>

<style lang="scss" scoped>
.container {
  position: relative;

  .el-button {
    position: absolute;
    top: 6px;
    right: 20px;
  }
}
</style>
