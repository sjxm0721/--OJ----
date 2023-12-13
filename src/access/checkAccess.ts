import ACCESS_ENUM from "./accessEnum";

/**
 * 用户权限检测
 * @param loginUser 当前登陆用户
 * @param needAccess 需要有的权限
 */
const checkAccess = (loginUser: any, needAccess = ACCESS_ENUM.NOT_LOGIN) => {
  //获取当前登陆用户具有的权限
  const loginUserAccess = loginUser?.userRole ?? ACCESS_ENUM.NOT_LOGIN;
  if (needAccess === ACCESS_ENUM.NOT_LOGIN) {
    return true;
  }
  if (needAccess === ACCESS_ENUM.USER) {
    if (loginUserAccess === ACCESS_ENUM.NOT_LOGIN) {
      return false;
    }
  }
  if (needAccess === ACCESS_ENUM.ADMIN) {
    if (loginUserAccess !== ACCESS_ENUM.ADMIN) {
      return false;
    }
  }
  return true;
};

export default checkAccess;
