<template>
  <div class="container">
    <a-result
      class="result"
      status="403"
      :subtitle="$t('exception.result.403.description')"
    />
    <a-button key="back" type="primary">
      {{ $t('exception.result.403.back') }}
    </a-button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({});
</script>
