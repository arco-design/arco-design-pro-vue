<template>
  <a-card class="general-card" :title="$t('monitor.title.studioInfo')">
    <a-form :model="info" layout="vertical">
      <a-form-item :label="$t('monitor.studioInfo.label.studioTitle')" required>
        <a-input
          :placeholder="`王立群${$t(
            'monitor.studioInfo.placeholder.studioTitle'
          )}`"
        />
      </a-form-item>
      <a-form-item
        :label="$t('monitor.studioInfo.label.onlineNotification')"
        required
      >
        <a-textarea />
      </a-form-item>
      <a-form-item
        :label="$t('monitor.studioInfo.label.studioCategory')"
        required
      >
        <a-input-search />
      </a-form-item>
      <a-form-item
        :label="$t('monitor.studioInfo.label.studioCategory')"
        required
      >
        <a-input-search />
      </a-form-item>
    </a-form>
    <a-button type="primary">{{ $t('monitor.studioInfo.btn.fresh') }}</a-button>
  </a-card>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  setup() {
    return {
      info: {},
    };
  },
});
</script>
