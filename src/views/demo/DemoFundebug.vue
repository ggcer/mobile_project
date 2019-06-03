<template>
  <app-page class="demo-fundebug">
    <app-header slot="header" title="demo fundebug"> </app-header>
    <app-content slot="content">
      <h4 class="tips">
        测试fundebug功能，生产环境触发错误后能在fundebug控制台看到错误日志<br />
        (月统计量有限，请勿反复测试)
      </h4>
      <img src="http://baidulalala.com/test.jpg" />
      <mu-button class="btn" color="error" @click="throwError">
        触发错误
      </mu-button>
    </app-content>
  </app-page>
</template>

<script>
export default {
  name: "demoFundebug",
  data() {
    return {};
  },
  computed: {},
  mounted() {},
  methods: {
    throwError() {
      throw new Error("我报错了");
    }
  }
};
</script>

<style lang="scss" scoped>
.demo-fundebug {
  .tips {
    color: red;
    margin-bottom: 10px;
  }
  /deep/ .mu-button {
    margin-right: 10px;
    margin-bottom: 10px;
  }
}
</style>
