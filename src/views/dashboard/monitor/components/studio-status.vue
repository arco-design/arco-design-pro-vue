<template>
  <a-card :bordered="false">
    <a-space align="start">
      <a-typography-title style="margin: 0 0 16px 0" :heading="6">
        {{ $t('monitor.studioStatus.title.studioStatus') }}
      </a-typography-title>
      <a-tag color="green">{{ $t('monitor.studioStatus.smooth') }}</a-tag>
    </a-space>
    <a-descriptions
      colon=": "
      layout="horizontal"
      :data="dataStatus"
      :column="2"
    >
      <!-- <template #label>
        <span>
          <a-typography-text style="padding-right: 8px">
            {{ $t('monitor.studioStatus.mainstream') }}
          </a-typography-text>
          {{ $t('monitor.studioStatus.bitRate') }}
        </span>
      </template> -->
    </a-descriptions>
    <a-typography-title style="margin-bottom: 16px" :heading="6">
      {{ $t('monitor.studioStatus.title.pictureInfo') }}
    </a-typography-title>
    <a-descriptions
      colon=": "
      layout="horizontal"
      :data="dataPicture"
      :column="2"
    />
  </a-card>
</template>
<script lang="ts">
import { defineComponent, computed } from 'vue';
import { useI18n } from 'vue-i18n';

export default defineComponent({
  setup() {
    const { t } = useI18n();
    const dataStatus = computed(() => [
      {
        renderLabel: true,
        category: 'monitor.studioStatus.mainstream',
        bitRate: 'monitor.studioStatus.bitRate',
        value: '6 Mbps',
      },
      {
        label: t('monitor.studioStatus.frameRate'),
        value: '60',
      },
      {
        renderLabel: true,
        value: '6 Mbps',
      },
    ]);
    const dataPicture = computed(() => [
      {
        label: t('monitor.studioStatus.line'),
        value: '热备',
      },
      {
        label: 'CDN',
        value: 'KS',
      },
      {
        label: t('monitor.studioStatus.play'),
        value: 'FLV',
      },
      {
        label: t('monitor.studioStatus.pictureQuality'),
        value: '原画',
      },
    ]);
    return {
      dataStatus,
      dataPicture,
    };
  },
});
</script>
<style scoped lang="less"></style>
