<template>
  <div class="block">
    <h5 class="title">{{ title }}</h5>
    <div v-for="option in options" :key="option.name" class="switch-wrapper">
      <span>{{ $t(option.name) }}</span>
      <form-wrapper
        :type="option.type || 'switch'"
        :name="option.key"
        :default-value="option.defaultVal"
        @input-change="handleChange"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { useAppStore } from '@/store';
import FormWrapper from './form-wrapper.vue';

interface OptionsProps {
  name: string;
  key: string;
  type?: string;
  defaultVal?: boolean | string | number;
}

export default defineComponent({
  components: {
    FormWrapper,
  },
  props: {
    title: {
      type: String,
      default: '',
    },
    options: {
      type: Array as PropType<OptionsProps[]>,
      default() {
        return [];
      },
    },
  },
  setup() {
    const appStore = useAppStore();
    const handleChange = ({ key, value }: { key: string; value: unknown }) => {
      if (value && key === 'colorWeek') {
        document.body.style.filter = 'invert(80%)';
      }
      if (!value && key === 'colorWeek') {
        document.body.style.filter = 'none';
      }
      appStore.updateSettings({ [key]: value });
    };
    return {
      handleChange,
    };
  },
});
</script>

<style scoped lang="less">
.block {
  margin-bottom: 24px;
}

.title {
  margin: 10px 0;
  padding: 0;
  font-size: 14px;
}

.switch-wrapper {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 32px;
}
</style>
