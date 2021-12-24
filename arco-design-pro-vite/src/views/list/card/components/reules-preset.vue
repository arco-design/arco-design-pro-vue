<template>
  <a-spin :loading="loading" style="width: 100%">
    <div class="list-wrap">
      <a-typography-title class="block-title" :heading="6">
        {{ $t('cardList.tab.title.preset') }}
      </a-typography-title>
      <a-row class="list-row" :gutter="24">
        <a-col
          v-for="(item, idx) in response"
          :key="idx"
          :span="6"
          class="list-col"
          style="min-height: 140px"
        >
          <CardWrap
            :title="item.title"
            :description="item.description"
            :default-value="item.enable"
            :action-type="item.actionType"
            :tag-text="$t('cardList.preset.tag')"
          />
        </a-col>
      </a-row>
    </div>
    <a-empty v-if="!response?.length" />
  </a-spin>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { queryRulesPresetList, ServiceRecord } from '@/api/list';
import useRequest from '@/hooks/request';
import CardWrap from './card-wrap.vue';

export default defineComponent({
  components: {
    CardWrap,
  },
  setup() {
    const { loading, response } =
      useRequest<ServiceRecord[]>(queryRulesPresetList);
    return {
      loading,
      response,
    };
  },
});
</script>

<style scoped lang="less"></style>
