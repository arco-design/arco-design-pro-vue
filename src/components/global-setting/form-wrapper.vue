<template>
  <a-input-number
    v-if="type === 'number'"
    :style="{ width: '80px' }"
    size="small"
    :default-value="defaultValue"
    @change="handleChange"
  />
  <a-switch
    v-else
    :default-checked="defaultValue"
    size="small"
    @change="handleChange"
  />
</template>

<script lang="ts">
import { SetupContext } from 'vue';

export default {
  props: {
    type: {
      type: String,
      default: '',
    },
    name: {
      type: String,
      default: '',
    },
    defaultValue: {
      type: [String, Boolean, Number],
      default: '',
    },
  },
  emits: ['change'],
  setup(props, { emit }: SetupContext) {
    const handleChange = (value: string | boolean | number) => {
      emit('change', {
        value,
        key: props.name,
      });
    };
    return {
      handleChange,
    };
  },
};
</script>
