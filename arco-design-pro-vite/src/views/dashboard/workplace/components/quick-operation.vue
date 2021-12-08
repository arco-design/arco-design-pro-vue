<template>
  <a-card :title="$t('workplace.quick.operation')" :bordered="false">
    <div style="margin-bottom: -1rem">
      <a-row :gutter="4">
        <a-col
          v-for="(link, idx) in links"
          :key="idx"
          :span="8"
          class="wrapper"
        >
          <div class="icon">
            <icon-robot />
          </div>
          <a-typography-paragraph class="text">{{
            $t(link)
          }}</a-typography-paragraph>
        </a-col>
      </a-row>
    </div>
  </a-card>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

const links = [
  'workplace.test.performance',
  'workplace.test.stability',
  'workplace.test.unit',
  'workplace.test.release',
  'workplace.test.security',
  'workplace.test.memory',
  'workplace.crontab',
  'workplace.dataManagement',
  'workplace.log',
];

export default defineComponent({
  setup() {
    return {
      links,
    };
  },
});
</script>

<style scoped lang="less">
.text {
  font-size: 12px;
  text-align: center;
}

.wrapper {
  text-align: center;
  cursor: pointer;

  &:last-child {
    .text {
      margin-bottom: 0;
    }
  }
}

.icon {
  display: inline-block;
  width: 24px;
  height: 24px;
  margin-bottom: 8px;
  color: #fff;
  line-height: 24px;
  text-align: center;
  background-color: rgb(var(--cyan-6));
  border-radius: 4px;
}
</style>
