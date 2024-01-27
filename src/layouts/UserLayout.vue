<template>
  <div id="user-layout">
    <div id="user-background">
      <img src="../assets/pic/ou.jpg" />
    </div>
    <a-layout class="layout" style="min-height: 60vh; background-color: #fff">
      <a-layout-header class="header">
        <a-space>
          <img src="../assets/pic/logo.jpg" class="logo" />
          <div style="font-weight: bold; font-size: 16px">夏目のOJ</div>
        </a-space>
      </a-layout-header>
      <a-layout-content class="content">
        <router-view></router-view>
      </a-layout-content>
      <a-layout-footer class="footer">欢迎来到夏目のOJ</a-layout-footer>
    </a-layout>
  </div>
</template>

<script lang="ts" setup></script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
#user-layout {
  text-align: center;
  position: relative;
  height: 100vh;
  overflow: hidden;
}

#user-background {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -1;
  opacity: 0.9;
  img {
    height: 100vh;
    object-fit: cover;
  }
}

#user-layout .layout {
  margin: 20vh auto;
  width: 60vw;
  opacity: 0.8;
  min-height: 60vh;
  background-color: #fff;
  border-radius: 8px;
}

#user-layout .logo {
  width: 64px;
  height: 64px;
  border-radius: 5px;
}
#user-layout .header {
  margin: 40px 0 10px;
}
#user-layout .content {
  margin-bottom: 16px;
  padding: 5px;
}
#user-layout .footer {
  padding: 16px;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  text-align: center;
  position: sticky;
}
</style>
