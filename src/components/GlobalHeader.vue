<template>
  <a-row id="global-header" align="center" :wrap="false">
    <a-col flex="auto">
      <a-menu
        mode="horizontal"
        :selected-keys="selectedKeys"
        @menu-item-click="doMenuClick"
      >
        <a-menu-item
          key="0"
          :style="{ padding: 0, marginRight: '38px' }"
          disabled
        >
          <div class="title-bar">
            <img
              class="logo"
              src="../assets/pic/logo.jpg"
              style="border-radius: 4px"
            />
            <div class="title">夏目のOJ</div>
          </div>
        </a-menu-item>
        <a-menu-item v-for="item in visibleRoutes" :key="item.path">
          {{ item.name }}
        </a-menu-item>
      </a-menu>
    </a-col>
    <a-col flex="100px">
      <div v-if="!userStore.loginUser?.userName">未登陆</div>
      <div v-else></div>
      <a-dropdown>
        <a-space direction="vertical" size="mini" align="center">
          <img
            :src="userStore.loginUser?.userAvatar"
            style="width: 48px; object-fit: cover; border-radius: 50%"
          />
          {{ userStore.loginUser?.userName }}
        </a-space>
        <template #content>
          <a-doption>个人中心</a-doption>
          <a-doption @click="userLogout">退出登录</a-doption>
        </template>
      </a-dropdown>
    </a-col>
  </a-row>
</template>

<script lang="ts" setup>
import { ref, computed } from "vue";
import { routes } from "@/router/routes";
import { useRouter } from "vue-router";
import checkAccess from "@/access/checkAccess";
import { useUserStore } from "@/store/modules/user";
const router = useRouter();
const userStore = useUserStore();
const doMenuClick = (key: string) => {
  router.push({
    path: key,
  });
};

//默认主页
const selectedKeys = ref(["/"]);

//路由跳转时，更新选中的菜单项
router.afterEach((to, from, failure) => {
  selectedKeys.value = [to.path];
});

//展示在菜单的路由数组
const visibleRoutes = computed(() => {
  return routes.filter((item, index) => {
    if (item.meta?.hideInMenu) {
      return false;
    }
    if (!checkAccess(userStore.loginUser, item?.meta?.access as string)) {
      return false;
    }
    return true;
  });
});

/**
 * 退出登录按钮点击回调
 */
const userLogout = async () => {
  userStore.userLogout().then(() => {
    router.push({
      path: "user/login",
    });
  });
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.title-bar {
  display: flex;
  align-items: center;
}
.logo {
  height: 48px;
}
.title {
  color: #444;
  margin-left: 16px;
}
</style>
