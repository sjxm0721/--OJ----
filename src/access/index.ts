import router from "@/router";
import { useUserStore } from "@/store/modules/user";

import ACCESS_ENUM from "./accessEnum";
import checkAccess from "./checkAccess";

router.beforeEach(async (to, from, next) => {
  const userStore = useUserStore();
  let loginUser = userStore.loginUser;

  //如果之前没登陆过，实现自动登录
  if (!loginUser || !loginUser.userRole) {
    //加await 是未来等用户登录成功之后，再执行后续的代码
    await userStore.getLoginUser();
    loginUser = userStore.loginUser;
  }
  const needAccess = (to.meta?.access as string) ?? ACCESS_ENUM.NOT_LOGIN;
  //要跳转的页面需要登录
  if (needAccess !== ACCESS_ENUM.NOT_LOGIN) {
    //如果没登陆，跳转到登录页面
    if (
      !loginUser ||
      !loginUser.userRole ||
      loginUser.userRole === ACCESS_ENUM.NOT_LOGIN
    ) {
      next(`/user/login?redirect=${to.fullPath}`);
      return;
    }
    //如果已经登录了，但是权限不足跳转到无权限页面
    if (!checkAccess(loginUser, needAccess)) {
      next(`/noAuth`);
      return;
    }
  }
  next();
});
