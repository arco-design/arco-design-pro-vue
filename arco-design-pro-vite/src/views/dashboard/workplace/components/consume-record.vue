<template>
  <a-card
    :title="$t('workplace.record.expense')"
    :bordered="false"
    hoverable
    class="panel"
  >
    <a-tabs type="text">
      <a-tab-pane key="1" :title="$t('workplace.record.thisMonth')">
        <a-result status="404" :subtitle="$t('workplace.record.nodata')" />
      </a-tab-pane>
      <a-tab-pane key="2" :title="$t('workplace.record.threeMonths')">
        <a-result status="404" :subtitle="$t('workplace.record.nodata')" />
      </a-tab-pane>
      <a-tab-pane key="3" :title="$t('workplace.record.sixMonths')">
        <a-result status="404" :subtitle="$t('workplace.record.nodata')" />
      </a-tab-pane>
    </a-tabs>
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
