<template>
  <a-card :title="$t('workplace.team.info')" :bordered="false" class="panel">
    <a-list :bordered="false">
      <a-list-item v-for="(item, idx) in dataSource" :key="idx">
        <a-list-item-meta :title="item.title" :description="item.description">
          <template #avatar>
            <a-avatar>
              <img alt="avatar" :src="item.avatar" />
            </a-avatar>
          </template>
        </a-list-item-meta>
        <template #actions>
          <a-button size="mini" type="text">
            <icon-edit />
          </a-button>
          <a-button size="mini" type="text">
            <icon-delete />
          </a-button>
        </template>
      </a-list-item>
    </a-list>
    <div style="text-align: center" @click="toggle">
      <a-button v-if="loading" size="mini" type="text">
        <template #icon>
          <icon-loading />
        </template>
      </a-button>
      <a-button v-else size="mini" type="text">
        {{ $t('workplace.loadMore') }}
      </a-button>
    </div>
  </a-card>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import useLoading from '@/hooks/loading';

const dataSource = new Array(3).fill({
  avatar:
    '//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/a8c8cdb109cb051163646151a4a5083b.png~tplv-uwbnlip3yd-webp.webp',
  title: 'Beijing Bytedance Technology Co., Ltd.',
  description:
    'Beijing ByteDance Technology Co., Ltd. is an enterprise located in China.',
});
export default defineComponent({
  setup() {
    const { loading, toggle } = useLoading();
    return {
      loading,
      toggle,
      dataSource,
    };
  },
});
</script>
<style scoped lang="less"></style>
