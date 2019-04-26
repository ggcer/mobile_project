<template>
  <div class="picker">
    <transition name="fadeIn03">
      <div
        class="modal"
        v-show="showPicker"
        @touchmove.stop.prevent
        @click="cancel"
      ></div>
    </transition>

    <transition name="bottomToTop03">
      <div v-show="showPicker" class="picker-content">
        <header class="picker-header" @touchmove.stop.prevent>
          <a class="cancel" @click="cancel">取消</a>
          <a class="confirm" @click="confirm">确认</a>
        </header>
        <mu-slide-picker
          :slots="slots"
          :values="values"
          :visible-item-count="visibleItemCount"
          @change="pickerChange"
        ></mu-slide-picker>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: "picker",
  props: {
    // 值
    value: null,
    // slots
    dataList: {
      type: Array,
      default: function() {
        return [];
      }
    },
    // 同时显示的picker项目数，只能为奇数，偶数显示会有问题
    visibleItemCount: {
      type: Number,
      default: 5
    }
  },
  data() {
    return {
      // slots
      slots: [
        {
          width: "100%",
          textAlign: "center",
          values: []
        }
      ],
      values: [], // 选中值
      showPicker: false // 是否显示picker
    };
  },
  methods: {
    // 确认
    confirm() {
      this.showPicker = false;
      // emit 根据当前desc赋值code
      for (const item of this.dataList) {
        if (item.desc == this.values[0]) {
          this.$emit("input", item.code);
          return;
        }
      }
    },
    // 取消
    cancel() {
      this.showPicker = false;
    },
    // picker change
    pickerChange(value) {
      // 更新组件选中值
      this.values = [value];
    },
    // 初始化
    init() {
      // 拼接 desc slots
      this.dataList.forEach(item => {
        // 塞入描述
        this.slots[0].values.push(item.desc);
        // 找到code对应的desc赋值选中值
        if (item.code == this.value) {
          this.values = [item.desc];
        }
      });
    }
  },
  created() {
    // 初始化
    this.init();
  }
};
</script>

<style lang="scss" scoped>
.picker {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  z-index: 999;
  .modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.3);
  }
  .picker-content {
    position: relative;
    .picker-header {
      padding: 0 px(20);
      height: px(40);
      line-height: px(40);
      display: flex;
      justify-content: space-between;
      align-items: center;
      background-color: #eeeeee;
    }
    a {
      font-size: px(16);
    }
    .cancel {
      color: #aaaaaa;
    }
    .confirm {
      color: #2196f3;
    }
  }
}
</style>
