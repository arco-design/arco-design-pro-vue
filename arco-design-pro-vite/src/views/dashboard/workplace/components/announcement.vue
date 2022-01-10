<template>
  <a-card
    class="general-card"
    :title="$t('workplace.announcement')"
    :header-style="{ paddingBottom: '0' }"
    :body-style="{ paddingTop: '15px' }"
  >
    <template #extra>
      <a-link>{{ $t('workplace.viewMore') }}</a-link>
    </template>
    <a-space direction="vertical" :size="6">
      <a-space v-for="(item, idx) in list" :key="idx">
        <a-tag :color="item.type" size="small">{{ item.label }}</a-tag>
        <a-typography-text class="item-content" ellipsis>
          {{ item.content }}
        </a-typography-text>
      </a-space>
    </a-space>
  </a-card>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  setup() {
    //
    const list = [
      {
        type: 'orangered',
        label: '活动',
        content: '内容最新优惠活动',
      },
      {
        type: 'cyan',
        label: '消息',
        content: '新增内容尚未通过审核，详',
      },
      {
        type: 'blue',
        label: '通知',
        content: '当前产品试用期即将截止，…',
      },
      {
        type: 'blue',
        label: '通知',
        content: '1月新系统升级计划通知',
      },
      {
        type: 'cyan',
        label: '消息',
        content: '新增内容已经通过审核，详…',
      },
    ];
    return {
      list,
    };
  },
});
</script>

<style scoped lang="less">
.item-content {
  margin-bottom: 0;
  font-size: 14px;
  color: rgb(var(--gray-8));
}
</style>
