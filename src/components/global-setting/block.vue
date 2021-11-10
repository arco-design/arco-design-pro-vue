<template>
  <div class="block">
    <h5 class="title">{{ title }}</h5>
    <div v-for="option in options" :key="option.name" class="switch-wrapper">
      <span>{{ $t(option.name) }}</span>
      <a-input-number
        v-if="option.type === 'number'"
        :style="{ width: '80px' }"
        size="small"
      />
      <a-switch
        v-else
        :default-checked="!!option.value"
        size="small"
        @change="handleChange"
      />
    </div>
  </div>
</template>
<script setup lang="ts">
import { withDefaults } from 'vue';

interface Props {
  title: string;
  options: {
    name: string;
    value: string;
    type?: string;
  }[];
}
// eslint-disable-next-line no-undef
withDefaults(defineProps<Props>(), {
  title: '',
  options: () => [],
});
const handleChange = (val: boolean) => {
  console.log(val);
};
</script>
<style scoped lang="less">
.block {
  margin-bottom: 24px;
}

.title {
  font-size: 14px;
  padding: 0;
  margin: 10px 0;
}

.switch-wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 32px;
}
</style>
