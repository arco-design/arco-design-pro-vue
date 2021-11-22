<template>
  <a-row class="banner">
    <a-col :span="8">
      <a-typography-title :heading="5" style="margin-top: 0">
        {{ $t('workplace.welcome') }}
      </a-typography-title>
      <a-typography-text type="secondary">
        {{ userInfo.name }}，{{ userInfo.email }}
      </a-typography-text>
    </a-col>
    <a-col :span="16" style="text-align: right">
      <a-space :size="30">
        <a-statistic
          :title="$t('workplace.balance')"
          :value="392.52"
          :precision="2"
        >
          <template #prefix>
            <icon-home />
          </template>
        </a-statistic>
        <a-statistic
          :title="$t('workplace.order.pending')"
          :value="0"
          :precision="2"
        >
          <template #prefix>
            <icon-home />
          </template>
        </a-statistic>
        <a-statistic :title="$t('workplace.order.pendingRenewal')" :value="1">
          <template #prefix>
            <icon-home />
          </template>
        </a-statistic>
      </a-space>
    </a-col>
  </a-row>
</template>
<script lang="ts">
import { defineComponent, computed } from 'vue';
import { useStore } from '@/store';

export default defineComponent({
  setup() {
    const store = useStore();
    const userInfo = computed(() => {
      const { name, email } = store.state.user;
      return {
        name,
        email,
      };
    });
    return {
      userInfo,
    };
  },
});
</script>
<style scoped lang="less">
.banner {
  background-color: var(--color-bg-2);
  padding: 20px;
}
</style>
