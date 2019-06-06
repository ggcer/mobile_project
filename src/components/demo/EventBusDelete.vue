<template>
  <div class="event-bus-delete">
    <button class="btn" @click="del(1)">
      - 1
    </button>
    <button class="btn" @click="del(10)">
      - 10
    </button>
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

<style lang="scss" scoped>
.event-bus-delete {
  .btn {
    margin-right: 20px;
    margin-bottom: 10px;
    padding: 5px 10px;
    line-height: 20px;
    font-size: 12px;
    color: white;
    background: linear-gradient(to right, #ff3333, #f96);
    box-shadow: 0 0 3px 0.5px #f96;
  }
}
</style>
