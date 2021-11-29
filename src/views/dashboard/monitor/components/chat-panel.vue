<template>
  <div class="chat-panel">
    <div class="chat-panel-header">
      <a-typography-title style="margin: 0 0 16px 0" :heading="6">
        {{ $t('monitor.title.chatPanel') }}
      </a-typography-title>
      <a-space :size="8">
        <a-select style="width: 80px" default-value="all">
          <a-option value="all">
            {{ $t('monitor.chat.options.all') }}
          </a-option>
        </a-select>
        <a-input-search
          :placeholder="$t('monitor.chat.placeholder.searchCategory')"
        />
        <a-button type="text" icon-only>
          <icon-download />
        </a-button>
      </a-space>
    </div>
    <div class="chat-panel-content">
      <a-spin :loading="loading" style="width: 100%">
        <ChatList :render-list="chatList" />
      </a-spin>
    </div>
    <div class="chat-panel-footer">
      <a-space :size="8">
        <a-Input>
          <template #suffix>
            <icon-face-smile-fill />
          </template>
        </a-Input>
        <a-button type="primary">{{ $t('monitor.chat.update') }}</a-button>
      </a-space>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';
import ChatList from './chat-list.vue';
import { queryChatList, ChatRecord } from '@/api/message';
import useLoading from '@/hooks/loading';

export default defineComponent({
  components: {
    ChatList,
  },
  setup() {
    const { loading, setLoading } = useLoading(true);
    const chatList = ref<ChatRecord[]>([]);
    const fetchData = async () => {
      try {
        const { data } = await queryChatList();
        chatList.value = data;
      } catch (err) {
        // you can report use errorHandler or other
      } finally {
        setLoading(false);
      }
    };
    fetchData();
    return {
      loading,
      chatList,
    };
  },
});
</script>
<style scoped lang="less">
.chat-panel {
  height: 100%;
  background-color: var(--color-bg-2);
  padding: 16px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;

  &-content {
    flex: 1;
    margin: 20px 0;
    box-sizing: border-box;
  }
}
</style>
