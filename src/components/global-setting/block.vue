<template>
  <div class="block">
    <h5 class="title">{{ title }}</h5>
    <div v-for="option in options" :key="option.name" class="switch-wrapper">
      <span>{{ $t(option.name) }}</span>
      <form-wrapper
        :type="option.type || 'switch'"
        :name="option.key"
        :default-value="option.defaultVal"
        @change="handleChange"
      />
    </div>
  </div>
</template>
<script setup lang="ts">
import { withDefaults, defineProps } from 'vue';
import store from '@/store';
import { M_APP_UPDATE_SETTING } from '@/store/modules/mutation-type';
import FormWrapper from './form-wrapper.vue';

interface Props {
  title: string;
  options: {
    name: string;
    value: string;
    type?: string;
  }[];
}

withDefaults(defineProps<Props>(), {
  title: '',
  options: () => [],
});
const handleChange = ({ key, value }) => {
  store.commit(M_APP_UPDATE_SETTING, { key, value });
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
