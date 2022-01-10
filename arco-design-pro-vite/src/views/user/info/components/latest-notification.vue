<template>
  <a-card class="general-card" :title="$t('userInfo.title.latestNotification')">
    <a-skeleton v-if="loading" :animation="true">
      <a-skeleton-line :rows="3" />
    </a-skeleton>
    <a-result v-else status="404">
      <template #subtitle>
        {{ $t('userInfo.nodata') }}
      </template>
    </a-result>
  </a-card>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import useLoading from '@/hooks/loading';

export default defineComponent({
  setup() {
    const { loading, setLoading } = useLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 500);
    return {
      loading,
    };
  },
});
</script>

<style lang="less" scoped>
:deep(.arco-result) {
  padding: 40px 32px 108px;
}
</style>
