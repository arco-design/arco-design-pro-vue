<template>
  <a-spin :loading="loading" style="width: 100%">
    <EnterpriseCertification :enterprise-info="data.enterpriseInfo" />
    <CertificationRecords :render-data="data.record" />
  </a-spin>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import {
  queryCertification,
  UnitCertification,
  EnterpriseCertificationModel,
} from '@/api/user-center';
import useLoading from '@/hooks/loading';
import EnterpriseCertification from './enterprise-certification.vue';
import CertificationRecords from './certification-records.vue';

export default defineComponent({
  components: {
    EnterpriseCertification,
    CertificationRecords,
  },
  setup() {
    const { loading, setLoading } = useLoading(true);
    const data = ref<UnitCertification>({
      enterpriseInfo: {} as EnterpriseCertificationModel,
      record: [],
    });
    const fetchData = async () => {
      try {
        const { data: resData } = await queryCertification();
        data.value = resData;
      } catch (err) {
        // you can report use errorHandler or other
      } finally {
        setLoading(false);
      }
    };
    fetchData();
    return {
      loading,
      data,
    };
  },
});
</script>

<style scoped lang="less"></style>
