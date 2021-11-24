<template>
  <div class="other-wrapper">
    <a-list :bordered="false">
      <a-list-item v-for="item in list" :key="item.id">
        <a-typography-text>{{ item.content }}</a-typography-text>
      </a-list-item>
    </a-list>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';
import { queryProjectAndTeamList } from '@/api/user-center';

interface ProjectRecord {
  id: number;
  content: string;
}

export default defineComponent({
  setup() {
    const list = ref<ProjectRecord[]>([]);
    const fetchData = async () => {
      const { data } = await queryProjectAndTeamList();
      list.value = data;
    };
    fetchData();
    return {
      list,
    };
  },
});
</script>
<style scoped lang="less">
.other-wrapper {
  background-color: var(--color-bg-2);
}
</style>
