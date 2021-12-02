<template>
  <a-form
    ref="formRef"
    class="form"
    :model="formData"
    :label-col-props="{ span: 5 }"
    :wrapper-col-props="{ span: 19 }"
  >
    <a-typography-title style="margin: 0 0 16px 0" :heading="6">
      {{ $t('stepForm.form.title.upstream') }}
    </a-typography-title>
    <a-form-item label="P.S.M" :extra="$t('stepForm.form.extra.psm')" required>
      <a-row class="adjust" align="center" justify="space-around" :gutter="8">
        <a-col :span="16">
          <a-form-item
            :hide-asterisk="true"
            :hide-label="true"
            field="psm"
            :rules="[
              {
                required: true,
                message: $t('stepForm.form.error.psm.required'),
              },
            ]"
            style="margin-bottom: 0"
          >
            <a-input
              v-model="formData.psm"
              placeholder="Product.Subsystem.Module"
            />
          </a-form-item>
        </a-col>
        <a-col :span="8">
          <a-link>{{ $t('stepForm.link.psmDefine') }}</a-link>
        </a-col>
      </a-row>
    </a-form-item>
    <a-form-item :label="$t('stepForm.form.label.strategy')">
      <a-row class="adjust" align="center" justify="space-around" :gutter="8">
        <a-col :span="16">
          <a-form-item
            :hide-asterisk="true"
            :hide-label="true"
            field="strategy"
            style="margin-bottom: 0"
          >
            <a-select
              v-model="formData.strategy"
              :placeholder="$t('stepForm.placeholder.strategy')"
            >
              <a-option value="local">LOCAL</a-option>
              <a-option value="all">ALL</a-option>
            </a-select>
          </a-form-item>
        </a-col>
        <a-col :span="8">
          <a-link>{{ $t('stepForm.link.selectStrategy') }}</a-link>
        </a-col>
      </a-row>
    </a-form-item>
    <div class="actions">
      <a-button type="secondary" @click="goPrev">
        {{ $t('stepForm.button.prev') }}
      </a-button>
      <a-button :loading="loading" type="primary" @click="onSubmitClick">
        {{ $t('stepForm.button.submit') }}
      </a-button>
    </div>
  </a-form>
</template>

<script lang="ts">
import { defineComponent, ref, watch, PropType } from 'vue';
import { FormInstance } from '@arco-design/web-vue/es/form';
import useLoading from '@/hooks/loading';
import { StepFormRes } from '@/api/form';

export default defineComponent({
  props: {
    sourceData: {
      type: Object as PropType<StepFormRes>,
      required: true,
    },
  },
  emits: ['changeStep'],
  setup(props, ctx) {
    const { loading, setLoading } = useLoading();
    const formData = ref<StepFormRes>({} as StepFormRes);
    const formRef = ref<FormInstance>();
    const goPrev = () => {
      ctx.emit('changeStep', 'backward');
    };
    watch(
      () => props.sourceData,
      () => {
        formData.value = {
          ...props.sourceData,
        };
      },
      {
        deep: true,
        immediate: true,
      }
    );
    const mockApi = () => {
      return new Promise((resolve) => {
        setTimeout(() => {
          ctx.emit('changeStep', 'forward');
          resolve({});
        }, 500);
      });
    };
    const onSubmitClick = async () => {
      const res = await formRef.value?.validate();
      if (!res) {
        setLoading(true);
        await mockApi();
        setLoading(false);
      }
    };
    return {
      formRef,
      loading,
      formData,
      goPrev,
      onSubmitClick,
    };
  },
});
</script>

<style scoped lang="less">
.container {
  padding: 20px;
}

.wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 64px 0;
  background-color: var(--color-bg-2);
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
  padding: 15px 0;
  text-align: right;

  > button {
    margin-left: 8px;

    &:first-child {
      margin-left: 0;
    }
  }
}

.adjust {
  flex: 1;
  justify-content: flex-start;
}

:deep(.arco-form-item-extra) {
  margin-top: 4px;
  color: var(--color-text-3);
  font-size: 12px;
}
</style>
