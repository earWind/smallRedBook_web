import store from "./store";
import router from "./router";
import NProgress from "nprogress"; // 页面加载进度条
import "nprogress/nprogress.css";
import { getToken } from "@/utils/auth";

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
          const { roles } = await store.dispatch("user/getInfo");

          const accessRoutes = await store.dispatch(
            "permission/generateRoutes",
            roles
          );
          router.addRoutes(accessRoutes);
          next();
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
