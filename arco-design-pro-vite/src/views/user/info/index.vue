<template>
  <div class="container">
    <Breadcrumb :items="['menu.user', 'menu.user.info']" />
    <UserInfoHeader />
    <div class="content">
      <div class="content-left">
        <a-space direction="vertical" :size="16" fill>
          <MyProject />
          <LatestActivity />
        </a-space>
      </div>
      <div class="content-right">
        <a-space :size="16" direction="vertical" fill>
          <Myteam />
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
import LatestNotification from './components/latest-notification.vue';
import MyProject from './components/my-project.vue';
import LatestActivity from './components/latest-activity.vue';
import Myteam from './components/my-team.vue';

export default defineComponent({
  components: {
    UserInfoHeader,
    LatestNotification,
    MyProject,
    LatestActivity,
    Myteam,
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
  padding: 0 20px 20px 20px;
}

.content {
  display: flex;
  margin-top: 12px;

  &-left {
    flex: 1;
    margin-right: 16px;
    overflow: hidden;
    // background-color: var(--color-bg-2);

    :deep(.arco-tabs-nav-tab) {
      margin-left: 16px;
    }
  }

  &-right {
    width: 332px;
  }

  .tab-pane-wrapper {
    padding: 0 16px 16px 16px;
  }
}
</style>
