<template>
  <div>
    <a-typography-title style="margin: 0 0 12px 0; font-size: 14" :heading="6">
      {{ title }}
    </a-typography-title>
    <a-list
      :grid-props="{ gutter: 0, span: 24 }"
      :bordered="false"
      style="margin-bottom: -16px"
    >
      <a-list-item
        v-for="(item, idx) in renderData"
        :key="idx"
        style="padding: 0; margin-bottom: 16px"
      >
        <a-card>
          <template #actions>
            <a-link>{{ $t('cardList.detail') }}</a-link>
            <!-- <a-dropdown-button type="secondary">
              {{ item.enable ? $t('cardList.disable') : $t('cardList.enable') }}
              <template #icon>
                <icon-down />
              </template>
              <template #content>
                <a-menu>
                  <a-menu-item key="action">
                    {{ $t('cardList.action') }}
                  </a-menu-item>
                </a-menu>
              </template>
            </a-dropdown-button> -->
          </template>
          <a-space align="start">
            <a-avatar
              :size="36"
              style="margin-right: 8px; background-color: #0fc6c2"
            >
              <icon-code v-if="item.icon === 'code'" />
              <icon-edit v-else-if="item.icon === 'edit'" />
              <icon-user v-else-if="item.icon === 'user'" />
            </a-avatar>
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
    // const data = [];
    // return {
    //   data,
    // };
  },
});
</script>
<style scoped lang="less"></style>
