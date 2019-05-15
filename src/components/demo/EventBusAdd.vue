<template>
  <div>
    <mu-button class="btn" color="primary" @click="add(1)">
      + 1
    </mu-button>
    <mu-button class="btn" color="primary" @click="add(10)">
      + 10
    </mu-button>
  </div>
</template>

<script>
export default {
  name: "eventBusAdd",
  data() {
    return {};
  },
  computed: {},
  mounted() {},
  methods: {
    add(addNumber) {
      this.$eventBus.$emit("demoAdd", addNumber);
    }
  }
};
</script>

<style lang="scss" scoped></style>
