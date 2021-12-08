<template>
  <a-col :span="24" class="panel" style="padding: 16px">
    <a-row>
      <a-col :span="6">
        <a-statistic :title="$t('workplace.encodeTime')" :value="3735">
          <template #suffix>
            {{ $t('workplace.minute') }}
          </template>
        </a-statistic>
      </a-col>
      <a-col :span="6">
        <a-statistic
          :title="$t('workplace.upstream')"
          :value="124567"
          suffix="GB"
        >
          <template #suffix> GB </template>
        </a-statistic>
      </a-col>
      <a-col :span="6">
        <a-statistic :title="$t('workplace.downstream')" :value="24335">
          <template #suffix> GB </template>
        </a-statistic>
      </a-col>
      <a-col :span="6">
        <a-statistic :title="$t('workplace.overview')" :value="145652">
          <template #suffix> GB </template>
        </a-statistic>
      </a-col>
    </a-row>
  </a-col>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({});
</script>
