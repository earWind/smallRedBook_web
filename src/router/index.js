import Vue from "vue";
import VueRouter from "vue-router";
import Layout from "@/views/layout/index.vue";

Vue.use(VueRouter);

// 固定路由
export const constantRoutes = [
  {
    path: "/login",
    component: () => import("@/views/login/Login.vue"),
    hidden: true,
  },
  {
    path: "/",
    component: Layout,
    redirect: "/home",
    children: [
      {
        path: "home",
        name: "Home",
        component: () => import("@/views/home/index.vue"),
        meta: {
          title: "首页",
          icon: "el-icon-document",
          affix: true,
        },
      },
    ],
  },
];

// 根据权限显示
export const asyncRoutes = [
  {
    path: "/bookMall",
    component: Layout,
    redirect: "/bookMall/book",
    meta: {
      title: "书城",
      icon: "el-icon-document",
    },
    children: [
      {
        path: "book",
        name: "Book",
        component: () => import("@/views/bookMall/Book.vue"),
        meta: { title: "书籍", icon: "icon", noCache: true },
      },
      {
        path: "collect",
        name: "Collect",
        component: () => import("@/views/bookMall/Collect.vue"),
        meta: { title: "收藏", icon: "icon", noCache: true },
      },
    ],
  },
  {
    path: "/noteCont",
    component: Layout,
    children: [
      {
        path: "note",
        name: "Note",
        component: () => import("@/views/note/index.vue"),
        meta: { title: "笔记", icon: "el-icon-document", noCache: true },
      },
    ],
  },
  {
    path: "/authorCont",
    component: Layout,
    children: [
      {
        path: "author",
        name: "Author",
        component: () => import("@/views/author/index"),
        meta: { title: "作者", icon: "el-icon-document", noCache: true },
      },
    ],
  },
  {
    path: "/commentCont",
    component: Layout,
    children: [
      {
        path: "comment",
        name: "Comment",
        component: () => import("@/views/comment/index.vue"),
        meta: { title: "评论", icon: "el-icon-document", noCache: true },
      },
    ],
  },
  {
    path: "/system",
    component: Layout,
    redirect: "user",
    meta: {
      title: "系统",
      icon: "el-icon-setting",
    },
    children: [
      {
        path: "user",
        name: "User",
        component: () => import("@/views/system/User.vue"),
        meta: { title: "用户", icon: "icon", noCache: true },
      },
      {
        path: "role",
        name: "Role",
        component: () => import("@/views/system/Role.vue"),
        meta: { title: "角色", icon: "icon", noCache: true },
      },
      {
        path: "power",
        name: "Power",
        component: () => import("@/views/system/Power.vue"),
        meta: { title: "权限", icon: "icon", noCache: true },
      },
    ],
  },
];

const createRouter = () => {
  return new VueRouter({
    // mode: 'history', // require service support
    scrollBehavior: () => ({
      y: 0,
    }),
    routes: constantRoutes,
  });
};

const router = createRouter();

export function resetRouter() {
  const newRouter = createRouter();
  router.matcher = newRouter.matcher; // reset router
}

export default router;
