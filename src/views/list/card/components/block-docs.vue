<template>
  <div>
    <a-typography-title class="block-title" :heading="6">
      {{ title }}
    </a-typography-title>
    <a-list
      :grid-props="{
        gutter: 16,
        xs: 24,
        sm: 24,
        md: 24,
        lg: 12,
        xl: 12,
        xxl: 8,
      }"
      :bordered="false"
      style="margin-bottom: -16px"
    >
      <a-list-item
        v-for="(item, idx) in renderData"
        :key="idx"
        style="margin-bottom: 16px; padding: 0"
      >
        <a-card>
          <a-space align="start">
            <icon-file />
            <a-card-meta :title="item.title" :description="item.description" />
          </a-space>
        </a-card>
      </a-list-item>
    </a-list>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { DocRecord } from '@/api/list';

export default defineComponent({
  props: {
    title: {
      type: String,
      default: '',
    },
    renderData: {
      type: Array as PropType<DocRecord[]>,
      default() {
        return [];
      },
    },
  },
});
</script>
