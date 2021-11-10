<template>
  <a-dropdown trigger="click" position="br">
    <div class="message-box-trigger">
      <a-badge :count="9" dot>
        <icon-notification />
      </a-badge>
    </div>
    <template #content>
      <a-menu class="message-box">
        <!-- <DropContent /> -->
      </a-menu>
    </template>
  </a-dropdown>
</template>
<script lang="ts">
export default {
  setup(props) {
    console.log(props);
  },
};
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

  :global(.arco-tabs-header-nav) {
    padding: 8px 0 12px 0;
    border-bottom: 1px solid var(--color-neutral-3);
  }

  :global(.arco-tabs-header) {
    margin: 0 auto;
  }

  :global(.arco-list-item-meta) {
    align-items: flex-start;
  }
}
</style>
