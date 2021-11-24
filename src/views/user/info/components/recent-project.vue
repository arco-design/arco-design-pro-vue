<template>
  <div>
    <div class="latest-project-header">
      <a-typography-title :heading="6" class="latest-project-title">
        {{ $t('userInfo.title.latestProject') }}
      </a-typography-title>
      <a-link>{{ $t('userInfo.showMore') }}</a-link>
    </div>
    <div class="latest-project-list">
      <div
        v-for="project in projectList"
        :key="project.id"
        class="latest-project-item"
        :style="{ width: `${100 / projectList.length}%` }"
      >
        <a-card>
          <a-space direction="vertical">
            <a-typography-text>{{ project.name }}</a-typography-text>
            <a-typography-text type="secondary">
              {{ project.description }}
            </a-typography-text>
            <a-avatar-group :size="0">
              <a-avatar
                v-for="(contributor, idx) in project.contributors"
                :key="idx"
                :size="32"
              >
                <img :src="contributor.avatar" />
              </a-avatar>
            </a-avatar-group>
          </a-space>
        </a-card>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';
import {
  queryLatestProjectList,
  LastestProjectRecord,
} from '@/api/user-center';

export default defineComponent({
  setup() {
    const projectList = ref<LastestProjectRecord[]>([]);
    const fetchData = async () => {
      const { data } = await queryLatestProjectList();
      projectList.value = data;
    };
    fetchData();
    return {
      projectList,
    };
  },
});
</script>
<style scoped lang="less">
.latest-project {
  &-header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
  }

  &-title {
    margin-top: 0 !important;
    margin-bottom: 18px !important;
  }

  &-list {
    display: flex;
    justify-content: space-between;
  }

  &-item {
    padding-right: 16px;

    &:last-child {
      padding-right: 0;
    }
  }
}
</style>
