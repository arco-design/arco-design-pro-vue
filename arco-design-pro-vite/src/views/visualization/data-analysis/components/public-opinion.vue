<template>
  <a-card
    class="general-card"
    :title="$t('dataAnalysis.title.publicOpinion')"
    :header-style="{ paddingBottom: '12px' }"
  >
    <a-row :gutter="12">
      <a-col :span="6">
        <ChainItem
          :title="$t('dataAnalysis.card.title.allVisitors')"
          quota="visitors"
          chart-type="line"
          :card-style="{
            background: isDark
              ? 'linear-gradient(180deg, #284991 0%, #122B62 100%)'
              : 'linear-gradient(180deg, #f2f9fe 0%, #e6f4fe 100%)',
          }"
        />
      </a-col>
      <a-col :span="6">
        <ChainItem
          :title="$t('dataAnalysis.card.title.contentPublished')"
          quota="published"
          chart-type="bar"
          :card-style="{
            background: isDark
              ? ' linear-gradient(180deg, #3D492E 0%, #263827 100%)'
              : 'linear-gradient(180deg, #F5FEF2 0%, #E6FEEE 100%)',
          }"
        />
      </a-col>
      <a-col :span="6">
        <ChainItem
          :title="$t('dataAnalysis.card.title.totalComment')"
          quota="comment"
          chart-type="line"
          :card-style="{
            background: isDark
              ? 'linear-gradient(180deg, #294B94 0%, #0F275C 100%)'
              : 'linear-gradient(180deg, #f2f9fe 0%, #e6f4fe 100%)',
          }"
        />
      </a-col>
      <a-col :span="6">
        <ChainItem
          :title="$t('dataAnalysis.card.title.totalShare')"
          quota="share"
          chart-type="pie"
          :card-style="{
            background: isDark
              ? 'linear-gradient(180deg, #312565 0%, #201936 100%)'
              : 'linear-gradient(180deg, #F7F7FF 0%, #ECECFF 100%)',
          }"
        />
      </a-col>
    </a-row>
  </a-card>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import useThemes from '@/hooks/themes';
import ChainItem from './chain-item.vue';

export default defineComponent({
  components: {
    ChainItem,
  },
  setup() {
    const { isDark } = useThemes();
    return {
      isDark,
    };
  },
});
</script>
