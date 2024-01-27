<template>
  <div class="user-login-view">
    <h2 style="margin-bottom: 16px">用户注册</h2>
    <a-form
      label-align="left"
      auto-label-width
      :model="form"
      @submit-success="handleSubmit"
      style="max-width: 480px; margin: 0 auto"
    >
      <a-form-item
        field="userAccount"
        label="用户账号"
        :rules="formRegisterRule.userAccount"
      >
        <a-input v-model="form.userAccount" placeholder="请输入账号" />
      </a-form-item>
      <a-form-item
        field="userPassword"
        :rules="formRegisterRule.userPassword"
        label="密码"
      >
        <a-input-password
          v-model="form.userPassword"
          placeholder="请输入密码"
        />
      </a-form-item>
      <a-form-item
        field="checkPassword"
        :rules="formRegisterRule.checkPassword"
        label="确认密码"
        :validate-trigger="['change', 'input']"
      >
        <a-input-password
          v-model="form.checkPassword"
          placeholder="请确认密码"
        />
      </a-form-item>
      <a-form-item>
        <a-button
          type="primary"
          status="success"
          html-type="submit"
          style="width: 100px"
          >注册</a-button
        >
      </a-form-item>
    </a-form>
  </div>
</template>

<script setup lang="ts">
import { reactive } from "vue";
import { UserControllerService, UserRegisterRequest } from "../../../generated";
import { message } from "@arco-design/web-vue/es/message";
import { useRouter } from "vue-router";
import { useStore } from "vuex";
/**
 * 表单信息
 */

const router = useRouter();
const store = useStore();

const form = reactive({
  userAccount: "",
  userPassword: "",
  checkPassword: "",
} as UserRegisterRequest);

/**
 * 注册表单验证
 */
const formRegisterRule = {
  userAccount: [
    {
      required: true,
      message: "请输入账号",
    },
  ],
  userPassword: [
    {
      required: true,
      message: "请输入密码，长度不小于6位",
    },
    { minLength: 6, message: "密码长度需要不小于6位" },
  ],
  checkPassword: [
    {
      required: true,
      message: "请确认密码",
    },
    {
      validator: (value: any, cb: any) => {
        if (value !== form.userPassword) {
          cb("请确保两次输入密码一致");
        } else {
          cb();
        }
      },
    },
  ],
};

/**
 * 提交表单，执行注册
 */
const handleSubmit = async () => {
  const res = await UserControllerService.userRegisterUsingPost(form);
  //登录成功跳转主页
  if (res.code === 0) {
    router.push({
      path: "/user/login",
      replace: true,
    });
  } else {
    message.error("注册失败" + res.message);
  }
};
</script>
