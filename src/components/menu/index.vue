<script lang="ts">
import { h } from 'vue';

// const { createApp, h } = Vue;
export default {
  props: {
    routes: {
      default() {
        return [];
      },
      type: Array,
    },
  },
  render() {
    return h(
      `h1`, // 标签名
      {}, // prop 或 attribute
      '11111' // 包含其子节点的数组
    );
  },
};
</script>
<style scoped lang="less"></style>
