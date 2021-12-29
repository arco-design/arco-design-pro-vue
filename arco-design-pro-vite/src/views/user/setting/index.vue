<template>
  <div class="container">
    <Breadcrumb :items="['menu.user', 'menu.user.setting']" />
    <a-row style="margin-bottom: 16px">
      <a-col :span="24">
        <UserPanel />
      </a-col>
    </a-row>
    <a-row class="wrapper">
      <a-col :span="24">
        <a-tabs default-active-key="1" type="rounded">
          <a-tab-pane key="1" :title="$t('userSetting.tab.basicInformation')">
            <BasicInformation />
          </a-tab-pane>
          <a-tab-pane key="2" :title="$t('userSetting.tab.securitySettings')">
            <SecuritySettings />
          </a-tab-pane>
          <a-tab-pane key="3" :title="$t('userSetting.tab.certification')">
            <Certification />
          </a-tab-pane>
        </a-tabs>
      </a-col>
    </a-row>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
// import { useI18n } from 'vue-i18n';
// import Info from './components/info.vue';
import UserPanel from './components/user-panel.vue';
import BasicInformation from './components/basic-information.vue';
import SecuritySettings from './components/security-settings.vue';
import Certification from './components/certification.vue';

export default defineComponent({
  components: {
    // Info,
    UserPanel,
    BasicInformation,
    SecuritySettings,
    Certification,
  },
  setup() {
    // const { t } = useI18n();

    return {};
  },
});
</script>

<style scoped lang="less">
.container {
  padding: 20px;
}

.wrapper {
  padding: 20px;
  min-height: 580px;
  background-color: var(--color-bg-2);
}

:deep(.section-title) {
  margin-top: 0;
  margin-bottom: 16px;
  font-size: 14px;
}
</style>
