<template>
  <app-page>
    <app-header slot="header" title="demo store"> </app-header>
    <app-content slot="content">
      <p>
        项目默认配置了store
        sessionStorage的缓存配置，确保刷新页面后store的数据不丢失，但是数据的更新必须通过commit触发才能存入sessionStorage
      </p>
      <br />
      <h4>{{ demoInfo.desc }}</h4>
      <ul>
        <li v-for="(item, index) of demoInfo.objList" :key="index">
          {{ item.name }} {{ item.age }}
        </li>
      </ul>
      <div class="btn-wrap">
        <mu-button class="btn" color="success" @click="push">
          添加数据
        </mu-button>
        <mu-button class="btn" color="info" @click="refresh">
          刷新页面
        </mu-button>
      </div>
    </app-content>
  </app-page>
</template>

<script>
export default {
  name: "demoStore",
  data() {
    return {
      demoInfo: this.$store.state.demo.demoInfo
    };
  },
  computed: {},
  mounted() {},
  methods: {
    push() {
      this.demoInfo.objList.push({
        name: `xiao${this.demoInfo.objList.length}`,
        age: 22
      });
      this.$store.commit("demo/setState", {
        attr: "demoInfo",
        data: this.demoInfo
      });
    },
    refresh() {
      window.location.reload();
    }
  }
};
</script>

<style lang="scss" scoped>
.btn-wrap {
  margin-top: 20px;
  .btn {
    margin-right: 20px;
  }
}
</style>
