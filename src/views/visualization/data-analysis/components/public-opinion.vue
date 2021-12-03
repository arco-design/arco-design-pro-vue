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
  display: flex;
  justify-content: space-between;
  width: 100%;
}

.box {
  box-sizing: border-box;
  height: 98px;
  padding-right: 16px;

  &:last-child {
    padding-right: 0;
  }

  &-inner {
    padding: 16px;
    border: 1px solid var(--color-border);
    border-radius: 4px;
  }

  &__icon {
    display: inline-block;
    width: 14.4px;
    height: 12.96px;
    color: var(--color-white);
    font-size: 10px;
    line-height: 12.96px;
    text-align: center;
    vertical-align: middle;
    border-radius: 2px;
  }

  &__icon {
    margin-right: 6px;
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
