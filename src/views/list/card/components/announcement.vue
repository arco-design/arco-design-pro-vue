<template>
  <a-card :bordered="false" class="right-content__item">
    <a-typography-title style="margin: 0 0 16px 0" :heading="6">
      {{ $t('cardList.tab.title.announcement') }}
    </a-typography-title>
    <a-result status="404" :subtitle="$t('cardList.announcement.noData')" />
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
<style scoped lang="less"></style>
