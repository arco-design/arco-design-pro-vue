<template>
  <div>login {{ $t('menu.dashboard') }}, {{ a }}</div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
// eslint-disable-next-line import/extensions
import { useStore } from '@/store';
// import { useStore } from 'vuex';

export default defineComponent({
  setup() {
    const store = useStore();
    console.log(store, 2222);

    return {
      a: 1,
    };
  },
  methods: {
    aa() {
      // console.log();
    },
  },
});
</script>
<style scoped></style>
