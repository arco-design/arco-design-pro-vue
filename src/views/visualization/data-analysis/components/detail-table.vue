<template>
  <div>
    <a-row style="margin-bottom: 4px" align="center" justify="space-between">
      <a-col :span="20">
        <a-form :model="formModel" layout="inline">
          <a-form-item :label="$t('dataAnalysis.label.timeRange')" field="time">
            <a-range-picker v-model="formModel.time" />
          </a-form-item>
          <a-form-item
            :label="$t('dataAnalysis.label.roomNumber')"
            field="roomNumber"
          >
            <a-input v-model="formModel.roomNumber" />
          </a-form-item>
        </a-form>
      </a-col>
      <a-col :span="4" style="text-align: right">
        <a-button type="text">
          {{ $t('dataAnalysis.download') }}
          <template #icon>
            <icon-download />
          </template>
        </a-button>
      </a-col>
    </a-row>
    <a-table
      row-key="id"
      :loading="loading"
      :columns="columns"
      :data="tableData.list"
      :pagination="{
        total: tableData.total,
        current: searchParams.page,
        pageSize: searchParams.pageSize,
        showPageSize: true,
      }"
      @page-change="onTableChange"
    />
  </div>
</template>
<script lang="ts">
import {
  defineComponent,
  ref,
  computed,
  watch,
  reactive,
  h,
  compile,
} from 'vue';
import dayjs from 'dayjs';
import { useI18n } from 'vue-i18n';
import omit from 'lodash/omit';

import useLoading from '@/hooks/loading';
import {
  queryFeedbackList,
  FeedBackSearchParams,
  FeedBackSearchRes,
} from '@/api/visualization';

interface FormModel {
  roomNumber: string;
  time: [string, string];
}
export default defineComponent({
  setup() {
    const { t } = useI18n();
    const { loading, setLoading } = useLoading(true);
    const tableData = ref<FeedBackSearchRes>({ list: [], total: 0 });

    const searchParams = ref<FeedBackSearchParams>({
      page: 1,
      pageSize: 10,
      roomNumber: '#3032',
      startTime: dayjs(new Date()).subtract(1, 'day').format('YYYY-MM-DD'),
      endTime: dayjs(new Date()).format('YYYY-MM-DD'),
    });
    const columns = computed(() => [
      {
        title: t('dataAnalysis.column.userId'),
        dataIndex: 'userId',
      },
      {
        title: t('dataAnalysis.column.deviceId'),
        dataIndex: 'deviceId',
      },
      {
        title: t('dataAnalysis.column.system'),
        dataIndex: 'system',
      },
      {
        title: t('dataAnalysis.column.content'),
        dataIndex: 'content',
      },
      {
        title: t('dataAnalysis.column.time'),
        dataIndex: 'time',
      },
      {
        title: t('dataAnalysis.column.actions'),
        render: () => {
          const tmp = `<a-button type="text">${t(
            'dataAnalysis.diagnose'
          )}</a-button>`;
          return h(compile(tmp));
        },
      },
    ]);
    const formModel = reactive<FormModel>({
      roomNumber: searchParams.value.roomNumber,
      time: [searchParams.value.startTime, searchParams.value.endTime],
    });
    const search = async (params: FeedBackSearchParams) => {
      setLoading(true);
      try {
        const { data } = await queryFeedbackList(params);
        tableData.value = data;
      } catch (err) {
        // you can report use errorHandler or other
      } finally {
        setLoading(false);
      }
    };
    const formatFormValues = (values: FormModel) => {
      const time = values.time || [];

      return {
        ...omit(values, 'time'),
        startTime: time[0],
        endTime: time[1],
      };
    };
    const onTableChange = ({
      current: page,
      pageSize,
    }: {
      current: number;
      pageSize: number;
    }) => {
      searchParams.value = {
        ...searchParams.value,
        page,
        pageSize,
      };
    };
    watch(searchParams, (pre, cur) => search(cur));
    watch(formModel, (pre, cur) => {
      searchParams.value = {
        ...searchParams.value,
        ...formatFormValues(cur),
        page: 1,
      };
    });
    search(searchParams.value);
    return {
      loading,
      searchParams,
      columns,
      tableData,
      formModel,
      onTableChange,
    };
  },
});
</script>
<style scoped lang="less"></style>
