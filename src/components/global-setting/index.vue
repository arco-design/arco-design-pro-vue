<template>
  <div>
    <div class="btn" @click="setVisible">
      <icon-settings />
    </div>
    <a-drawer
      :width="300"
      unmount-on-close
      :visible="visible"
      :cancel-text="$t('settings.close')"
      :ok-text="$t('settings.copySettings')"
      @ok="copySettings"
      @cancel="cancel"
    >
      <template #title> {{ $t('settings.title') }} </template>
      <Block :options="contentOpts" :title="$t('settings.content')" />
      <Block :options="othersOpts" :title="$t('settings.otherSettings')" />
      <a-alert>{{ $t('settings.alertContent') }}</a-alert>
    </a-drawer>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { Message } from '@arco-design/web-vue';
import { useI18n } from 'vue-i18n';
import copy from 'copy-to-clipboard';
import { useStore } from '@/store';
import Block from './block.vue';

export default defineComponent({
  components: {
    Block,
  },
  setup() {
    const visible = ref(false);
    const store = useStore();
    const { t } = useI18n();
    const contentOpts = [
      { name: 'settings.navbar', key: 'navbar', defaultVal: true },
      { name: 'settings.menu', key: 'menu', defaultVal: true },
      { name: 'settings.footer', key: 'footer', defaultVal: true },
      {
        name: 'settings.menuWidth',
        key: 'menuWidth',
        defaultVal: store.state.app.menuWidth,
        type: 'number',
      },
    ];
    const othersOpts = [
      { name: 'settings.colorWeek', key: 'colorWeek', defaultVal: false },
    ];

    const setVisible = () => {
      visible.value = true;
    };
    const cancel = () => {
      visible.value = false;
    };

    const copySettings = () => {
      copy(JSON.stringify(store.state.app, null, 2));
      Message.success(t('settings.copySettings.message'));
    };
    return {
      visible,
      contentOpts,
      othersOpts,
      setVisible,
      copySettings,
      cancel,
    };
  },
});
</script>

<style scoped lang="less">
.btn {
  position: fixed;
  top: 50%;
  right: 0;
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  color: #fff;
  font-size: 24px;
  background-color: rgb(var(--arcoblue-6));
  border-radius: 4px 0 0 4px;
  transform: translateY(-50%);
  cursor: pointer;
}
</style>
