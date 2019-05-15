<template>
  <app-page class="demo-throttle">
    <app-header slot="header" title="demo throttle"> </app-header>
    <app-content slot="content">
      <h4 class="tips">防抖只能包含原生标签</h4>
      <Throttle :time="500" events="click" :isDebounce="true">
        <button @click="handlerClick" class="btn">click 防抖</button>
      </Throttle>
      <Throttle :time="500" events="click">
        <button @click="handlerClick" class="btn">click 节流</button>
      </Throttle>
      <Throttle :time="500" events="touchmove" :isDebounce="true">
        <button @touchmove="handlerTouchmove" class="btn">
          touchmove 防抖
        </button>
      </Throttle>
      <Throttle :time="500" events="touchmove">
        <button @touchmove="handlerTouchmove" class="btn">
          touchmove 节流
        </button>
      </Throttle>
    </app-content>
  </app-page>
</template>

<script>
import Throttle from "../../components/global/Throttle";

export default {
  name: "demoThrottle",
  components: {
    Throttle
  },
  data() {
    return {};
  },
  computed: {},
  mounted() {},
  methods: {
    handlerClick() {
      console.log("执行了点击处理函数");
    },
    handlerTouchmove() {
      console.log("执行了触屏处理函数");
    }
  }
};
</script>

<style lang="scss" scoped>
.demo-throttle {
  .tips {
    color: red;
    margin-bottom: 10px;
  }
  .btn {
    margin-right: 20px;
    margin-bottom: 10px;
    padding: 10px;
  }
}
</style>
