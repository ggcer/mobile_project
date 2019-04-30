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
.app-content {
  background-color: $bg-color;
  padding: 10px;
}
</style>
