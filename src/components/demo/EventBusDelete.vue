<template>
  <div>
    <mu-button class="btn" color="error" @click="del(1)">
      - 1
    </mu-button>
    <mu-button class="btn" color="error" @click="del(10)">
      - 10
    </mu-button>
  </div>
</template>

<script>
export default {
  name: "eventBusDelete",
  data() {
    return {};
  },
  computed: {},
  mounted() {},
  methods: {
    del(delNumber) {
      this.$eventBus.$emit("demoDel", delNumber);
    }
  }
};
</script>

<style lang="scss" scoped></style>
