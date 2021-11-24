<template>
  <div class="chat-list">
    <ChatItem v-for="item in renderList" :key="item.id" :item-data="item" />
    <a-result v-if="!renderList.length" status="404" />
  </div>
</template>
<script lang="ts">
import { defineComponent, PropType } from 'vue';
import ChatItem, { ChatItemRecord } from './chat-item.vue';

export default defineComponent({
  components: {
    ChatItem,
  },
  props: {
    renderList: {
      type: Array as PropType<ChatItemRecord[]>,
      default() {
        return [];
      },
    },
  },

  setup() {
    //
  },
});
</script>
<style scoped lang="less">
.chat-item {
  font-size: 12px;
  line-height: 20px;
  padding: 8px;
  border-radius: 2px;

  &-footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &-actions {
    display: flex;
    opacity: 0;

    &-item {
      margin-right: 4px;
      font-size: 14px;
      color: var(--color-text-3);
      width: 20px;
      height: 20px;
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;

      &:hover {
        background-color: rgb(var(--gray-3));
      }

      &:last-child {
        margin-right: 0;
      }
    }
  }

  &-collected {
    .message-item-actions-collect {
      color: rgb(var(--gold-6));
    }
  }

  &:hover {
    background-color: rgb(var(--gray-2));

    .message-item-actions {
      opacity: 1;
    }
  }
}
</style>
