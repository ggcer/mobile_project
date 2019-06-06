<template>
  <page class="demo-throttle">
    <h4 class="tips">防抖/节流只能包含原生标签</h4>
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
  </page>
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
  padding: 20px;
  .tips {
    font-weight: normal;
    font-size: 13px;
    margin-bottom: 10px;
  }
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
