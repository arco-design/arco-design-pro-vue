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
import Block from './block.vue';

export default {
  components: {
    Block,
  },
  setup(props) {
    console.log(props);
  },
  data() {
    return {
      visible: false,
      contentOpts: [
        { name: 'settings.navbar', value: 'navbar' },
        { name: 'settings.menu', value: 'menu' },
        { name: 'settings.footer', value: 'footer' },
        { name: 'settings.menuWidth', value: 'menuWidth', type: 'number' },
      ],
      othersOpts: [{ name: 'settings.colorWeek', value: 'colorWeek' }],
    };
  },
  methods: {
    setVisible() {
      this.visible = true;
    },
    ok() {
      console.log('ok');
    },
    cancel() {
      this.visible = false;
      console.log('cancel');
    },
  },
};
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
