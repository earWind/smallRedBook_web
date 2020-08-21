import store from "./store";
import router from "./router";
import NProgress from "nprogress"; // 页面加载进度条
import "nprogress/nprogress.css";
import {
  getToken
} from "@/utils/auth";

NProgress.configure({
  showSpinner: false,
});

router.beforeEach(async (to, from, next) => {
  NProgress.start();
  const hasToken = getToken();
  // 是否登录-(登录成功过后就会有token)
  if (hasToken) {
    if (to.path === "/login") {
      next({
        path: "/",
      });
      NProgress.done();
    } else {
      const hasRoles = store.getters.roles && store.getters.roles.length > 0;
      // 是否有权限
      if (hasRoles) {
        next();
      } else {
        try {
          // 获取权限
          const {
            roles
          } = await store.dispatch("user/getInfo");
          // 过滤路由
          const accessRoutes = await store.dispatch(
            "permission/generateRoutes",
            roles
          );
          router.addRoutes(accessRoutes);
          if (to.matched.length) {
            next()
          } else {
            next({
              ...to,
              replace: true,
            }); // 路由替换(直接next的话刷新会找不到页面--为啥？)
          }
        } catch {
          next("/login");
          NProgress.done();
        }
      }
    }
  } else {
    if (to.path === "/login") {
      // 这就是跳出循环的关键
      next();
    } else {
      next("/login");
    }
    NProgress.done();
  }
});

router.afterEach(() => {
  NProgress.done();
});