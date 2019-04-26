<template>
  <mu-appbar class="app-header" :color="color">
    <mu-button icon slot="left">
      <slot name="left"></slot>
    </mu-button>
    {{ title }}
    <mu-button flat slot="right">
      <slot name="right"></slot>
    </mu-button>
  </mu-appbar>
</template>

<script>
export default {
  name: "appHeader",
  props: {
    color: {
      type: String,
      default: "primary"
    },
    title: {
      type: String,
      default: ""
    }
  },
  data() {
    return {};
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/css/global/vars.scss";
.app-header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: $app-header-height;
  line-height: $app-header-height;
  /deep/ .mu-appbar-title {
    text-align: center;
    height: $app-header-height;
    line-height: $app-header-height;
    font-size: 15px;
  }
}
</style>
