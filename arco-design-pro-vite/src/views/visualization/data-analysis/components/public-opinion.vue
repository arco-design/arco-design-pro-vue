<template>
  <a-card :bordered="false" :header-style="{ border: 'none' }">
    <template #title>
      {{ $t('dataAnalysis.title.publicOpinion') }}
    </template>
    <a-row :gutter="12">
      <a-col :span="6">
        <ChainItem
          :title="$t('dataAnalysis.card.title.allVisitors')"
          quota="visitors"
          chart-type="line"
          :card-style="{
            background: 'linear-gradient(180deg, #f2f9fe 0%, #e6f4fe 100%)',
          }"
        />
      </a-col>
      <a-col :span="6">
        <ChainItem
          :title="$t('dataAnalysis.card.title.contentPublished')"
          quota="published"
          chart-type="bar"
          :card-style="{
            background: 'linear-gradient(180deg, #F5FEF2 0%, #E6FEEE 100%)',
          }"
        />
      </a-col>
      <a-col :span="6">
        <ChainItem
          :title="$t('dataAnalysis.card.title.totalComment')"
          quota="comment"
          chart-type="line"
          :card-style="{
            background: 'linear-gradient(180deg, #f2f9fe 0%, #e6f4fe 100%)',
          }"
        />
      </a-col>
      <a-col :span="6">
        <ChainItem
          :title="$t('dataAnalysis.card.title.totalShare')"
          quota="share"
          chart-type="pie"
          :card-style="{
            background: 'linear-gradient(180deg, #F7F7FF 0%, #ECECFF 100%)',
          }"
        />
      </a-col>
    </a-row>
  </a-card>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import ChainItem from './chain-item.vue';

export default defineComponent({
  components: {
    ChainItem,
  },
});
</script>
