<template>
  <app-page class="demo-iframe">
    <app-header slot="header" title="demo iframe"> </app-header>
    <app-content slot="content">
      <iframe
        class="iframe"
        src="https://muse-ui.org/#/zh-CN/alert"
        frameborder="0"
      ></iframe>
    </app-content>
  </app-page>
</template>

<script>
export default {
  name: "demoIframe",
  data() {
    return {};
  },
  computed: {},
  mounted() {},
  methods: {}
};
</script>

<style lang="scss" scoped>
@import "@/assets/css/global/vars.scss";
.demo-iframe {
  .iframe {
    width: 100%;
    height: 100%;
    min-height: calc(100vh - #{$app-header-height} - 20px);
  }
}
</style>
