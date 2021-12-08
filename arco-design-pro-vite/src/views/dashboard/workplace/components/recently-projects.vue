<template>
  <a-card
    :title="$t('workplace.recently.projects')"
    hoverable
    :bordered="false"
    class="panel"
  >
    <template #extra>
      <a-link>{{ $t('workplace.allProject') }}</a-link>
    </template>
    <a-card :bordered="false">
      <a-card-grid
        v-for="(item, idx) in list"
        :key="idx"
        hoverable
        style="width: 50%"
      >
        <a-card title="Arco Design" :bordered="false">
          Arco Design Team
        </a-card>
      </a-card-grid>
    </a-card>
  </a-card>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  setup() {
    const list = Array(4).fill(null);
    return { list };
  },
});
</script>
