<template>
  <a-dropdown trigger="click" position="br">
    <div class="message-box-trigger">
      <a-badge :count="9" dot>
        <icon-notification />
      </a-badge>
    </div>
    <template #content>
      <a-menu class="message-box">
        <drop-content />
      </a-menu>
    </template>
  </a-dropdown>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import DropContent from './drop-content.vue';

export default defineComponent({
  components: {
    DropContent,
  },
  setup() {
    // console.log(props);
  },
});
</script>
<style scoped lang="less">
.message-box-trigger {
  padding: 16px 0;
  width: 20px;
  text-align: center;
  cursor: pointer;
  color: var(--color-text-1);

  &:hover {
    color: rgb(var(--arcoblue-6));
  }
}

.message-box {
  min-width: 352px;
  max-height: 800px;

  :global(.arco-tabs-nav) {
    padding: 8px 0 12px 0;
    border-bottom: 1px solid var(--color-neutral-3);
  }

  :global(.arco-tabs-nav-tab-list) {
    // 消费记录会影响到 message与其互斥。TODO：解决样式写法
    margin: 0 auto;
  }

  :global(.arco-list-item-meta) {
    align-items: flex-start;
  }
}
</style>
