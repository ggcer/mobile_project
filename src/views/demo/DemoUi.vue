<template>
  <app-page class="demo-ui">
    <app-header slot="header" title="demo-ui"> </app-header>
    <app-content slot="content">
      <section class="section">
        <h4 class="header">弹窗相关</h4>
        <mu-button class="btn" color="primary" @click="alert">
          提示框
        </mu-button>
        <mu-button class="btn" color="success" @click="confirm">
          确认框
        </mu-button>
        <mu-button class="btn" color="primary" @click="prompt">
          输入弹层
        </mu-button>
        <mu-button class="btn" color="primary" @click="go('/')">
          demo 首页
        </mu-button>
      </section>

      <section class="section">
        <h4 class="header">选择器</h4>
        <mu-button class="btn" color="primary" @click="sexPicker">
          性别选择：{{ sex | global_code("sex") }}
        </mu-button>
        <Picker v-model="sex" :dataList="sexCode" ref="sexPicker"></Picker>
      </section>
    </app-content>
  </app-page>
</template>

<script>
import Picker from "@/components/global/Picker.vue";
export default {
  name: "demoUi",
  components: {
    Picker
  },
  data() {
    return {
      sexCode: globalCode.sex,
      sex: "F"
    };
  },
  methods: {
    alert() {
      utils.ui.alert({
        title: "提示框",
        content: "这是测试的文字",
        confirm: () => {
          console.log("点了确定按钮");
        }
      });
    },
    confirm() {
      utils.ui.confirm({
        title: "确认框",
        content:
          "这是测试的文字，这是测试的文字，这是测试的文字，这是测试的文字，这是测试的文字，这是测试的文字，这是测试的文字",
        confirm: () => {
          console.log("点了确定按钮");
        },
        cancel: () => {
          console.log("点了取消按钮");
        }
      });
    },
    prompt() {
      utils.ui.prompt({
        title: "输入弹层",
        // content: "请输入您的姓名",
        inputPlaceholder: "请输入您的姓名",
        validator: value => {
          return {
            valid: /^.{1,10}$/.test(value),
            message: "姓名不能超过10个字符哦~"
          };
        },
        confirm: () => {
          console.log("点了确定按钮");
        },
        cancel: () => {
          console.log("点了取消按钮");
        }
      });
    },
    sexPicker() {
      this.$refs.sexPicker.showPicker = true;
    }
  }
};
</script>

<style lang="scss" scoped>
.demo-ui {
  .section {
    .header {
      margin-bottom: 10px;
    }
    .btn {
      margin-right: 20px;
      margin-bottom: 10px;
    }
  }
}
</style>
