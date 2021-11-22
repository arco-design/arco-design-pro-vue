<template>
  <div class="container">
    <a-breadcrumb style="margin-bottom: 20px">
      <a-breadcrumb-item>{{ $t('menu.list') }}</a-breadcrumb-item>
      <a-breadcrumb-item>{{ $t('menu.list.searchTable') }}</a-breadcrumb-item>
    </a-breadcrumb>
    <a-card :bordered="false">
      <div class="toolbar">
        <div>
          <a-button type="primary">{{ $t('searchTable.addPolicy') }}</a-button>
        </div>
        <div>
          <a-range-picker style="margin-right: 8px" @change="onDateChange" />
          <a-input-search
            style="width: 300px"
            search-button
            :placeholder="$t('searchTable.placeholder.name')"
            @search="onSearch"
          />
        </div>
      </div>
      <a-table
        row-key="id"
        :loading="loading"
        :pagination="pagination"
        :data="data"
        @pageChange="onPageChange"
      >
        <template #columns>
          <a-table-column
            v-for="item in columns"
            :key="item.dataIndex"
            :title="item.title"
            :data-index="item.dataIndex"
          >
            <template
              v-if="['workflow', 'operations'].includes(item.dataIndex)"
              #cell="{ record }"
            >
              <a-typography-text
                v-if="item.dataIndex === 'workflow'"
                copyable
                >{{ record.workflow }}</a-typography-text
              >
              <div
                v-else-if="item.dataIndex === 'operations'"
                class="operations"
              >
                <a-button type="text" size="small">
                  {{ $t('searchTable.columns.operations.view') }}
                </a-button>
                <a-button type="text" size="small">
                  {{ $t('searchTable.columns.operations.update') }}
                </a-button>
                <a-button type="text" status="danger" size="small">
                  {{ $t('searchTable.columns.operations.delete') }}
                </a-button>
              </div>
            </template>
          </a-table-column>
        </template>
      </a-table>
    </a-card>
  </div>
</template>
<script lang="ts">
import { defineComponent, computed, ref, reactive } from 'vue';
import { useI18n } from 'vue-i18n';
import useLoading from '@/hooks/loading';
import { queryPolicyList } from '@/api/list';

export default defineComponent({
  setup() {
    const { loading, setLoading } = useLoading(true);
    const { t } = useI18n();
    const data = ref([]);
    const basePagination = {
      page: 1,
      pageSize: 20,
    };
    const pagination = reactive({
      ...basePagination,
    });
    const columns = computed(() => [
      {
        title: t('searchTable.columns.name'),
        dataIndex: 'name',
      },
      {
        title: t('searchTable.columns.workflow'),
        dataIndex: 'workflow',
      },
      {
        title: t('searchTable.columns.period'),
        dataIndex: 'period',
      },
      {
        title: t('searchTable.columns.statistic'),
        dataIndex: 'statistic',
      },
      {
        title: t('searchTable.columns.createdTime'),
        dataIndex: 'createdTime',
      },
      {
        title: t('searchTable.columns.deadline'),
        dataIndex: 'deadline',
      },
      {
        title: t('searchTable.columns.operations'),
        dataIndex: 'operations',
      },
    ]);
    const api = (params = { page: 1, pageSize: 20 }) => {
      setLoading(true);
      queryPolicyList(params)
        .then((res) => {
          data.value = res.data.list;
          pagination.page = params.page;
          pagination.total = res.data.total;
        })
        .finally(() => {
          setLoading(false);
        });
    };
    const onDateChange = () => {
      api();
    };
    const onSearch = (keyword) => {
      api({ ...basePagination, keyword });
    };
    const onPageChange = (page: number) => {
      api({ ...basePagination, page });
    };

    const init = () => {
      api();
    };
    init();

    return {
      loading,
      onDateChange,
      onSearch,
      onPageChange,
      columns,
      data,
      pagination,
    };
  },
});
</script>
<style scoped lang="less">
.toolbar {
  display: flex;
  justify-content: space-between;
  margin-bottom: 24px;
}
</style>
