<template>
  <a-card :bordered="false">
    <a-row justify="space-between">
      <a-col :span="14">
        <a-tabs :default-active-tab="1" type="rounded">
          <a-tab-pane key="1" :title="$t('cardList.tab.title.all')" />
          <a-tab-pane key="2" :title="$t('cardList.tab.title.test')" />
          <a-tab-pane key="3" :title="$t('cardList.tab.title.develop')" />
          <a-tab-pane key="4" :title="$t('cardList.tab.title.network')" />
          <a-tab-pane key="5" :title="$t('cardList.tab.title.other')" />
        </a-tabs>
      </a-col>
      <a-col :span="10">
        <a-space style="justify-content: flex-end; width: 100%">
          <a-radio-group default-value="grid" type="button">
            <a-radio value="list">
              <icon-menu />
            </a-radio>
            <a-radio value="grid">
              <icon-apps />
            </a-radio>
          </a-radio-group>
          <a-input-search
            :placeholder="$t('cardList.searchInput.placeholder')"
            style="width: 240px"
          />
        </a-space>
      </a-col>
    </a-row>
    <a-spin :loading="recentLoading" style="width: 100%">
      <BlockService
        :title="$t('cardList.block.title.resentUsed')"
        :render-data="recentResponse"
      />
    </a-spin>
    <a-spin :loading="devLoading" style="width: 100%">
      <BlockService
        :title="$t('cardList.block.title.developTools')"
        :render-data="devResponse"
      />
    </a-spin>
    <a-spin :loading="docLoading" style="width: 100%">
      <BlockDocs
        :title="$t('cardList.block.title.docs')"
        :render-data="docResponse"
        style="margin-top: 24px"
      />
    </a-spin>
  </a-card>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import useRequest from '@/hooks/request';
import { queryRecentList, queryDevList, queryDocsList } from '@/api/list';
import BlockService from './block-service.vue';
import BlockDocs from './block-docs.vue';

export default defineComponent({
  components: {
    BlockService,
    BlockDocs,
  },
  setup() {
    const { loading: recentLoading, response: recentResponse } =
      useRequest(queryRecentList);
    const { loading: devLoading, response: devResponse } =
      useRequest(queryDevList);
    const { loading: docLoading, response: docResponse } =
      useRequest(queryDocsList);
    return {
      recentLoading,
      recentResponse,
      devLoading,
      devResponse,
      docLoading,
      docResponse,
    };
  },
});
</script>

<style scoped lang="less">
:deep(.arco-list-col) {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
}

:deep(.arco-list-item) {
  width: 33%;
}

:deep(.block-title) {
  margin: 0 0 12px 0;
  font-size: 14;
}
</style>
