<template>
  <div id="app">
    <transition :name="transitionName">
      <!-- 内容注入区 -->
      <router-view class="router-view" />
    </transition>
  </div>
</template>
<script>
export default {
  name: "App",
  data() {
    return {
      transitionName: "" // 页面切换效果
    };
  },
  watch: {
    $route(val) {
      // 设置页面访问栈实现页面过渡效果
      this.setPageStack(val);
    }
  },
  methods: {
    // 设置页面访问栈
    setPageStack(route) {
      !utils.session.get("pageStack") && utils.session.set("pageStack", []);

      const pageStack = utils.session.get("pageStack");
      const VNK = route.query.VNK;
      if (pageStack.length == 0) {
        // 页面进入
        this.transitionName = "";
        pageStack.push(VNK); // 添加一条记录
      } else if (pageStack[pageStack.length - 1] == VNK) {
        // 页面刷新
        this.transitionName = "";
      } else if (
        pageStack.length > 1 &&
        pageStack[pageStack.length - 2] == VNK
      ) {
        // 返回返回
        this.transitionName = "slide-right";
        pageStack.pop(); // 删除最后一条记录
      } else {
        // 页面前进
        this.transitionName = "slide-left";
        pageStack.push(VNK); // 添加一条记录
      }
      // 更新pageStack缓存
      utils.session.set("pageStack", pageStack);
    }
  }
};
</script>
<style lang="scss">
@import "@/assets/css/global/main.scss";
</style>
<style lang="scss" scoped>
.router-view {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transition: all 0.5s ease;
}
.slide-right-enter,
.slide-left-leave-active {
  opacity: 0;
  transform: translate3d(-80%, 0, 0);
}

.slide-right-leave-active,
.slide-left-enter {
  opacity: 0;
  transform: translate3d(80%, 0, 0);
}
</style>
