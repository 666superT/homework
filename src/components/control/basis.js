const props = {
  value: {
    type: [String, Number, Array, Boolean],
    default: ''
  },
  config: {
    type: Object,
    default: () => ({})
  }
}

const mixin = {
  data() {
    return {
      val: ''
    }
  },
  watch: {
    value: {
      handler(newVal) {
        this.val = newVal
      },
      immediate: true
    }
  },
  methods: {
    // 同步父组件更新
    handleInputEvent() {
      this.$emit('update:value', this.val)
      // 把输入框数据传给父组件
      const callback = this.config.callback
      if (
        callback &&
        Object.prototype.toString.call(callback) === '[object Function]'
      ) {
        // console.log(this.val)
        callback(this.val)
      }
    }
  }
}

export { props, mixin }
