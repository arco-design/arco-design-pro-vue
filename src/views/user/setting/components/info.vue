<template>
  <a-form ref="formRef" :model="formData" class="info-form" layout="vertical">
    <a-typography-title :heading="6" class="section-title">
      {{ $t('userSetting.title.basicInfo') }}
    </a-typography-title>
    <a-form-item
      :label="$t('userSetting.label.avatar')"
      field="avatar"
      :rules="[{ required: true }]"
      trigger-prop-name="fileList"
    >
      <a-upload
        action="/"
        list-type="picture-card"
        :limit="1"
        :file-list="fileList"
        @onChange="onAvatarChange"
      >
        <!-- <a-avatar :size="64" class="info-avatar">
          <template #trigger-icon>
            <icon-camera />
          </template>
          <img v-if="avatar" :src="avatar" />
          <icon-plus v-else />
        </a-avatar> -->
      </a-upload>
    </a-form-item>
    <a-form-item
      :label="$t('userSetting.label.name')"
      field="name"
      :rules="[{ required: true }]"
    >
      <a-input v-model="formData.name" />
    </a-form-item>
    <a-form-item
      :label="$t('userSetting.label.location')"
      field="location"
      :rules="[{ required: true }]"
    >
      <a-select v-model="formData.location">
        <a-option key="beijing" value="beijing"> 北京 </a-option>
        <a-option key="shanghai" value="shanghai"> 上海 </a-option>
        <a-option key="hangzhou" value="hangzhou"> 杭州 </a-option>
        <a-option key="xiamen" value="xiamen"> 厦门 </a-option>
      </a-select>
    </a-form-item>
    <a-form-item
      :label="$t('userSetting.label.introduction')"
      field="introduction"
    >
      <a-textarea v-model="formData.introduction" />
    </a-form-item>

    <a-typography-title :heading="6">
      {{ $t('userSetting.title.socialInfo') }}
    </a-typography-title>
    <a-form-item
      :label="$t('userSetting.label.personalWebsite')"
      field="personalWebsite"
    >
      <a-input v-model="formData.personalWebsite" />
    </a-form-item>
    <a-space>
      <a-button type="primary" :loading="loading" @click="onSaveBtnClick">
        {{ $t('userSetting.save') }}
      </a-button>
      <a-button @click="onCancelBtnClick">
        {{ $t('userSetting.cancel') }}
      </a-button>
    </a-space>
  </a-form>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';
import { Message } from '@arco-design/web-vue';
import useLoading from '@/hooks/loading';
import { saveUserInfo } from '@/api/user-center';
import { useStore } from '@/store';
import { UserState } from '@/store/modules/user';

export default defineComponent({
  setup() {
    const { loading, setLoading } = useLoading();
    const formRef = ref(null);
    const avatar = ref('');
    const formData = ref<UserState>({});
    const store = useStore();
    const file = {
      uid: '-2',
      name: '20200717-103937.png',
      url: store.getters.userInfo.avatar,
    };
    const fileList = ref([file]);
    const init = () => {
      avatar.value = store.getters.userInfo.avatar;
      formData.value = {
        ...store.getters.userInfo,
      };
    };
    const save = async () => {
      setLoading(true);
      try {
        await saveUserInfo();
        Message.success('保存成功');
      } catch (err) {
        // you can report use errorHandler or other
      } finally {
        setLoading(false);
      }
    };
    const onAvatarChange = () => {
      //
    };
    const onSaveBtnClick = async () => {
      const res = await formRef.value.validate();
      if (!res) save();
    };
    const onCancelBtnClick = () => {
      // avatar.value = store.getters.userInfo.avatar;
      fileList.value = [file];
      formData.value = {
        ...store.getters.userInfo,
      };
    };
    init();
    return {
      formRef,
      loading,
      avatar,
      formData,
      fileList,
      onAvatarChange,
      onSaveBtnClick,
      onCancelBtnClick,
    };
  },
});
</script>
<style scoped lang="less">
.info {
  &-form {
    width: 375px;
  }

  &-avatar {
    :deep(.arco-avatar-trigger-icon-button) {
      color: rgb(var(--arcoblue-6));
    }
  }
}
</style>
