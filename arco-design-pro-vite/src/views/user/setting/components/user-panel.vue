<template>
  <a-card :bordered="false">
    <a-space :size="54">
      <a-upload
        action="/"
        list-type="picture-card"
        :file-list="fileList"
        :limit="1"
      >
        <template #upload-item="{ fileItem }">
          <a-avatar :size="100" class="info-avatar">
            <template #trigger-icon>
              <icon-camera />
            </template>
            <img v-if="fileItem.url" :src="fileItem.url" />
            <icon-plus v-else />
          </a-avatar>
        </template>
      </a-upload>
      <a-descriptions
        :data="renderData"
        :column="2"
        align="right"
        layout="inline-horizontal"
        :label-style="{
          width: '140px',
          fontWeight: 'normal',
          color: 'rgb(var(--gray-8))',
        }"
        :value-style="{
          width: '200px',
          paddingLeft: '8px',
          textAlign: 'left',
        }"
      >
        <template #label="{ label }">{{ $t(label) }} :</template>
        <template #value="{ value, data }">
          <a-tag
            v-if="data.label === 'userSetting.label.certification'"
            color="green"
            size="small"
          >
            已认证
          </a-tag>
          <span v-else>{{ value }}</span>
        </template>
      </a-descriptions>
    </a-space>
  </a-card>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { useStore } from '@/store';

export default defineComponent({
  setup() {
    const store = useStore();
    const file = {
      uid: '-2',
      name: 'avatar.png',
      url: store.getters.userInfo.avatar,
    };
    const fileList = ref([file]);
    const { name, certification, accountId, phone, registrationDate } =
      store.getters.userInfo;
    const renderData = [
      {
        label: 'userSetting.label.name',
        value: name,
      },
      {
        label: 'userSetting.label.certification',
        value: certification,
      },
      {
        label: 'userSetting.label.accountId',
        value: accountId,
      },
      {
        label: 'userSetting.label.phone',
        value: phone,
      },
      {
        label: 'userSetting.label.registrationDate',
        value: registrationDate,
      },
    ];
    return {
      fileList,
      renderData,
    };
  },
});
</script>

<style scoped lang="less">
.arco-card {
  padding: 14px 0 4px 4px;
  border-radius: 4px;
}
:deep(.arco-avatar-trigger-icon-button) {
  width: 32px;
  height: 32px;
  line-height: 32px;
  background-color: #e8f3ff;
  .arco-icon-camera {
    margin-top: 8px;
    color: rgb(var(--arcoblue-6));
    font-size: 14px;
  }
}
</style>
