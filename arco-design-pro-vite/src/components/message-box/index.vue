<template>
  <a-menu class="message-box">
    <drop-content />
  </a-menu>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import DropContent from './drop-content.vue';

export default defineComponent({
  components: {
    DropContent,
  },
});
</script>

<style scoped lang="less">
.message-box-trigger {
  width: 20px;
  padding: 16px 0;
  color: var(--color-text-1);
  text-align: center;
  cursor: pointer;

  &:hover {
    color: rgb(var(--arcoblue-6));
  }
}

.message-box {
  min-width: 352px;
  max-height: 800px;

  :deep(.arco-tabs-nav) {
    padding: 8px 0 12px 0;
    border-bottom: 1px solid var(--color-neutral-3);
  }

  :deep(.arco-tabs-nav-tab-list) {
    margin: 0 auto;
  }

  :deep(.arco-list-item-meta) {
    align-items: flex-start;
  }
}
</style>
