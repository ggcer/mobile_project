<template>
  <page class="demo-iframe">
    <iframe class="iframe" src="https://baidu.com" frameborder="0"></iframe>
  </page>
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
.demo-iframe {
  .iframe {
    width: 100%;
    height: 100%;
    min-height: 100vh;
  }
}
</style>
