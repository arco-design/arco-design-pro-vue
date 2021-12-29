<template>
  <a-card
    :title="$t('userInfo.title.latestActivity')"
    :bordered="false"
    :header-style="{ border: 'none' }"
  >
    <template #extra>
      <a-link>{{ $t('userInfo.viewAll') }}</a-link>
    </template>
    <a-list :bordered="false">
      <a-list-item
        v-for="activity in activityList"
        :key="activity.id"
        action-layout="horizontal"
      >
        <a-list-item-meta
          :title="activity.title"
          :description="activity.description"
        >
          <template #avatar>
            <a-avatar>
              <img :src="activity.avatar" />
            </a-avatar>
          </template>
        </a-list-item-meta>
      </a-list-item>
    </a-list>
  </a-card>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { queryLatestActivity, LatestActivity } from '@/api/user-center';

export default defineComponent({
  setup() {
    const activityList = ref<LatestActivity[]>([]);
    const fetchData = async () => {
      const { data } = await queryLatestActivity();
      activityList.value = data;
    };
    fetchData();
    return {
      activityList,
    };
  },
});
</script>

<style scoped lang="less">
.latest-activity {
  &-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
}
:deep(.arco-list-item-meta-avatar) {
  padding-bottom: 27px;
}
:deep(.arco-list-item-meta-content) {
  flex: 1;
  padding-bottom: 27px;
  border-bottom: 1px solid var(--color-neutral-3);
}
</style>
