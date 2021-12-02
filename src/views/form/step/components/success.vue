<template>
  <div class="success-wrap">
    <a-result
      status="success"
      :title="$t('stepForm.success.title')"
      :subtitle="$t('stepForm.success.subTitle')"
    />
    <a-button
      key="again"
      type="secondary"
      style="margin-right: 16px"
      @click="oneMore"
    >
      {{ $t('stepForm.button.again') }}
    </a-button>
    <a-button key="view" type="primary">
      {{ $t('stepForm.button.view') }}
    </a-button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  emits: ['changeStep'],
  setup(props, ctx) {
    const oneMore = () => {
      ctx.emit('changeStep', 1);
    };
    return {
      oneMore,
    };
  },
});
</script>

<style scoped lang="less">
.success-wrap {
  text-align: center;
}
</style>
