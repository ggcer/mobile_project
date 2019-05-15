<template>
  <div>当前number: {{ demoNumner }}</div>
</template>

<script>
export default {
  name: "eventBusShow",
  data() {
    return {
      demoNumner: 0
    };
  },
  computed: {},
  mounted() {
    this.$eventBus.$on(
      "demoAdd",
      data => {
        console.log("demoAdd: " + data);
        this.demoNumner += data;
      },
      this
    );
    this.$eventBus.$on(
      "demoDel",
      data => {
        console.log("demoDel: " + data);
        this.demoNumner -= data;
      },
      this
    );
  },
  methods: {}
};
</script>

<style lang="scss" scoped></style>
