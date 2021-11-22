<template>
  <div class="container">
    <a-result
      class="result"
      status="500"
      :subtitle="$t('exception.result.500.description')"
    />
    <a-button key="back" type="primary">
      {{ $t('exception.result.500.back') }}
    </a-button>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({});
</script>
<style scoped lang="less"></style>
