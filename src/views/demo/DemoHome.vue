<template>
  <app-page class="demo-home">
    <app-header class="header" slot="header" title="demo home"> </app-header>
    <app-content class="content" slot="content">
      <mu-list>
        <mu-list-item button :ripple="false" @click="go('/demo/demoUi')">
          <mu-list-item-title>UI相关</mu-list-item-title>
        </mu-list-item>
        <mu-list-item button :ripple="false" @click="go('/demo/demoLazyload')">
          <mu-list-item-title>图片懒加载 + 预览</mu-list-item-title>
        </mu-list-item>
        <mu-list-item button :ripple="false" @click="go('/demo/demoIframe')">
          <mu-list-item-title>iframe</mu-list-item-title>
        </mu-list-item>
        <mu-list-item button :ripple="false" @click="go('/demo/demoThrottle')">
          <mu-list-item-title>事件防抖与节流</mu-list-item-title>
        </mu-list-item>
        <mu-list-item button :ripple="false" @click="go('/demo/demoStore')">
          <mu-list-item-title>刷新页面不丢失的vuex</mu-list-item-title>
        </mu-list-item>
        <mu-list-item button :ripple="false" @click="go('/demo/demoEventBus')">
          <mu-list-item-title>eventBus兄弟组件之间传值</mu-list-item-title>
        </mu-list-item>
      </mu-list>
    </app-content>
  </app-page>
</template>

<script>
export default {
  name: "demoHome",
  data() {
    return {};
  },
  computed: {},
  mounted() {},
  methods: {}
};
</script>

<style lang="scss" scoped>
.demo-home {
  .content {
    .btn-wrap {
      .btn {
        margin-right: 20px;
      }
    }
  }
}
</style>
