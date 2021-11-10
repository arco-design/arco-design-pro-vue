<template>
  <router-view></router-view>
  <global-setting />
</template>
<script>
import GlobalSetting from '@/components/global-setting/index.vue';

export default {
  components: {
    GlobalSetting,
  },
};
</script>
