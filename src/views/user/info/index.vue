<template>
  <div class="container">
    <UserInfoHeader />
    <div class="content">
      <div class="content-left">
        <a-tabs>
          <a-tab-pane v-for="tab in tabList" :key="tab.key">
            <template #title>
              <div>
                <a-space :size="6">
                  <component :is="tab.icon" />
                  <span>{{ tab.title }}</span>
                </a-space>
              </div>
            </template>
            <div class="tab-pane-wrapper">
              <component :is="tab.component" />
            </div>
          </a-tab-pane>
        </a-tabs>
      </div>
      <div class="content-right">
        <a-space size="{12}" direction="vertical">
          <Visits />
          <Other />
          <LatestNotification />
        </a-space>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import { useI18n } from 'vue-i18n';
import UserInfoHeader from './components/user-info-header.vue';
import Visits from './components/visit.vue';
import Other from './components/other.vue';
import LatestNotification from './components/latest-notification.vue';
import Overview from './components/overview.vue';

export default defineComponent({
  components: {
    UserInfoHeader,
    Overview,
    Visits,
    Other,
    LatestNotification,
  },
  setup() {
    const { t } = useI18n();

    const tabList = [
      {
        key: 'overview',
        title: t('userInfo.tab.title.overview'),
        icon: 'icon-face-smile-fill',
        component: 'Overview',
      },
      {
        key: 'project',
        title: t('userInfo.tab.title.project'),
        icon: 'icon-file',
        component: 'Overview',
      },
      {
        key: 'team',
        title: t('userInfo.tab.title.team'),
        icon: 'icon-user',
        component: 'Overview',
      },
    ];
    return {
      tabList,
    };
  },
});
</script>
<style scoped lang="less">
.container {
  padding: 20px;
}

.content {
  margin-top: 12px;
  display: flex;

  &-left {
    flex: 1;
    margin-right: 12px;
    overflow: hidden;
  }

  &-right {
    width: 332px;
  }

  &-left {
    background-color: var(--color-bg-2);
  }

  .tab-pane-wrapper {
    padding: 0 16px 16px 16px;
  }
}
</style>
