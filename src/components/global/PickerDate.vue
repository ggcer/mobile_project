<template>
  <div class="picker-date"></div>
</template>

<script>
export default {
  name: "picker-date",
  props: {},
  data() {
    return {};
  },
  methods: {
    // 初始化
    init() {}
  },
  created() {
    // 初始化
    this.init();
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/css/global/functions.scss";
.picker {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  z-index: 999;
  .modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.3);
  }
  .picker-content {
    .picker-header {
      padding: 0 px(20);
      height: px(40);
      line-height: px(40);
      display: flex;
      justify-content: space-between;
      align-items: center;
      background-color: #eeeeee;
    }
    a {
      font-size: px(16);
    }
    .cancel {
      color: #aaaaaa;
    }
    .confirm {
      color: #2196f3;
    }
  }
}
</style>
