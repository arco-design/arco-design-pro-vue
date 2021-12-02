<template>
  <a-card :bordered="false">
    <a-typography-title class="section-titile" :heading="6">
      {{ $t('multiDAnalysis.card.title.downloadRanking') }}
    </a-typography-title>
    <a-list class="list" :bordered="false" :split="false">
      <a-list-item
        v-for="(item, idx) in renderData"
        :key="idx"
        style="padding: 9px 0"
      >
        <span
          :class="[
            'list-item-prefix',
            idx < 3 ? 'list-item-prefix--active' : '',
          ]"
          >{{ idx + 1 }}</span
        >
        <span>{{ item.name }}</span>
        <template #extra>
          <span>
            {{ item.value }}
            <a-typography-text v-if="item.growth > 0" type="danger">
              <icon-arrow-rise />
            </a-typography-text>
          </span>
        </template>
      </a-list-item>
    </a-list>
  </a-card>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  setup() {
    const renderData = [
      {
        name: '产品 1',
        value: 72309,
        growth: 1,
      },
      {
        name: '产品 2',
        value: 12062,
        growth: 1,
      },
      {
        name: '产品 3',
        value: 72309,
        growth: 0,
      },
      {
        name: '产品 4',
        value: 7321,
        growth: 0,
      },
      {
        name: '产品 5',
        value: 4212,
        growth: 0,
      },
      {
        name: '产品 6',
        value: 853,
        growth: 0,
      },
      {
        name: '产品 7',
        value: 853,
        growth: 0,
      },
    ];
    return {
      renderData,
    };
  },
});
</script>

<style scoped lang="less">
.list {
  &-item {
    &-prefix {
      display: inline-block;
      width: 16px;
      height: 16px;
      margin-right: 8px;
      color: rgb(var(--gray-6));
      font-weight: 500;
      font-size: 12px;
      line-height: 16px;
      text-align: center;
      vertical-align: middle;
      background-color: rgb(var(--gray-2));
      border-radius: 50%;

      &&--active {
        color: rgb(var(--arcoblue-6));
        background-color: rgb(var(--arcoblue-1));
      }
    }
  }
}
</style>
