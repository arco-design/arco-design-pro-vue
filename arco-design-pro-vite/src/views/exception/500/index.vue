<template>
  <div class="container">
    <Breadcrumb :items="['menu.exception', 'menu.exception.500']" />
    <div class="content">
      <a-result
        class="result"
        status="500"
        :subtitle="$t('exception.result.500.description')"
      />
      <a-button key="back" type="primary">
        {{ $t('exception.result.500.back') }}
      </a-button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({});
</script>

<style lang="less" scoped></style>
