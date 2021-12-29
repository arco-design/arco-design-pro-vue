<template>
  <a-card
    :bordered="false"
    :title="$t('userInfo.title.latestNotification')"
    :header-style="{ border: 'none' }"
  >
    <a-result status="404">
      <template #subtitle>
        {{ $t('userInfo.nodata') }}
      </template>
    </a-result>
  </a-card>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  setup() {
    //
  },
});
</script>

<style lang="less" scoped>
:deep(.arco-result) {
  padding: 40px 32px 108px;
}
</style>
