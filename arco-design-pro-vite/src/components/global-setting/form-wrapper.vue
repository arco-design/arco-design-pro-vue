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
import { defineComponent } from 'vue';

export default defineComponent({
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
  emits: ['inputChange'],
  setup(props, { emit }) {
    const handleChange = (value: unknown) => {
      emit('inputChange', {
        value,
        key: props.name,
      });
    };
    return {
      handleChange,
    };
  },
});
</script>
