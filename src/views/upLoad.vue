<template>
  <div class="btn-box">
    <input type="file" style="display: none" @change="handleSelectFile" ref="upLoad" />
    <el-button type="primary" @click="handleSelectUpLoad">选择上传文件</el-button>
    <el-button type="warning" @click="handleUnUpLoad" :loading="loading">点击上传</el-button>
    <h1 v-if="files">文件名称：{{files.name}}</h1>
    <img v-if="imgSrc" :src="imgSrc" width="100" height="100">
  </div>
</template>

<script>
import http from '@/utils/request'
export default {
  name: 'upLoad',
  data() {
    return {
      files: '',
      imgSrc: '',
      loading: false
    }
  },
  methods: {
    // 选择文件按钮
    handleSelectUpLoad() {
      this.$refs.upLoad.click()
    },
    // 选择上传文件触发事件
    handleSelectFile(e) {
      console.log(e)
      this.files = e.target.files[0]
    },
    // 上传
    handleUnUpLoad() {
      // 要上传图片大小
      const size = this.files.size
      // 限制图片大小
      const targetSize = 1024 * 1024 * 2
      if (size > targetSize) {
        this.$message.error('图片不能超过2MB')
        return false
      }

      // 限制上传图片的类型
      // 获取上传图片的类型
      const type = this.files.type
      if (!/png|jpg|image|jpeg/i.test(type)) {
        this.$message.error('文件格式只支持png或者jpg')
        return false
      }
      this.loading = true
      const formData = new FormData()
      formData.append('file', this.files)
      formData.append('fileName', this.files.name)
      console.log(formData)
      // 发起请求
      http({ url: '/upload_single', method: 'post', headers: { 'Content-Type': 'multipart/form-data' }, data: formData }).then(res => {
        console.log(res)
        this.loading = false
        this.$message.success('上传成功')
        this.imgSrc = res.data.servicePath
      }).catch(err => {
        console.log(err)
        this.loading = false
        this.$message.error('上传失败')
      })
    }
  }
}
</script>

<style scoped>
.btn-box {
  width: 500px;
  height: 300px;
  border: 1px solid #eee;
  margin: 0 auto;
  padding-top: 50px;
}
</style>
