<template>
  <a-card
    :title="$t('workplace.recently.visited')"
    hoverable
    :bordered="false"
    class="panel"
  >
    <a-row :gutter="8">
      <a-col :span="12" style="margin-bottom: 8px">
        <Content />
      </a-col>
      <a-col :span="12" style="margin-bottom: 8px">
        <Content />
      </a-col>
      <a-col :span="12">
        <Content />
      </a-col>
      <a-col :span="12">
        <Content />
      </a-col>
    </a-row>
  </a-card>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import Content from './recently-visited-content.vue';

export default defineComponent({
  components: {
    Content,
  },
  setup() {
    //
  },
});
</script>
<style scoped lang="less"></style>
