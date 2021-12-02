<template>
  <div>
    <a-table
      :columns="columns"
      :data="data"
      row-key="id"
      :row-selection="{
        type: 'checkbox',
        showCheckedAll: true,
      }"
      :border="false"
      :pagination="false"
    />
    <a-typography-text type="secondary" class="data-statistic-list-tip">
      {{ $t('monitor.list.tip.rotations') }} {{ data.length }}
      {{ $t('monitor.list.tip.rest') }}
    </a-typography-text>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, h, compile } from 'vue';
import { useI18n } from 'vue-i18n';
import {
  TableColumn,
  TableData,
} from '@arco-design/web-vue/es/table/interface.d';

import previewImage from '@/assets/monitor-studio-preview.png';

interface PreviewRecord {
  cover: string;
  name: string;
  duration: string;
  id: string;
  status: number;
}
export default defineComponent({
  setup() {
    const { t } = useI18n();
    const data: PreviewRecord[] = [
      {
        cover: previewImage,
        name: '视频直播',
        duration: '00:05:19',
        id: '54e23ade',
        status: -1,
      },
    ];
    const renderTag = (status: number) => {
      if (status === -1) {
        return `<a-tag  color="red" class='data-statistic-list-cover-tag'>
            ${t('monitor.list.tag.auditFailed')}
        </a-tag>`;
      }
      return '';
    };
    // Using the Render function is more flexible than using templates.
    // But, cannot bind context and local scopes are also lost

    const columns = computed(() => {
      return [
        {
          title: t('monitor.list.title.order'),
          render({
            rowIndex,
          }: {
            record: TableData;
            column: TableColumn;
            rowIndex: number;
          }) {
            const tmp = `<span>${rowIndex + 1}</span>`;
            return h(compile(tmp));
          },
        },
        {
          title: t('monitor.list.title.cover'),
          render({
            record,
          }: {
            record: TableData;
            column: TableColumn;
            rowIndex: number;
          }) {
            const tmp = `<div class='data-statistic-list-cover-wrapper'>
              <img src=${record.cover} />
              ${renderTag(record.status)}
            </div>`;
            return h(compile(tmp));
          },
        },
        {
          title: t('monitor.list.title.name'),
          dataIndex: 'name',
        },
        {
          dataIndex: 'duration',
          title: t('monitor.list.title.duration'),
        },
        {
          dataIndex: 'id',
          title: t('monitor.list.title.id'),
        },
      ];
    });
    return {
      data,
      columns,
    };
  },
});
</script>

<style lang="less">
// 此处是全局样式！！！
.data-statistic {
  &-list {
    &-cover {
      &-wrapper {
        position: relative;
        height: 68px;

        img {
          height: 100%;
        }
      }

      &-tag {
        position: absolute;
        top: 6px;
        left: 6px;
      }
    }

    &-tip {
      display: block;
      margin-top: 16px;
      text-align: center;
    }
  }
}
</style>
