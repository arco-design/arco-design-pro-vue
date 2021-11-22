<template>
  <router-view />
</template>
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  setup() {
    //
  },
});
</script>
<style scoped lang="less">
.container {
  position: relative;
  background-color: var(--color-bg-1);
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
}
</style>
