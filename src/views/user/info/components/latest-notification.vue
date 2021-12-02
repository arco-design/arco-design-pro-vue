<template>
  <a-card :bordered="false" :title="$t('userInfo.title.latestNotification')">
    <a-result status="404">
      <template #title>
        <a-typography-text type="secondary">
          {{ $t('userInfo.nodata') }}
        </a-typography-text>
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
