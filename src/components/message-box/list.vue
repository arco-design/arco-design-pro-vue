<template>
  <a-list :bordered="false">
    <a-list-item
      v-for="item in renderList"
      :key="item.id"
      action-layout="vertical"
      :style="{
        opacity: item.status ? 0.5 : 1,
        borderBottom: '1px solid #e5e6eb',
      }"
    >
      <div class="item-wrap" @click="onItemClick(item)">
        <a-list-item-meta>
          <template #avatar>
            <a-avatar
              shape="circle"
              :style="{ backgroundColor: item.avatar ? '' : '#0FC6C2' }"
            >
              <img v-if="item.avatar" :src="item.avatar" />
              <icon-desktop v-else />
            </a-avatar>
          </template>
          <template #title>
            <a-space :size="4">
              <span>{{ item.title }}</span>
              <a-typography-text type="secondary">
                {{ item.subTitle }}
              </a-typography-text>
            </a-space>
          </template>
          <template #description>
            <div>
              <div>{{ item.content }}</div>
              <a-typography-text type="secondary">
                {{ item.time }}
              </a-typography-text>
            </div>
          </template>
        </a-list-item-meta>
      </div>
    </a-list-item>
    <template v-if="unreadCount" #footer>
      <div class="footer-wrap">
        <a-button type="text" @click="allRead">
          {{ $t('messageBox.allRead') }}
        </a-button>
      </div>
    </template>
  </a-list>
</template>
<script lang="ts">
import { defineComponent, PropType } from 'vue';

export interface MessageItemData {
  id: string;
  title: string;
  subTitle: string;
  avatar: string;
  content: string;
  time: string;
  status: number;
}

export type MessageListType = MessageItemData[];

export default defineComponent({
  props: {
    renderList: {
      type: Array as PropType<MessageListType>,
      default() {
        return [];
      },
    },
    unreadCount: {
      type: Number,
      default: 0,
    },
  },
  emits: ['itemClick'],
  setup(props, context) {
    const allRead = () => {
      context.emit('itemClick', [...props.renderList]);
    };

    const onItemClick = (item) => {
      if (!item.status) {
        context.emit('itemClick', [item]);
      }
    };
    return {
      allRead,
      onItemClick,
    };
  },
});
</script>
<style scoped lang="less">
.item-wrap {
  cursor: pointer;
}
.footer-wrap {
  text-align: center;
}
</style>
