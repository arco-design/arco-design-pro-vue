<template>
  <a-spin :loading="loading" style="width: 100%">
    <div class="list-wrap">
      <a-typography-title class="block-title" :heading="6">
        {{ $t('cardList.tab.title.content') }}
      </a-typography-title>
      <a-row class="list-row" :gutter="24">
        <a-col v-if="response" :span="6" class="list-col">
          <div class="card-wrap">
            <a-card :bordered="false" hoverable style="height: 100%">
              <a-result :status="null" :title="$t('cardList.content.action')">
                <template #icon>
                  <icon-plus style="font-size: 20px" />
                </template>
              </a-result>
            </a-card>
          </div>
        </a-col>
        <a-col
          v-for="(item, idx) in response"
          :key="idx"
          :span="6"
          class="list-col"
        >
          <CardWrap
            :title="item.title"
            :description="item.description"
            :default-value="item.enable"
            :action-type="item.actionType"
            :icon="item.icon"
            :open-txt="$t('cardList.content.inspection')"
            :close-txt="$t('cardList.content.delete')"
            :show-tag="false"
          >
            <a-descriptions
              style="margin-top: 16px"
              :data="item.data"
              layout="inline-horizontal"
              :column="2"
            />
          </CardWrap>
        </a-col>
      </a-row>
    </div>
    <a-empty v-if="loading" />
  </a-spin>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { queryInspectionList, ServiceRecord } from '@/api/list';
import useRequest from '@/hooks/request';
import CardWrap from './card-wrap.vue';

export default defineComponent({
  components: {
    CardWrap,
  },
  setup() {
    const { loading, response } =
      useRequest<ServiceRecord[]>(queryInspectionList);
    return {
      loading,
      response,
    };
  },
});
</script>

<style scoped lang="less">
.card-wrap {
  height: 100%;
  transition: all 0.3s;
  border: 1px solid var(--color-neutral-3);
  &:hover {
    transform: translateY(-4px);
    // box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.1);
  }
}
</style>
