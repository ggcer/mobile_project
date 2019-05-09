/* ------------------------------------------ user模块 ------------------------------------------ */
const user = [
  {
    name: "userInfo",
    path: "/user/userInfo",
    meta: {
      title: "用户信息"
    },
    component: () => {
      return import(
        /* webpackChunkName: "userInfo" */ "@/views/user/UserInfo.vue"
      );
    }
  }
];

export default user;
