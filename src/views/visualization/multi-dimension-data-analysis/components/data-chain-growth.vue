<template>
  <div>
    <a-row :gutter="12">
      <a-col :span="6">
        <ChainItem
          :title="$t('multiDAnalysis.card.title.officeVisitors')"
          quota="office"
          chart-type="line"
        />
      </a-col>
      <a-col :span="6">
        <ChainItem
          :title="$t('multiDAnalysis.card.title.downloads')"
          quota="downLoad"
          chart-type="bar"
        />
      </a-col>
      <a-col :span="6">
        <ChainItem
          :title="$t('multiDAnalysis.card.title.downloads')"
          quota="downLoad"
          chart-type="line"
        />
      </a-col>
      <a-col :span="6">
        <ChainItem
          :title="$t('multiDAnalysis.card.title.downloads')"
          quota="downLoad"
          chart-type="bar"
        />
      </a-col>
    </a-row>
  </div>
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
