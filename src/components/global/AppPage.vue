<template>
  <main class="app-page">
    <slot name="header"></slot>
    <slot name="content"></slot>
  </main>
</template>

<script>
export default {
  name: "appPage",
  data() {
    return {};
  }
};
</script>

<style lang="scss" scoped>
.app-page {
  background-color: $bg-color;
  /deep/ .app-content {
    margin-top: $app-header-height;
    min-height: calc(100vh - #{$app-header-height});
  }
}
</style>
