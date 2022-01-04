<template>
  <a-card
    class="general-card"
    :title="$t('monitor.title.studioPreview')"
    :bordered="false"
  >
    <template #extra>
      <icon-more />
    </template>
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
  &-preview {
    display: block;
    max-width: 100%;
    margin: 0 auto;
  }

  &-bar {
    display: flex;
    justify-content: space-between;
    margin-top: 16px;
  }
}
</style>
