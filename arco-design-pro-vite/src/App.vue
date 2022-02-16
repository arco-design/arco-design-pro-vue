<template>
  <router-view></router-view>
  <span id="loadingNode" class="align-loading" style="display: none">
    <a-spin tip="编译中..." />
  </span>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({});
</script>
