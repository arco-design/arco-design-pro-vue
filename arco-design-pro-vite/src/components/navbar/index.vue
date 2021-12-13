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
        <a-select
          :model-value="currentLocale"
          :options="locales"
          @change="changeLocale"
        ></a-select>
      </li>
      <li>
        <a-tooltip
          :content="
            theme === 'light'
              ? $t('settings.navbar.theme.toDark')
              : $t('settings.navbar.theme.toLight')
          "
        >
          <a-button
            type="text"
            :style="{ fontSize: '20px' }"
            @click="toggleTheme"
          >
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
              <a-menu-item key="logout" @click="logout">登出</a-menu-item>
            </a-menu>
          </template>
        </a-dropdown>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';
import { useDark, useToggle } from '@vueuse/core';
import MessageBox from '../message-box/index.vue';
import { useStore } from '@/store';
import { MutationTypes } from '@/store/modules/app/mutation-types';
import { LOCALE_OPTIONS } from '@/locale';
import useLocale from '@/hooks/locale';
import useUser from '@/hooks/user';

export default defineComponent({
  components: {
    MessageBox,
  },
  setup() {
    const store = useStore();
    const { logout } = useUser();
    const { avatar, name } = store.state.user;
    const { currentLocale, changeLocale } = useLocale();
    const locales = [...LOCALE_OPTIONS];
    const theme = computed(() => {
      return store.state.app.theme;
    });
    const isDark = useDark({
      selector: 'body',
      attribute: 'arco-theme',
      valueDark: 'dark',
      valueLight: 'light',
      storageKey: 'arco-theme',
      onChanged(dark: boolean) {
        // overridded default behavior
        store.commit(MutationTypes.TOGGLE_THEME, dark);
      },
    });
    const toggleTheme = useToggle(isDark);
    return {
      locales,
      theme,
      avatar,
      name,
      currentLocale,
      changeLocale,
      logout,
      toggleTheme,
    };
  },
});
</script>

<style scoped lang="less">
.navbar {
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
  height: 100%;
  background-color: var(--color-bg-2);
  border-bottom: 1px solid var(--color-border);
}

.left-side {
  display: flex;
  align-items: center;
  padding-left: 20px;
}

.right-side {
  display: flex;
  padding-right: 20px;
  list-style: none;

  li {
    display: flex;
    align-items: center;
    padding: 0 10px;
  }

  a {
    color: var(--color-text-1);
    text-decoration: none;
  }
}

.username {
  cursor: pointer;
}
</style>
