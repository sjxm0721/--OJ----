<template>
  <div id="user-layout">
    <a-layout style="min-height: 100vh">
      <a-layout-header class="header">
        <a-space>
          <img src="../assets/oj-logo.svg" class="logo" />
          <div>鱼 OJ</div>
        </a-space>
      </a-layout-header>
      <a-layout-content class="content">
        <router-view></router-view>
      </a-layout-content>
      <a-layout-footer class="footer">66666</a-layout-footer>
    </a-layout>
  </div>
</template>

<script lang="ts" setup></script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#user-layout {
  text-align: center;
  background: url("https://gw.alipayobjects.com/zos/rmsportal/FfdJeJRQWjEeGTpqgBKj.png")
    0% 0% / 100% 100%;
}

#user-layout .logo {
  width: 64px;
  height: 64px;
}
#user-layout .header {
  margin-bottom: 16px;
}
#user-layout .content {
  margin-bottom: 16px;
  padding: 20px;
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
