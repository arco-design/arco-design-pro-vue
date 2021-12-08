<template>
  <div>
    <div class="latest-activity-header">
      <a-typography-title :heading="6">
        {{ $t('userInfo.title.latestActivity') }}
      </a-typography-title>
      <a-link>{{ $t('userInfo.showMore') }}</a-link>
    </div>
    <a-list>
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
  </div>
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
</style>
