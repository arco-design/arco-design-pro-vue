<template>
  <a-spin style="width: 100%" :loading="loading">
    <a-tabs type="rounded" destroy-on-hide @change="tabChange">
      <a-tab-pane v-for="item in tabList" :key="item.key">
        <template #title>
          <span>
            <component :is="item.titleIcon" />
            {{ item.title }}{{ formatUnreadLength(item.key) }}
          </span>
        </template>
        <List
          :render-list="renderList"
          :unread-count="unreadCount"
          @itemClick="handleItemClick"
        />
      </a-tab-pane>
    </a-tabs>
  </a-spin>
</template>
<script lang="ts">
import { defineComponent, ref, reactive, toRefs, computed } from 'vue';
import { useI18n } from 'vue-i18n';
import { queryMessageList, setMessageStatus } from '@/api/message';
import List, { MessageListType } from './list.vue';
import useLoading from '@/hooks/loading';

interface TabItem {
  key: string;
  title: string;
  titleIcon: string;
  avatar?: string;
}
export default defineComponent({
  components: {
    List,
  },
  setup() {
    const { loading, setLoading } = useLoading(true);
    const messageType = ref('message');
    const unReadLength = ref(0);
    const { t } = useI18n();
    const messageData = reactive({
      renderList: [],
      messageList: [],
    });
    const refData = toRefs(messageData);
    const tabList: TabItem = [
      {
        key: 'message',
        title: t('messageBox.tab.title.message'),
        titleIcon: 'icon-message',
      },
      {
        key: 'notice',
        title: t('messageBox.tab.title.notice'),
        titleIcon: 'icon-customer-service',
      },
      {
        key: 'approve',
        title: t('messageBox.tab.title.approve'),
        titleIcon: 'icon-file',
      },
    ];
    async function fetchSourceData() {
      setLoading(true);
      try {
        const { data } = await queryMessageList();
        messageData.messageList = data;
      } catch (err) {
        // you can report use errorHandler or other
      } finally {
        setLoading(false);
      }
    }
    async function readMessage(data: MessageListType) {
      const ids = data.map((item) => item.id);
      await setMessageStatus({ ids });
      fetchSourceData();
    }
    const renderList = computed(() => {
      return messageData.messageList.filter(
        (item) => messageType.value === item.type
      );
    });
    const unreadCount = computed(() => {
      return renderList.value.filter((item) => !item.status).length;
    });
    const getUnreadList = (type) => {
      const list = messageData.messageList.filter(
        (item) => item.type === type && !item.status
      );
      return list;
    };
    const formatUnreadLength = (type) => {
      const list = getUnreadList(type);
      return list.length ? `(${list.length})` : ``;
    };
    const handleItemClick = (items) => {
      readMessage([...items]);
    };
    const tabChange = (val) => {
      messageType.value = val;
    };
    fetchSourceData();
    return {
      loading,
      tabList,
      ...refData,
      renderList,
      tabChange,
      handleItemClick,
      unReadLength,
      formatUnreadLength,
      unreadCount,
    };
  },
});
</script>
<style scoped lang="less"></style>
