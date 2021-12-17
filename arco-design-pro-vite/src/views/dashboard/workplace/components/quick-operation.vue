<template>
  <a-card
    :title="$t('workplace.quick.operation')"
    :bordered="false"
    :header-style="{ border: 'none' }"
  >
    <template #extra>
      <a-link>{{ $t('workplace.quickOperation.setup') }}</a-link>
    </template>
    <div style="margin-bottom: -1rem">
      <a-row :gutter="8">
        <a-col
          v-for="(link, idx) in links"
          :key="idx"
          :span="8"
          class="wrapper"
        >
          <div class="icon">
            <icon-home />
          </div>
          <a-typography-paragraph class="text">
            {{ $t(link) }}
          </a-typography-paragraph>
        </a-col>
      </a-row>
    </div>
    <a-divider style="margin-bottom: 0" />
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
