<template>
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
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';
import { Message } from '@arco-design/web-vue';
import { useI18n } from 'vue-i18n';
import { useClipboard } from '@vueuse/core';
import { useStore } from '@/store';
import { MutationTypes } from '@/store/modules/app/mutation-types';
import Block from './block.vue';

export default defineComponent({
  components: {
    Block,
  },
  emits: ['cancel'],
  setup(props, { emit }) {
    const store = useStore();
    const { t } = useI18n();
    const { copy } = useClipboard();
    const visible = computed(() => store.state.app.globalSettings);
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

    const cancel = () => {
      store.commit(MutationTypes.APP_UPDATE_SETTING, { globalSettings: false });
      emit('cancel');
    };
    const copySettings = async () => {
      const text = JSON.stringify(store.state.app, null, 2);
      await copy(text);
      Message.success(t('settings.copySettings.message'));
    };
    return {
      visible,
      contentOpts,
      othersOpts,
      copySettings,
      cancel,
    };
  },
});
</script>

<style scoped lang="less"></style>
