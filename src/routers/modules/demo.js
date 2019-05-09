/* ------------------------------------------ demo模块 ------------------------------------------ */
const demo = [
  {
    name: "demoHome",
    path: "/",
    meta: {
      title: "demo首页"
    },
    component: () => {
      return import(
        /* webpackChunkName: "demoHome" */ "@/views/demo/DemoHome.vue"
      );
    }
  },
  {
    name: "demoForm",
    path: "/demo/demoForm",
    meta: {
      title: "form demo"
    },
    component: () => {
      return import(
        /* webpackChunkName: "demoForm" */ "@/views/demo/DemoForm.vue"
      );
    }
  },
  {
    name: "demoIframe",
    path: "/demo/demoIframe",
    meta: {
      title: "form iframe"
    },
    component: () => {
      return import(
        /* webpackChunkName: "demoIframe" */ "@/views/demo/DemoIframe.vue"
      );
    }
  },
  {
    name: "demoUi",
    path: "/demo/demoUi",
    meta: {
      title: "demo ui"
    },
    component: () => {
      return import(/* webpackChunkName: "demoUi" */ "@/views/demo/DemoUi.vue");
    }
  },
  {
    name: "demoLazyload",
    path: "/demo/demoLazyload",
    meta: {
      title: "demo lazyload"
    },
    component: () => {
      return import(
        /* webpackChunkName: "demoLazyload" */ "@/views/demo/DemoLazyload.vue"
      );
    }
  },
  {
    name: "demoStore",
    path: "/demo/demoStore",
    meta: {
      title: "demo Store"
    },
    component: () => {
      return import(
        /* webpackChunkName: "demoStore" */ "@/views/demo/DemoStore.vue"
      );
    }
  }
];

export default demo;
