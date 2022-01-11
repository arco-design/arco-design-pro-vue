<template>
  <div class="list-wrap">
    <a-typography-title class="block-title" :heading="6">
      {{ $t('cardList.tab.title.service') }}
    </a-typography-title>
    <a-row class="list-row" :gutter="24">
      <a-col
        v-for="item in renderData"
        :key="item.id"
        :span="6"
        class="list-col"
        style="min-height: 162px"
      >
        <CardWrap
          :loading="loading"
          :title="item.title"
          :description="item.description"
          :default-value="item.enable"
          :action-type="item.actionType"
          :expires="item.expires"
          :open-txt="$t('cardList.service.open')"
          :close-txt="$t('cardList.service.cancel')"
          :expires-text="$t('cardList.service.renew')"
          :tag-text="$t('cardList.service.tag')"
          :expires-tag-text="$t('cardList.service.expiresTag')"
          :icon="item.icon"
        >
          <template #skeleton>
            <a-skeleton :animation="true">
              <a-skeleton-line :widths="['100%', '40%', '100%']" :rows="3" />
              <a-skeleton-line :widths="['40%']" :rows="1" />
            </a-skeleton>
          </template>
        </CardWrap>
      </a-col>
    </a-row>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { queryTheServiceList, ServiceRecord } from '@/api/list';
import useRequest from '@/hooks/request';
import CardWrap from './card-wrap.vue';

export default defineComponent({
  components: {
    CardWrap,
  },
  setup() {
    const defaultValue: ServiceRecord[] = new Array(4).fill({});
    const { loading, response: renderData } = useRequest<ServiceRecord[]>(
      queryTheServiceList,
      defaultValue
    );
    return {
      loading,
      renderData,
    };
  },
});
</script>

<style scoped lang="less"></style>
