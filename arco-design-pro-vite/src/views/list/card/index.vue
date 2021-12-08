<template>
  <div class="container">
    <a-breadcrumb class="container-breadcrumb">
      <a-breadcrumb-item>{{ $t('menu.list') }}</a-breadcrumb-item>
      <a-breadcrumb-item>{{ $t('menu.list.cardList') }}</a-breadcrumb-item>
    </a-breadcrumb>
    <a-row :gutter="20" align="stretch">
      <a-col :span="18">
        <CardContent />
      </a-col>
      <a-col :span="6">
        <div class="right-content">
          <AppPanel />
          <Announcement />
        </div>
      </a-col>
    </a-row>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import CardContent from './components/card-content.vue';
import AppPanel from './components/app-panel.vue';
import Announcement from './components/announcement.vue';

export default defineComponent({
  components: {
    CardContent,
    AppPanel,
    Announcement,
  },
  setup() {
    //
  },
});
</script>

<style scoped lang="less">
.container {
  padding: 20px;

  :deep(.arco-list-content) {
    overflow-x: hidden;
  }

  :deep(.arco-card-meta-title) {
    font-size: 14px;
  }
}

.right-content {
  display: flex;
  flex-direction: column;
  align-items: stretch;
  height: 100%;

  &__item {
    &:last-child {
      flex: 1;
    }
  }
}
</style>
