<template>
  <div class="header">
    <a-space :size="8" direction="vertical" align="center">
      <a-avatar :size="64">
        <template #trigger-icon>
          <icon-camera />
        </template>
        <img :src="userInfo.avatar" />
      </a-avatar>
      <div class="username">{{ userInfo.name }}</div>
      <div class="user-msg">
        <a-space size="{18}">
          <div>
            <icon-user />
            <span class="user-msg-text">{{ userInfo.jobName }}</span>
          </div>
          <div>
            <icon-home />
            <span class="user-msg-text">{{ userInfo.organizationName }}</span>
          </div>
          <div>
            <icon-location />
            <span class="user-msg-text">{{ userInfo.locationName }}</span>
          </div>
        </a-space>
      </div>
      <a-button type="primary" class="user-edit-btn" @click="go">
        {{ $t('userInfo.editUserInfo') }}
      </a-button>
    </a-space>
  </div>
</template>
<script lang="ts">
import { defineComponent, computed } from 'vue';
import { useRouter } from 'vue-router';
import { useStore } from '@/store';

export default defineComponent({
  setup() {
    const router = useRouter();
    const store = useStore();
    const userInfo = computed(() => {
      return store.getters.userInfo;
    });
    const go = () => {
      router.push({ name: 'setting' });
    };
    return {
      go,
      userInfo,
    };
  },
});
</script>
<style scoped lang="less">
.header {
  height: 204px;
  background-color: rgb(var(--arcoblue-6));
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--color-white);

  :deep(.arco-avatar-trigger-icon-button) {
    color: rgb(var(--arcoblue-6));

    :deep(.arco-icon) {
      vertical-align: -1px;
    }
  }

  .username {
    font-weight: 500;
    font-size: 16px;
  }

  .user-msg {
    &-text {
      display: inline-block;
      margin-left: 6px;
    }
  }

  .user-edit-btn {
    color: #fff;
    border-color: #fff;
    background: transparent;

    :hover,
    :active {
      color: #fff;
      border-color: #fff;
      background: transparent;
    }
  }
}
</style>
