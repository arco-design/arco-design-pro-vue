<template>
  <div class="list">
    <div
      v-for="(item, idx) in renderData"
      :key="idx"
      :class="['box', item.type === 'up' ? 'box--up' : 'box--down']"
      :style="{ width: `${100 / renderData.length}%` }"
    >
      <div class="box-inner">
        <a-statistic :title="item.title" :value="item.value" group-separator>
          <template #prefix>
            <span class="box__icon">
              <icon-code />
            </span>
          </template>
          <template #suffix>
            {{ item.unit }}
          </template>
        </a-statistic>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import { useI18n } from 'vue-i18n';

export default defineComponent({
  setup() {
    const { t } = useI18n();
    const renderData = [
      {
        title: t('dataAnalysis.downstream'),
        value: 125670,
        unit: 'b',
        type: 'down',
      },
      {
        title: t('dataAnalysis.downstream'),
        value: 125670,
        unit: 'b',
        type: 'down',
      },
      {
        title: t('dataAnalysis.upstream'),
        value: 125670,
        unit: 'b',
        type: 'up',
      },
      {
        title: t('dataAnalysis.downstream'),
        value: 125670,
        unit: 'b',
        type: 'down',
      },
      {
        title: t('dataAnalysis.downstream'),
        value: 125670,
        unit: 'b',
        type: 'down',
      },
    ];
    return {
      renderData,
    };
  },
});
</script>
<style scoped lang="less">
.list {
  width: 100%;
  display: flex;
  justify-content: space-between;
}

.box {
  height: 98px;
  box-sizing: border-box;
  padding-right: 16px;

  &:last-child {
    padding-right: 0;
  }

  &-inner {
    border: 1px solid var(--color-border);
    border-radius: 4px;
    padding: 16px;
  }

  &__icon {
    width: 14.4px;
    height: 12.96px;
    line-height: 12.96px;
    text-align: center;
    font-size: 10px;
    color: var(--color-white);
    display: inline-block;
    border-radius: 2px;
    vertical-align: middle;
  }

  &--up {
    .box__icon {
      background-color: #175dff;
    }
  }

  &--down {
    .box__icon {
      background-color: #0fc6c2;
    }
  }
}
</style>
