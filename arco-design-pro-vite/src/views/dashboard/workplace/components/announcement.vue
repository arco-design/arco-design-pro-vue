<template>
  <a-card
    :title="$t('workplace.announcement')"
    :bordered="false"
    :header-style="{ border: 'none' }"
    :body-style="{ paddingTop: 0 }"
  >
    <template #extra>
      <a-link>{{ $t('workplace.viewMore') }}</a-link>
    </template>
    <a-space direction="vertical">
      <a-space v-for="(item, idx) in list" :key="idx">
        <a-tag :color="item.type">{{ item.label }}</a-tag>
        <a-typography-text class="text">{{ item.content }}</a-typography-text>
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
        content: '新增内容尚未通过审核，详情请…',
      },
      {
        type: 'blue',
        label: '通知',
        content: '当前产品试用期即将截止，如需…',
      },
      {
        type: 'blue',
        label: '通知',
        content: '1月新系统升级计划通知',
      },
      {
        type: 'cyan',
        label: '消息',
        content: '新增内容已经通过审核，详情请…',
      },
    ];
    return {
      list,
    };
  },
});
</script>

<style scoped lang="less">
.text {
  font-size: 13px;
}
</style>
