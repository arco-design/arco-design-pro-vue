<template>
  <router-view></router-view>
  <global-setting />
</template>
<script>
import { defineComponent } from 'vue';
import GlobalSetting from '@/components/global-setting/index.vue';

export default defineComponent({
  components: {
    GlobalSetting,
  },
});
</script>
