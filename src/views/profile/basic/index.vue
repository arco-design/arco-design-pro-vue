<template>
  <div class="container">
    <a-breadcrumb class="container-breadcrumb">
      <a-breadcrumb-item>{{ $t('menu.profile') }}</a-breadcrumb-item>
      <a-breadcrumb-item>{{ $t('menu.profile.basic') }}</a-breadcrumb-item>
    </a-breadcrumb>
    <a-card :bordered="false">
      <a-row justify="space-between" align="center" style="margin-bottom: 24px">
        <a-col :span="16">
          <a-typography-title :heading="6" style="margin: 0">
            王力群{{ $t('basicProfile.title.form') }}
          </a-typography-title>
        </a-col>
        <a-col :span="8" style="text-align: right">
          <a-space>
            <a-button size="mini" type="primary">
              {{ $t('basicProfile.goBack') }}
            </a-button>
            <a-button size="mini">{{ $t('basicProfile.cancel') }}</a-button>
          </a-space>
        </a-col>
      </a-row>
      <a-spin :loading="loading" style="width: 100%">
        <a-steps :current="step" line-less class="steps">
          <a-step>{{ $t('basicProfile.steps.commit') }}</a-step>
          <a-step>{{ $t('basicProfile.steps.approval') }}</a-step>
          <a-step>{{ $t('basicProfile.steps.finish') }}</a-step>
        </a-steps>
        <ProfileItem
          :title="$t('basicProfile.title.currentParams')"
          :render-data="currentData"
          style="margin-top: 24px"
        />
      </a-spin>
      <a-spin :loading="preLoading" style="width: 100%">
        <ProfileItem
          :title="$t('basicProfile.title.originParams')"
          :render-data="preData"
          style="margin-top: 24px"
        />
      </a-spin>
    </a-card>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';
import useLoading from '@/hooks/loading';
import { queryProfileBasic, ProfileBasicRes } from '@/api/profile';
import ProfileItem from './components/profile-item.vue';

export default defineComponent({
  components: {
    ProfileItem,
  },
  setup() {
    const { loading, setLoading } = useLoading(true);
    const { loading: preLoading, setLoading: preSetLoading } = useLoading(true);
    const currentData = ref<ProfileBasicRes>({} as ProfileBasicRes);
    const preData = ref<ProfileBasicRes>({} as ProfileBasicRes);
    const step = ref(2);
    const fetchCurrentData = async () => {
      try {
        const { data } = await queryProfileBasic();
        currentData.value = data;
      } catch (err) {
        // you can report use errorHandler or other
      } finally {
        setLoading(false);
      }
    };
    const fetchPreData = async () => {
      try {
        const { data } = await queryProfileBasic();
        preData.value = data;
      } catch (err) {
        // you can report use errorHandler or other
      } finally {
        preSetLoading(false);
      }
    };
    fetchCurrentData();
    fetchPreData();
    return {
      loading,
      preLoading,
      step,
      currentData,
      preData,
    };
  },
});
</script>
<style scoped lang="less">
.container {
  padding: 20px;
}

.steps {
  max-width: 548px;
  margin: 0 auto;
}

.itemContainer {
  padding: 24px;
  background: rgb(var(--gray-1));
}
</style>
