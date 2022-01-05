<template>
  <a-card
    class="general-card"
    :bordered="false"
    :title="$t('userInfo.tab.title.team')"
    :header-style="{ paddingBottom: '18px' }"
    :body-style="{ paddingBottom: '12px' }"
  >
    <div v-if="loading">
      <a-skeleton
        v-for="(item, idx) in new Array(4).fill({})"
        :key="idx"
        :loading="loading"
        :animation="true"
        style="margin-top: 10px"
      >
        <a-row :gutter="6">
          <a-col :span="6">
            <a-skeleton-shape shape="circle" />
          </a-col>
          <a-col :span="16">
            <a-skeleton-line :widths="['100%', '40%']" :rows="2" />
          </a-col>
        </a-row>
      </a-skeleton>
    </div>
    <a-list :bordered="false">
      <a-list-item
        v-for="team in teamList"
        :key="team.id"
        action-layout="horizontal"
      >
        <a-list-item-meta :title="team.name">
          <template #avatar>
            <a-avatar>
              <img :src="team.avatar" />
            </a-avatar>
          </template>
          <template #description> 共{{ team.peopleNumber }}人 </template>
        </a-list-item-meta>
      </a-list-item>
    </a-list>
  </a-card>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { queryMyTeamList, MyTeamRecord } from '@/api/user-center';
import useRequest from '@/hooks/request';

export default defineComponent({
  setup() {
    const { loading, response: teamList } =
      useRequest<MyTeamRecord[]>(queryMyTeamList);
    return {
      loading,
      teamList,
    };
  },
});
</script>

<style scoped lang="less">
.general-card {
  height: 356px;
  .arco-list-item {
    height: 72px;
    padding-left: 0;
    padding-bottom: 12px;
    border-bottom: 1px solid var(--color-neutral-3);
    &:last-child {
      border-bottom: none;
    }
    .arco-list-item-meta {
      padding: 0;
    }
  }
}
</style>
