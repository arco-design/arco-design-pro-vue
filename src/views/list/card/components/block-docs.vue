<template>
  <div>
    <a-typography-title
      style="margin: 0 0 12px 0; font-size: 14px"
      :heading="6"
    >
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
        style="padding: 0; margin-bottom: 16px"
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
import { defineComponent } from 'vue';

export default defineComponent({
  props: {
    title: {
      type: String,
      default: '',
    },
    renderData: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  setup() {
    //
  },
});
</script>
<style scoped lang="less"></style>
