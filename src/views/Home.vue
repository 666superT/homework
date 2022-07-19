<template>
  <div class="home">
    <tt-button>默认按钮</tt-button>
    <tt-button type="primary">成功按钮</tt-button>
    <tt-button type="danger">危险按钮</tt-button>
    <tt-button type="warning">警告按钮</tt-button>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      flag: false,
    };
  },
  components: {
    TtButton: () => import("../components/button/TtButton.vue"),
  },
  methods: {
    handleSubmit() {
      this.flag = true;
      setTimeout(() => {
        console.log("123");
        this.flag = false;
      }, 3000);
    },
  },
};
</script>
