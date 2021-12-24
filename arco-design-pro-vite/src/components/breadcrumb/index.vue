<template>
  <a-breadcrumb class="container-breadcrumb">
    <a-breadcrumb-item>
      <icon-home />
    </a-breadcrumb-item>
    <a-breadcrumb-item v-for="item in items" :key="item">
      {{ $t(item) }}
    </a-breadcrumb-item>
  </a-breadcrumb>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';

export default defineComponent({
  props: {
    items: {
      type: Array as PropType<string[]>,
      default() {
        return [];
      },
    },
  },
});
</script>

<style scoped lang="less">
.container-breadcrumb {
  margin-bottom: 20px;
}
</style>
