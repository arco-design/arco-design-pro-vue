<template>
  <div class="login-form-wrapper">
    <div class="login-form-title">登录 Arco Design Pro</div>
    <div class="login-form-sub-title">登录 Arco Design Pro</div>
    <div class="login-form-error-msg">{{ errorMessage }}</div>
    <a-form
      ref="loginForm"
      :model="userInfo"
      class="login-form"
      layout="vertical"
      @submit="handleSubmit"
    >
      <a-form-item
        field="username"
        :rules="[{ required: true, message: '用户名不能为空' }]"
        :validate-trigger="['change', 'blur']"
        hide-label
      >
        <a-input
          v-model="userInfo.username"
          placeholder="用户名：admin"
          @keyup.enter="handleSubmit"
        >
          <template #prefix>
            <icon-user />
          </template>
        </a-input>
      </a-form-item>
      <a-form-item
        field="password"
        :rules="[{ required: true, message: '密码不能为空' }]"
        :validate-trigger="['change', 'blur']"
        hide-label
      >
        <a-input
          v-model="userInfo.password"
          placeholder="密码：admin"
          type="password"
          @keyup.enter="handleSubmit"
        >
          <template #prefix>
            <icon-lock />
          </template>
        </a-input>
      </a-form-item>
      <a-space :size="16" direction="vertical">
        <div class="login-form-password-actions">
          <a-checkbox checked="rememberPassword" @change="setRememberPassword">
            记住密码
          </a-checkbox>
          <a-link>忘记密码？</a-link>
        </div>
        <a-button type="primary" html-type="submit" long :loading="loading">
          登录
        </a-button>
        <a-button type="text" long class="login-form-register-btn">
          注册账号
        </a-button>
      </a-space>
    </a-form>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref, reactive } from 'vue';
import { useRouter } from 'vue-router';
import { Message } from '@arco-design/web-vue';
import { useStore } from '@/store';
import { A_USER_LOGIN } from '@/store/modules/action-type';

export default defineComponent({
  setup() {
    const router = useRouter();
    const errorMessage = ref('');
    const loading = ref(false);
    const store = useStore();
    const userInfo = reactive({
      username: 'admin',
      password: 'admin',
    });
    const handleSubmit = ({ errors, values }) => {
      if (!errors) {
        loading.value = true;
        store
          .dispatch(A_USER_LOGIN, values)
          .then(() => {
            const { redirect, ...othersQuery } =
              router.currentRoute.value.query;
            router.push({
              name: redirect || 'workplace',
              query: {
                ...othersQuery,
              },
            });
            Message.success('欢迎使用');
          })
          .finally(() => {
            loading.value = false;
          });
      } else {
        errorMessage.value = Object.entries(errors)[0].message;
      }
    };
    const setRememberPassword = () => {
      //
    };
    return {
      loading,
      userInfo,
      errorMessage,
      handleSubmit,
      setRememberPassword,
    };
  },
});
</script>
<style lang="less" scoped>
.login-form {
  &-wrapper {
    width: 320px;
  }

  &-title {
    font-size: 24px;
    font-weight: 500;
    color: var(--color-text-1);
    line-height: 32px;
  }

  &-sub-title {
    font-size: 16px;
    line-height: 24px;
    color: var(--color-text-3);
  }

  &-error-msg {
    height: 32px;
    line-height: 32px;
    color: rgb(var(--red-6));
  }

  &-password-actions {
    display: flex;
    justify-content: space-between;
  }

  &-register-btn {
    color: var(--color-text-3) !important;
  }
}
</style>
