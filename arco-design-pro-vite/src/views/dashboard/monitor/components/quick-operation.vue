<template>
  <a-card :bordered="false">
    <a-typography-title style="margin: 0 0 16px 0" :heading="6">
      {{ $t('monitor.title.quickOperation') }}
    </a-typography-title>
    <a-space direction="vertical" fill :size="10">
      <a-button long>
        {{ $t('monitor.quickOperation.changeClarity') }}
        <template #icon>
          <IconTags />
        </template>
      </a-button>
      <a-button long>
        {{ $t('monitor.quickOperation.switchStream') }}
        <template #icon>
          <IconSwap />
        </template>
      </a-button>
      <a-button long>
        {{ $t('monitor.quickOperation.removeClarity') }}
        <template #icon>
          <IconStop />
        </template>
      </a-button>
      <a-button long>
        {{ $t('monitor.quickOperation.pushFlowGasket') }}
        <template #icon>
          <IconArrowRight />
        </template>
      </a-button>
    </a-space>
  </a-card>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({});
</script>
