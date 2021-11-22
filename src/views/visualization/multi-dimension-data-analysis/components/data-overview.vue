<template>
  <a-card :bordered="false">
    <a-typography-title class="section-titile" :heading="6">
      {{ $t('multiDAnalysis.card.title.dataOverview') }}
    </a-typography-title>
    <a-row justify="space-between">
      <a-col
        v-for="(item, idx) in renderData"
        :key="idx"
        :span="24 / renderData.length"
      >
        <a-statistic
          :title="item.title"
          :value="item.value"
          show-group-separator
        >
          <template #prefix>
            <span
              class="statistic-prefix"
              :style="{ background: item.prefix.background }"
            >
              <component :is="item.prefix.icon" />
            </span>
          </template>
        </a-statistic>
      </a-col>
    </a-row>
  </a-card>
</template>
<script lang="ts">
import { defineComponent, computed } from 'vue';
import { useI18n } from 'vue-i18n';

export default defineComponent({
  setup() {
    const { t } = useI18n();
    const renderData = computed(() => [
      {
        title: t('multiDAnalysis.dataOverview.components'),
        value: 20,
        prefix: {
          icon: 'icon-code',
          background: '#f53f3f',
        },
      },
      {
        title: t('multiDAnalysis.dataOverview.issues'),
        value: 20,
        prefix: {
          icon: 'icon-desktop',
          background: '#0fc6c2',
        },
      },
      {
        title: t('multiDAnalysis.dataOverview.activeContributors'),
        value: 128,
        prefix: {
          icon: 'icon-user',
          background: '#175dff',
        },
      },
      {
        title: t('multiDAnalysis.dataOverview.todayDownloads'),
        value: 1275,
        prefix: {
          icon: 'icon-code',
          background: '#ff7d03',
        },
      },
      {
        title: t('multiDAnalysis.dataOverview.todayDownloads'),
        value: 1275,
        prefix: {
          icon: 'icon-code',
          background: '#ff7d03',
        },
      },
      {
        title: t('multiDAnalysis.dataOverview.todayDownloads'),
        value: 1275,
        prefix: {
          icon: 'icon-code',
          background: '#ff7d03',
        },
      },
    ]);
    return {
      renderData,
    };
  },
});
</script>
<style scoped lang="less">
.statistic-prefix {
  display: inline-block;
  margin-right: 4px;
  width: 14px;
  height: 12px;
  line-height: 12px;
  border-radius: 2px;
  color: var(--color-white);
  font-size: 10px;
  text-align: center;
  vertical-align: middle;
}
</style>
