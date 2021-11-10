<template>
  <div class="navbar">
    <div class="left-side">
      <a-space :size="8">
        <img alt="logo" src="/src/assets/logo.svg" />
        <a-typography-title :style="{ margin: 0, fontSize: 18 }" :heading="5">
          Arco Design Pro
        </a-typography-title>
      </a-space>
    </div>
    <ul class="right-side">
      <li>
        <message-box />
      </li>
      <li>
        <a>{{ $t('navbar.docs') }}</a>
      </li>
      <li>
        <a-select :options="locales"></a-select>
      </li>
      <li>
        <a-tooltip
          :content="
            theme === 'light'
              ? $t('settings.navbar.theme.toDark')
              : $t('settings.navbar.theme.toLight')
          "
        >
          <a-button type="text" :style="{ fontSize: '20px' }">
            <template #icon>
              <icon-moon-fill v-if="theme === 'light'" />
              <icon-sun-fill v-else />
            </template>
          </a-button>
        </a-tooltip>
      </li>
      <li>
        <a-avatar :style="{ marginRight: '8px' }">
          <img alt="avatar" :src="avatar" />
        </a-avatar>
        <a-dropdown trigger="click">
          <a-typography-text class="username">{{ name }}</a-typography-text>
          <template #content>
            <a-menu class="message-box">
              <a-menu-item key="logout">登出</a-menu-item>
            </a-menu>
          </template>
        </a-dropdown>
      </li>
    </ul>
  </div>
</template>
<script lang="ts">
import { computed } from 'vue';
import MessageBox from '../message-box/index.vue';
// eslint-disable-next-line import/extensions
import { useStore } from '@/store';

export default {
  components: {
    MessageBox,
  },
  setup() {
    const locales = [
      { label: '中文', value: 'zh-CN' },
      { label: 'English', value: 'en-US' },
    ];
    const theme = computed(() => {
      return 'light';
    });
    const store = useStore();
    const { avatar, name = 'Meshy' } = store.state.user;
    return {
      locales,
      theme,
      avatar,
      name,
    };
  },
};
</script>
<style scoped lang="less">
.navbar {
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid var(--color-border);
  box-sizing: border-box;
  background-color: var(--color-bg-2);
  height: 100%;
}

.left-side {
  display: flex;
  align-items: center;
  padding-left: 20px;
}

.right-side {
  display: flex;
  list-style: none;
  padding-right: 20px;

  li {
    padding: 0 10px;
    display: flex;
    align-items: center;
  }

  a {
    text-decoration: none;
    color: var(--color-text-1);
  }
}

.username {
  cursor: pointer;
}
</style>
