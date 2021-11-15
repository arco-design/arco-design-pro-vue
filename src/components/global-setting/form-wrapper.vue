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
  setup(props, { emit }) {
    const handleChange = (value) => {
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
<style scoped lang="less"></style>
