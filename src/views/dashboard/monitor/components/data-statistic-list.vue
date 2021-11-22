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

import previewImage from '@/assets/monitor-studio-preview.png';

export default defineComponent({
  setup() {
    const { t } = useI18n();
    const data = [
      {
        cover: previewImage,
        name: '视频直播',
        duration: '00:05:19',
        id: '54e23ade',
        status: -1,
      },
    ];
    const renderTag = (status) => {
      if (status === -1) {
        return `<a-tag  color="red" class='data-statistic-list-cover-tag'>
            ${t('monitor.list.tag.auditFailed')}
        </a-tag>`;
      }
      return '';
    };
    // table自定义的一种用法
    // 使用render函数 比模板更加灵活。缺点，无法绑定上下文。同时局部作用域丢失
    const columns = computed(() => {
      return [
        {
          title: t('monitor.list.title.order'),
          render({ column }) {
            const tmp = `<span>${column.dataIndex}</span>`;
            return h(compile(tmp));
          },
        },
        {
          title: t('monitor.list.title.cover'),
          render({ record }) {
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
        height: 68px;
        position: relative;

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
