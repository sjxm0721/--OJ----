<template>
  <div id="app">
    <BasicLayout></BasicLayout>
  </div>
</template>

<style>
#app {
}
</style>

<script lang="ts" setup>
import BasicLayout from "@/layouts/BasicLayout.vue";
import { onMounted } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";
import ACCESS_ENUM from "./access/accessEnum";

const router = useRouter();
const store = useStore();

/**
 * 全局初始化函数，有全局单次调用的代码，都可以写到这里
 */
const doInit = () => {
  console.log("hello 欢迎来到我的项目");
};

onMounted(() => {
  doInit();
});

router.beforeEach((to, from, next) => {
  //仅管理员可见
  if (to.meta.access === ACCESS_ENUM.ADMIN) {
    if (store.state.user.loginUser?.userRole !== ACCESS_ENUM.ADMIN) {
      next("/noAuth");
      return;
    }
  }
  next();
});
</script>
