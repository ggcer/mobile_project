<template>
  <mu-container class="app-content">
    <slot></slot>
  </mu-container>
</template>

<script>
export default {
  name: "appContent",
  data() {
    return {};
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/css/global/vars.scss";
.app-content {
  padding: 10px;
}
</style>
