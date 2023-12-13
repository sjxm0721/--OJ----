import ACCESS_ENUM from "@/access/accessEnum";
import { StoreOptions } from "vuex";

export default {
  namespace: true,
  state: () => ({
    loginUser: {
      userName: "yupi",
      userRole: ACCESS_ENUM.ADMIN,
    },
  }),
  mutations: {
    updateUser(state, payload) {
      state.loginUser = payload;
    },
  },
  actions: {
    getLoginUser({ commit, state }, payload) {
      commit("updateUser", payload);
    },
  },
} as StoreOptions<any>;
