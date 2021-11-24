<template>
  <div :class="['chat-item', itemData.isCollect ? 'chat-item-collected' : '']">
    <a-space :size="4" direction="vertical" style="width: 100%">
      <a-typography-text type="warning">
        {{ itemData.username }}
      </a-typography-text>
      <a-typography-text>{{ itemData.content }}</a-typography-text>
      <div class="chat-item-footer">
        <div class="chat-item-time">
          <a-typography-text type="secondary">
            {{ itemData.time }}
          </a-typography-text>
        </div>
        <div class="chat-item-actions">
          <div class="chat-item-actions-item">
            <icon-command />
          </div>
          <div class="chat-item-actions-item chat-item-actions-collect">
            <icon-star />
          </div>
        </div>
      </div>
    </a-space>
  </div>
</template>
<script lang="ts">
import { defineComponent, PropType } from 'vue';

export interface ChatItemRecord {
  id: string;
  username: string;
  content: string;
  time: string;
  isCollect: boolean;
}

export default defineComponent({
  props: {
    itemData: {
      type: Object as PropType<ChatItemRecord>,
      default() {
        return {};
      },
    },
  },
  setup() {
    return {
      // cs,
    };
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
    .chat-item-actions-collect {
      color: rgb(var(--gold-6));
    }
  }

  &:hover {
    background-color: rgb(var(--gray-2));

    .chat-item-actions {
      opacity: 1;
    }
  }
}
</style>
