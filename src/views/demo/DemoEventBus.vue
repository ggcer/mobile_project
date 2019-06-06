<template>
  <page class="demo-event-bus">
    <h4 class="tips">
      eventBus只适用于兄弟组件小数据的传递，如果传递数据较大，结构较复杂，请使用vuex<br />
      (本项目eventBus在组件销毁时会自动$off监听，无需手动调用$off)
    </h4>
    <event-bus-show></event-bus-show>
    <event-bus-add></event-bus-add>
    <event-bus-delete></event-bus-delete>
  </page>
</template>

<script>
import EventBusAdd from "../../components/demo/EventBusAdd";
import EventBusDelete from "../../components/demo/EventBusDelete";
import EventBusShow from "../../components/demo/EventBusShow";
export default {
  name: "demoEventBus",
  components: {
    EventBusAdd,
    EventBusDelete,
    EventBusShow
  },
  data() {
    return {};
  },
  computed: {},
  mounted() {},
  methods: {}
};
</script>

<style lang="scss" scoped>
.demo-event-bus {
  padding: 20px;
  .tips {
    font-weight: normal;
    font-size: 13px;
    margin-bottom: 10px;
  }
  /deep/ .mu-button {
    margin-right: 10px;
    margin-bottom: 10px;
  }
}
</style>
