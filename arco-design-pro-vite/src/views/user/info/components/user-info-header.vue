<template>
  <div class="header">
    <a-space :size="12" direction="vertical" align="center">
      <a-avatar :size="64">
        <template #trigger-icon>
          <icon-camera />
        </template>
        <img :src="userInfo.avatar" />
      </a-avatar>
      <div class="user-name">{{ userInfo.name }}</div>
      <div class="user-msg">
        <a-space :size="18">
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
    </a-space>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';
import { useStore } from '@/store';

export default defineComponent({
  setup() {
    const store = useStore();
    const userInfo = computed(() => {
      return store.getters.userInfo;
    });
    return {
      userInfo,
    };
  },
});
</script>

<style scoped lang="less">
.header {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 204px;
  color: var(--gray-10);
  background: url(http://p3-armor.byteimg.com/tos-cn-i-49unhts6dw/41c6b125cc2e27021bf7fcc9a9b1897c.svg~tplv-49unhts6dw-image.image)
    no-repeat;
  background-size: cover;

  :deep(.arco-avatar-trigger-icon-button) {
    color: rgb(var(--arcoblue-6));

    :deep(.arco-icon) {
      vertical-align: -1px;
    }
  }

  .user-name {
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
    background: transparent;
    border-color: #fff;

    &:hover,
    &:active {
      color: #fff;
      background: transparent;
      border-color: #fff;
    }
  }
}
</style>
