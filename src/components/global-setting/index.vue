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
      @ok="ok"
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
import { useStore } from '@/store';
import Block from './block.vue';

export default defineComponent({
  components: {
    Block,
  },
  setup() {
    const visible = ref(false);
    const store = useStore();
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
      { name: 'settings.colorWeek', value: 'colorWeek', defaultVal: true },
    ];

    const setVisible = () => {
      visible.value = true;
    };
    const cancel = () => {
      visible.value = false;
    };

    const ok = () => {
      //
    };
    return {
      visible,
      contentOpts,
      othersOpts,
      setVisible,
      ok,
      cancel,
    };
  },
});
</script>
<style scoped lang="less">
.btn {
  position: fixed;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background-color: rgb(var(--arcoblue-6));
  font-size: 24px;
  color: #fff;
  border-radius: 4px 0 0 4px;
  cursor: pointer;
  z-index: 100;
}
</style>
