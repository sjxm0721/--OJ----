import { defineStore } from "pinia";
import { ref } from "vue";
import ACCESS_ENUM from "@/access/accessEnum";
import { LoginUserVO, UserControllerService } from "../../../generated";

export const useUserStore = defineStore("user", () => {
  const loginUser = ref<LoginUserVO>({
    userName: "未登录",
  });
  const userLogout = async () => {
    const res = await UserControllerService.userLogoutUsingPost();
    if (res.code === 0) {
      loginUser.value = {
        ...loginUser,
        userRole: ACCESS_ENUM.NOT_LOGIN,
      };
    }
  };
  const getLoginUser = async () => {
    //从远程请求获取登陆信息
    const res = await UserControllerService.getLoginUserUsingGet();
    if (res.code === 0) {
      loginUser.value = res.data as LoginUserVO;
    } else {
      loginUser.value = {
        ...loginUser,
        userRole: ACCESS_ENUM.NOT_LOGIN,
      };
    }
  };
  return { loginUser, getLoginUser, userLogout };
});
