<template>
  <div>
    <a-typography-title :heading="6" style="margin: 0 0 16px 0">
      {{ title }}
    </a-typography-title>
    <div class="item-container">
      <a-descriptions
        v-for="(item, idx) in blockDataList"
        :key="idx"
        colon=":"
        :label-style="{
          textAlign: 'right',
          width: '200px',
          paddingRight: '10px',
        }"
        :value-style="{ width: '400px' }"
        :title="item.title"
        :data="item.data"
      />
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, computed } from 'vue';
import { useI18n } from 'vue-i18n';

export default defineComponent({
  props: {
    title: {
      type: String,
      default: '',
    },
    data: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  setup(props) {
    const { t } = useI18n();
    const blockDataList: {
      title: string;
      data: {
        label: string;
        value: string;
      }[];
    }[] = computed(() => {
      const { data } = props;
      const result = [];
      result.push({
        title: t('basicProfile.title.video'),
        data: [
          {
            label: t('basicProfile.label.video.mode'),
            value: data?.video?.mode || '-',
          },
          {
            label: t('basicProfile.label.video.acquisition.resolution'),
            value: data?.video?.acquisition.resolution || '-',
          },
          {
            label: t('basicProfile.label.video.acquisition.frameRate'),
            value: `${data?.video?.acquisition.frameRate || '-'} fps`,
          },
          {
            label: t('basicProfile.label.video.encoding.resolution'),
            value: data?.video?.encoding.resolution || '-',
          },
          {
            label: t('basicProfile.label.video.encoding.rate.min'),
            value: `${data?.video?.encoding.rate.min || '-'} bps`,
          },
          {
            label: t('basicProfile.label.video.encoding.rate.max'),
            value: `${data?.video?.encoding.rate.max || '-'} bps`,
          },
          {
            label: t('basicProfile.label.video.encoding.rate.default'),
            value: `${data?.video?.encoding.rate.default || '-'} bps`,
          },
          {
            label: t('basicProfile.label.video.encoding.frameRate'),
            value: `${data?.video?.encoding.frameRate || '-'} fpx`,
          },
          {
            label: t('basicProfile.label.video.encoding.profile'),
            value: data?.video?.encoding.profile || '-',
          },
        ],
      });

      result.push({
        title: t('basicProfile.title.audio'),
        data: [
          {
            label: t('basicProfile.label.audio.mode'),
            value: data?.audio?.mode || '-',
          },
          {
            label: t('basicProfile.label.audio.acquisition.channels'),
            value: `${data?.audio?.acquisition.channels || '-'} ${t(
              'basicProfile.unit.audio.channels'
            )}`,
          },
          {
            label: t('basicProfile.label.audio.encoding.channels'),
            value: `${data?.audio?.encoding.channels || '-'} ${t(
              'basicProfile.unit.audio.channels'
            )}`,
          },
          {
            label: t('basicProfile.label.audio.encoding.rate'),
            value: `${data?.audio?.encoding.rate || '-'} kbps`,
          },
          {
            label: t('basicProfile.label.audio.encoding.profile'),
            value: data?.audio?.encoding.profile || '-',
          },
        ],
      });

      return result;
    });

    return {
      blockDataList,
    };
  },
});
</script>
<style scoped lang="less">
.item-container {
  padding: 24px;
  background: rgb(var(--gray-1));
}
</style>
