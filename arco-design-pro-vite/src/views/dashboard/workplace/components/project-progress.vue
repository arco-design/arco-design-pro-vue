<template>
  <a-card
    :title="$t('workplace.projectProgress')"
    :bordered="false"
    class="panel"
  >
    <a-typography-paragraph bold>Arco Design System</a-typography-paragraph>
    <a-progress :percent="0.7" :show-text="false" />
    <a-avatar-group :size="32" style="margin-top: 10px">
      <a-avatar style="background-color: #ffc72e">A</a-avatar>
      <a-avatar style="background-color: #7bc616">P</a-avatar>
      <a-avatar style="background-color: #14c9c9">Y</a-avatar>
      <a-avatar style="background-color: #168cff">Z</a-avatar>
      <a-avatar style="background-color: #ff7d00">D</a-avatar>
      <a-avatar style="background-color: #14c9c9">KK</a-avatar>
    </a-avatar-group>
  </a-card>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({});
</script>
