<template>
  <div class="navbar">
    <div class="left-side">
      <a-space>
        <img alt="logo" src="/src/assets/logo.svg" />
        <a-typography-title :style="{ margin: 0, fontSize: 18 }" :heading="5">
          ARCO PRO
        </a-typography-title>
      </a-space>
      <a-space style="margin-left: 60px; position: relative">
        <a-input placeholder="搜索">
          <template #prefix>
            <icon-search />
          </template>
        </a-input>
        <div class="key-wrap">
          <span class="search-button-key">⌘</span>
          <span class="search-button-key">S</span>
        </div>
      </a-space>
    </div>
    <ul class="right-side">
      <li>
        <a-select
          class="locale-select"
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
            class="nav-btn"
            type="outline"
            :shape="'circle'"
            @click="toggleTheme"
          >
            <template #icon>
              <icon-moon-fill v-if="theme === 'dark'" />
              <icon-sun-fill v-else />
            </template>
          </a-button>
        </a-tooltip>
      </li>
      <li>
        <a-tooltip :content="$t('settings.navbar.alerts')">
          <div class="message-box-trigger">
            <a-badge :count="9" dot>
              <a-button
                class="nav-btn"
                type="outline"
                :shape="'circle'"
                @click="setPopoverVisible"
              >
                <icon-notification />
              </a-button>
            </a-badge>
          </div>
        </a-tooltip>
        <a-popover trigger="click" :arrow-style="{ left: '59%' }">
          <div ref="refBtn" class="ref-btn"></div>
          <template #content>
            <message-box />
          </template>
        </a-popover>
      </li>
      <li>
        <a-tooltip :content="$t('settings.title')">
          <a-button
            class="nav-btn"
            type="outline"
            :shape="'circle'"
            @click="setVisible"
          >
            <template #icon>
              <icon-settings />
            </template>
          </a-button>
        </a-tooltip>
      </li>
      <li>
        <a-dropdown trigger="click">
          <a-avatar :size="32" :style="{ marginRight: '8px' }">
            <img alt="avatar" :src="avatar" />
          </a-avatar>
          <template #content>
            <a-doption @click="logout">登出</a-doption>
          </template>
        </a-dropdown>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, ref } from 'vue';
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
    const { avatar } = store.state.user;
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
    const setVisible = () => {
      store.commit(MutationTypes.APP_UPDATE_SETTING, { globalSettings: true });
    };
    const refBtn = ref();
    const setPopoverVisible = () => {
      const event = new MouseEvent('click', {
        view: window,
        bubbles: true,
        cancelable: true,
      });
      refBtn.value.dispatchEvent(event);
    };
    return {
      locales,
      theme,
      avatar,
      currentLocale,
      changeLocale,
      logout,
      toggleTheme,
      setVisible,
      setPopoverVisible,
      refBtn,
    };
  },
});
</script>

<style scoped lang="less">
.navbar {
  display: flex;
  justify-content: space-between;
  height: 100%;
  background-color: var(--color-bg-2);
  border-bottom: 1px solid var(--color-border);
}

.left-side {
  display: flex;
  align-items: center;
  padding-left: 20px;
  .key-wrap {
    position: absolute;
    right: 16px;
    top: 6px;
    width: 44px;
    display: flex;
    justify-content: space-between;
  }
  .search-button-key {
    align-items: center;
    background: #f8f8f8;
    border-radius: 3px;
    box-shadow: inset 0 -2px 0 0 #cdcde6, inset 0 0 1px 1px #fff,
      0 1px 2px 1px rgba(30, 35, 90, 0.4);
    color: #969faf;
    display: flex;
    height: 18px;
    justify-content: center;
    padding-bottom: 2px;
    position: relative;
    top: -1px;
    width: 20px;
  }
}

.right-side {
  display: flex;
  padding-right: 20px;
  list-style: none;
  :deep(.locale-select) {
    border-radius: 20px;
  }
  li {
    display: flex;
    align-items: center;
    padding: 0 10px;
  }

  a {
    color: var(--color-text-1);
    text-decoration: none;
  }
  .nav-btn {
    font-size: 20px;
  }
  .ref-btn {
    position: absolute;
    bottom: 14px;
  }
}
</style>
