<template>
  <div class="container">
    <Breadcrumb :items="['menu.exception', 'menu.exception.404']" />
    <div class="content">
      <a-result
        class="result"
        status="404"
        :subtitle="$t('exception.result.404.description')"
      >
      </a-result>
      <div class="operation-row">
        <a-button key="again" style="margin-right: 16px">
          {{ $t('exception.result.404.retry') }}
        </a-button>
        <a-button key="back" type="primary">
          {{ $t('exception.result.404.back') }}
        </a-button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({});
</script>
