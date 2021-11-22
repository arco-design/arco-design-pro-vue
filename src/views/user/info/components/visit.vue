<template>
  <div>
    <a-space :size="12">
      <a-card
        v-for="visits in visitsList"
        :key="visits.name"
        :bordered="false"
        class="visits-item"
      >
        <a-statistic
          show-group-separator
          :title="visits.name"
          :value="visits.visits"
        >
          <template #suffix>
            <a-typography-text type="secondary" class="visits-unit">
              {{ $t('userInfo.visits.unit') }}
            </a-typography-text>
          </template>
        </a-statistic>
        <div>
          <a-typography-text type="secondary" class="visits-label">
            {{ $t('userInfo.visits.lastMonth') }}
          </a-typography-text>
          <a-typography-text type="danger">
            {{ visits.growth }}
            <icon-arrow-rise />
          </a-typography-text>
        </div>
      </a-card>
    </a-space>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';
import { queryVisits } from '@/api/user-center';

export default defineComponent({
  setup() {
    const visitsList = ref([]);
    const fetchData = () => {
      queryVisits().then((res) => {
        visitsList.value = res.data;
      });
    };
    fetchData();
    return {
      visitsList,
    };
  },
});
</script>
<style scoped lang="less">
.visits {
  &-item {
    width: 160px;
  }

  &-unit {
    font-size: 12px;
    padding-left: 8px;
  }

  &-label {
    font-size: 12px;
    padding-right: 8px;
  }
}
</style>
