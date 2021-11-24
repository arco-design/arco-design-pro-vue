<template>
  <a-card :bordered="false">
    <a-row>
      <a-col :span="16">
        <a-typography-title style="margin: 0 0 16px 0" :heading="6">
          {{ $t('monitor.title.studioPreview') }}
        </a-typography-title>
      </a-col>
      <a-col :span="8" style="text-align: right">
        <icon-more />
      </a-col>
    </a-row>
    <div class="studio-wrapper">
      <img :src="previewImage" class="studio-preview" />
      <div class="studio-bar">
        <div v-if="userInfo">
          <a-space :size="12">
            <a-avatar :size="24">
              <img :src="userInfo.avatar" />
            </a-avatar>
            <a-typography-text>
              {{ userInfo.name }} {{ $t('monitor.studioPreview.studio') }}
            </a-typography-text>
          </a-space>
        </div>
        <a-typography-text type="secondary">
          3,6000 {{ $t('monitor.studioPreview.watching') }}
        </a-typography-text>
      </div>
    </div>
  </a-card>
</template>
<script lang="ts">
import { defineComponent, computed } from 'vue';
import { useStore } from '@/store';
import previewImage from '@/assets/monitor-studio-preview.png';

export default defineComponent({
  setup() {
    const store = useStore();
    const userInfo = computed(() => {
      return store.state.user;
    });
    return {
      userInfo,
      previewImage,
    };
  },
});
</script>
<style scoped lang="less">
.studio {
  // &-wrapper {
  //   :deep(.arco-card-body) {
  //     padding-top: 0 !important;
  //   }
  // }

  &-preview {
    max-width: 100%;
    display: block;
    margin: 0 auto;
  }

  &-bar {
    margin-top: 16px;
    display: flex;
    justify-content: space-between;
  }
}
</style>
