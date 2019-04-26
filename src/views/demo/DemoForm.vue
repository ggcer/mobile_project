<template>
  <app-page>
    <app-header slot="header" title="demo form"> </app-header>
    <app-content slot="content">
      我是demo form
      <mu-button class="btn" color="primary" @click="go('/')">
        demo form
      </mu-button>
    </app-content>
  </app-page>
</template>

<script>
export default {
  name: "demoForm",
  data() {
    return {};
  },
  computed: {},
  mounted() {},
  methods: {
    go(path) {
      this.$router.push(path);
    }
  }
};
</script>

<style lang="scss" scoped></style>
