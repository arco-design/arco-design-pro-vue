<template>
  <div>
    <RecentProject />
    <LatestActivity />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import RecentProject from './recent-project.vue';
import LatestActivity from './latest-activity.vue';

export default defineComponent({
  components: {
    RecentProject,
    LatestActivity,
  },
});
</script>
