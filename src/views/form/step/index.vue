<template>
  <div class="container">
    <a-breadcrumb style="margin-bottom: 20px">
      <a-breadcrumb-item>{{ $t('menu.form') }}</a-breadcrumb-item>
      <a-breadcrumb-item>{{ $t('menu.form.step') }}</a-breadcrumb-item>
    </a-breadcrumb>
    <a-spin :loading="loading" style="width: 100%">
      <div class="wrapper">
        <a-steps label-placement="vertical" class="steps" :current="step">
          <a-step
            :title="$t('stepForm.step.title.baseInfo')"
            :description="$t('stepForm.step.subTitle.baseInfo')"
          />
          <a-step
            :title="$t('stepForm.step.title.target')"
            :description="$t('stepForm.step.subTitle.target')"
          />
          <a-step
            :title="$t('stepForm.step.title.finish')"
            :description="$t('stepForm.step.subTitle.finish')"
          />
        </a-steps>
        <BaseInfo
          v-if="step === 1"
          :source-data="sourceData"
          @changeStep="changeStep"
        />
        <Service
          v-else-if="step === 2"
          :source-data="sourceData"
          @changeStep="changeStep"
        />
        <Success v-else-if="step === 3" @changeStep="changeStep" />
      </div>
    </a-spin>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';
import useLoading from '@/hooks/loading';
import { queryStepForm } from '@/api/form';
import BaseInfo from './components/base-info.vue';
import Service from './components/service.vue';
import Success from './components/success.vue';

export default defineComponent({
  components: {
    BaseInfo,
    Service,
    Success,
  },
  setup() {
    const { loading, setLoading } = useLoading(true);
    const step = ref(1);
    const sourceData = ref({});
    const init = () => {
      queryStepForm()
        .then((res) => {
          sourceData.value = res.data;
        })
        .finally(() => {
          setLoading(false);
        });
    };
    init();
    const changeStep = (direction: string | number) => {
      if (typeof direction === 'number') {
        step.value = direction;
        return;
      }
      if (direction === 'forward') {
        step.value += 1;
      } else if (direction === 'backward') {
        step.value -= 1;
      }
    };
    return {
      loading,
      step,
      sourceData,
      changeStep,
    };
  },
});
</script>
<style scoped lang="less">
.container {
  padding: 20px;
}

.wrapper {
  background-color: var(--color-bg-2);
  padding: 64px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.steps {
  margin-bottom: 36px;
}

.form {
  width: 622px;
}

.form-content {
  padding: 8px 50px 0 30px;
}

.actions {
  text-align: right;
  padding: 15px 0;

  > button {
    margin-left: 8px;

    &:first-child {
      margin-left: 0;
    }
  }
}
</style>
