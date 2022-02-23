<template>
  <li>
    <a-tooltip :content="$t('settings.navbar.skin')">
      <a-badge :count="hasCustomTheme ? 1 : 0" dot>
        <a-button
          class="nav-btn"
          type="outline"
          shape="circle"
          @click="openDialog"
        >
          <template #icon>
            <icon-skin />
          </template>
        </a-button>
      </a-badge>
    </a-tooltip>
    <a-modal
      :visible="visible"
      width="900px"
      unmount-on-close
      @cancel="closeDialog"
    >
      <template #title> {{ $t('settings.navbar.skin') }} </template>
      <div v-if="loading" class="loading-skeleton">
        <a-row :gutter="[20, 20]">
          <a-col v-for="(_, idx) in [1, 2, 3, 4, 5, 6]" :key="idx" :span="8">
            <a-card style="height: 261px">
              <template #cover>
                <a-skeleton animation>
                  <a-space direction="vertical" fill size="large">
                    <a-skeleton-line :line-height="160" :rows="1" />
                  </a-space>
                </a-skeleton>
              </template>
              <a-skeleton animation>
                <a-space
                  direction="vertical"
                  :style="{ width: '100%' }"
                  size="large"
                >
                  <a-skeleton-line :widths="['100%', 130]" :rows="2" />
                </a-space>
              </a-skeleton>
            </a-card>
          </a-col>
        </a-row>
      </div>
      <div v-else>
        <a-row :gutter="[20, 20]">
          <a-col v-for="item in renderData" :key="item._id" :span="8">
            <a-card class="tb-card">
              <template #cover>
                <img :src="item.cover" style="height: 160px" />
              </template>
              <a-card-meta>
                <template #title>
                  {{ item.themeName }}
                </template>
              </a-card-meta>
              <template #actions>
                <a-button
                  class="tb-link"
                  type="text"
                  size="mini"
                  :href="`${apiBasename}/themes/design/${item.themeId}`"
                  target="_blank"
                >
                  <template #icon>
                    <IconLink />
                  </template>
                  {{ $t('openInDesignLab') }}
                </a-button>
                <a-tag
                  v-if="themeObj && themeObj.packageName === item.packageName"
                  color="arcoblue"
                >
                  当前使用
                </a-tag>
                <a-button
                  v-else
                  type="primary"
                  size="mini"
                  :loading="installing"
                  @click="useTheme(item)"
                >
                  {{ $t('install') }}
                </a-button>
              </template>
            </a-card>
          </a-col>
        </a-row>
      </div>
      <div class="tb-pagination">
        <a-pagination
          :total="total"
          :page-size="6"
          :current="currentPage"
          @change="onChangePagination"
        />
      </div>
      <template v-if="hasCustomTheme" #footer>
        <div class="tb-theme-footer">
          <a-typography-text bold>
            {{ $t('currentTheme') }}：{{ themeObj.themeName }}
          </a-typography-text>
          <a-button
            type="primary"
            status="danger"
            size="small"
            @click="resetTheme"
          >
            <template #icon>
              <IconClose />
            </template>
            {{ $t('resetTheme') }}
          </a-button>
        </div>
      </template>
    </a-modal>
  </li>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from 'vue';
import { Notification, Message } from '@arco-design/web-vue';
import { useI18n } from 'vue-i18n';
import useLoading from '@/hooks/loading';
import { queryThemesList, themesListReq, themesItem } from '@/api/themes';
import { useAppStore } from '@/store';
import { NotificationReturn } from '@arco-design/web-vue/es/notification/interface';

const defaultCss =
  'https://cdn.jsdelivr.net/npm/@arco-themes/vue-arco-pro@0.0.1/css/arco.css';

async function updateCss(url: string) {
  return new Promise((resolve, reject) => {
    const currentBodyStyleList = (document.body.getAttribute('style') || '')
      .split(';')
      .map((styleItem) => styleItem.trim())
      .filter((styleItem) => styleItem);

    const removeColorVariablesStyle = currentBodyStyleList.filter(
      (styleItem) => {
        return (
          !styleItem.startsWith('--arcoblue-') &&
          !styleItem.startsWith('--primary-')
        );
      }
    );

    document.body.setAttribute('style', removeColorVariablesStyle.join(';'));

    const linkElem = document.getElementById(
      'pro-custom-theme'
    ) as HTMLLinkElement;
    linkElem.parentElement?.removeChild(linkElem);
    const cloneLink = linkElem.cloneNode(true) as HTMLLinkElement;
    // clone and remove action for trigger onload event
    const arcoCss = document.getElementById('arco-css');
    cloneLink.href = url;
    cloneLink.onload = () => {
      resolve('loaded');
    };
    cloneLink.onerror = (e) => {
      reject(e);
    };
    arcoCss?.after(cloneLink);
  });
}

function getCssLink(name: string, prefix: string) {
  return `${prefix}${name}/css/arco.css`;
}

export default defineComponent({
  setup() {
    const appStore = useAppStore();
    const { t } = useI18n();
    const { loading, setLoading } = useLoading(false);
    const { loading: installing, setLoading: setInstalling } =
      useLoading(false);
    const pageSize = 6;
    const apiBasename = 'https://arco.design';
    const themeObj = ref(
      JSON.parse(localStorage.getItem('arco-pro-theme') || '{}')
    );
    const hasCustomTheme = computed(() => {
      return themeObj.value && themeObj.value.packageName;
    });
    const renderData = ref<themesItem[]>([]);
    const visible = ref(false);
    const currentPage = ref(1);
    const total = ref(0);
    let notifiInstance: NotificationReturn | null = null;

    const fetchData = async (params: themesListReq) => {
      setLoading(true);
      try {
        const result = await queryThemesList(params);
        renderData.value = result.data.list;
        total.value = result.data.total;
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    const openDialog = () => {
      visible.value = true;
      fetchData({
        pageSize,
        currentPage: currentPage.value,
        depLibrary: '@arco-design/web-vue',
      });
    };
    const closeDialog = () => {
      visible.value = false;
    };

    const onChangePagination = (page: number) => {
      if (loading.value) return;
      currentPage.value = page;
      fetchData({
        pageSize,
        currentPage: page,
        depLibrary: '@arco-design/web-vue',
      });
    };

    const updateSettings = (themeColor: string) => {
      appStore.updateSettings({ themeColor });
    };
    function onUpdateCssSuccess(item: themesItem) {
      notifiInstance = Notification.success({
        id: 'themes',
        title: t('installTheme'),
        content: t('installThemeSuccess'),
        // duration: 2000,
        closable: true,
      });
      setTimeout(() => {
        // duration is not effective
        notifiInstance?.close();
      }, 2000);

      localStorage.setItem(
        'arco-pro-theme',
        JSON.stringify({
          packageName: item.packageName,
          themeName: item.themeName,
          unpkgHost: item.unpkgHost,
          primaryColor: item.primaryColor,
        })
      );
      setInstalling(false);
    }
    function onUpdateCssFailed() {
      Notification.error({
        id: 'themes',
        title: t('installTheme'),
        content: t('installThemeError'),
        duration: 2000,
        closable: true,
      });
    }
    const useTheme = async (item: themesItem) => {
      updateSettings(item.primaryColor);
      themeObj.value = item;
      const url = getCssLink(item.packageName, item.unpkgHost);
      notifiInstance = Notification.success({
        id: 'themes',
        title: t('installTheme'),
        content: t('installingTheme'),
        duration: 0,
        closable: true,
      });
      try {
        setInstalling(true);
        await updateCss(url);
        onUpdateCssSuccess(item);
      } catch (error) {
        onUpdateCssFailed();
      } finally {
        setInstalling(false);
      }
    };
    if (hasCustomTheme.value) {
      Message.info(`${t('autoUseTheme')}: ${themeObj.value.themeName}`);
      updateCss(
        getCssLink(themeObj.value.packageName, themeObj.value.unpkgHost)
      );
      if (
        themeObj.value.primaryColor &&
        themeObj.value.primaryColor !== appStore.themeColor
      ) {
        updateSettings(themeObj.value.primaryColor);
      }
    }
    const resetTheme = () => {
      updateSettings(`rgb(var(--arcoblue-6))`);
      updateCss(defaultCss);
      localStorage.setItem('arco-pro-theme', '{}');
      themeObj.value = {};
    };
    return {
      apiBasename,
      loading,
      installing,
      hasCustomTheme,
      themeObj,
      visible,
      currentPage,
      total,
      renderData,
      openDialog,
      closeDialog,
      onChangePagination,
      resetTheme,
      useTheme,
    };
  },
});
</script>

<style scoped lang="less">
li {
  display: flex;
  align-items: center;
  padding: 0 10px;
}

a:not(.arco-btn-link) {
  color: var(--color-text-1);
  text-decoration: none;
}
.nav-btn {
  border-color: rgb(var(--gray-2));
  color: rgb(var(--gray-8));
  font-size: 16px;
}
.tb {
  &-pagination {
    display: flex;
    justify-content: flex-end;
    margin-top: 20px;
  }

  &-theme-footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}
</style>
