<template>
  <a-card
    class="general-card"
    :title="$t('workplace.quick.operation')"
    :header-style="{ paddingBottom: '0' }"
    :body-style="{ padding: '24px 20px 0 20px' }"
  >
    <template #extra>
      <a-link>{{ $t('workplace.quickOperation.setup') }}</a-link>
    </template>
    <a-row :gutter="8">
      <a-col v-for="link in links" :key="link" :span="8" class="wrapper">
        <div class="icon">
          <icon-home />
        </div>
        <a-typography-paragraph class="text">
          {{ $t(link) }}
        </a-typography-paragraph>
      </a-col>
    </a-row>
    <a-divider class="split-line" style="margin: 0" />
  </a-card>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

const links = [
  'workplace.contentManagement',
  'workplace.contentStatistical',
  'workplace.advanced',
  'workplace.onlinePromotion',
  'workplace.contentPutIn',
];

export default defineComponent({
  setup() {
    return {
      links,
    };
  },
});
</script>

<style scoped lang="less"></style>
