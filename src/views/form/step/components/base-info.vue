<template>
  <a-form ref="formRef" :model="formData" class="form">
    <a-collapse
      :bordered="false"
      :default-active-key="activeKeys"
      @change="onCollapseChange"
    >
      <a-collapse-item
        key="baseConfig"
        name="baseConfig"
        :header="$t('stepForm.collapse.title.base')"
      >
        <div class="form-content">
          <a-form-item
            :label="$t('stepForm.form.label.name')"
            field="name"
            :rules="[
              {
                required: true,
                message: $t('stepForm.form.error.name.required'),
              },
              {
                match:
                  /^[a-zA-z0-9][-a-zA-z0-9]{0,62}(\.[a-zA-z0-9][-a-zA-z0-9]{0,62})+$/,
                message: $t('stepForm.form.error.name.pattern'),
              },
            ]"
          >
            <a-input
              v-model="formData.name"
              :placeholder="$t('stepForm.placeholder.name')"
            />
          </a-form-item>
          <a-form-item
            :label="$t('stepForm.form.label.purpose')"
            field="purpose"
            :rules="[
              {
                required: true,
                message: $t('stepForm.form.error.purpose.required'),
              },
            ]"
          >
            <a-input
              v-model="formData.purpose"
              :placeholder="$t('stepForm.placeholder.purpose')"
            />
          </a-form-item>
          <a-form-item
            :label="$t('stepForm.form.label.cluster')"
            field="cluster"
          >
            <a-cascader
              :model-value="formData.cluster"
              :placeholder="$t('stepForm.placeholder.cluster')"
              :options="clusterOptions"
              @change="onClusterChange"
            />
          </a-form-item>
        </div>
      </a-collapse-item>
      <a-collapse-item
        key="advanceConfig"
        name="advanceConfig"
        :header="$t('stepForm.collapse.title.highLevel')"
      >
        <a-alert closable banner type="warning">
          {{ $t('stepForm.alert.highLevel') }}
        </a-alert>
        <div class="form-content">
          <a-form-item :label="$t('stepForm.form.label.type')" field="type">
            <a-select
              v-model="formData.type"
              :placeholder="$t('stepForm.placeholder.type')"
            >
              <a-option value="web">
                {{ $t('stepForm.label.type.web') }}
              </a-option>
              <a-option value="api">{{
                $t('stepForm.label.type.api')
              }}</a-option>
            </a-select>
          </a-form-item>
          <a-form-item
            :label="$t('stepForm.form.label.dns')"
            field="dns"
            trigger-prop-name="checked"
          >
            <a-switch v-model="formData.dns" />
          </a-form-item>
          <a-form-item
            :label="$t('stepForm.form.label.subDomain')"
            field="subDomain"
            trigger-prop-name="checked"
          >
            <a-switch v-model="formData.subDomain" />
          </a-form-item>
          <a-form-item
            :label="$t('stepForm.form.label.lineName')"
            field="lineName"
          >
            <a-select :placeholder="$t('stepForm.placeholder.lineName')">
              <a-option
                v-for="option in lineOptions"
                :key="option.value"
                :value="option.value"
              >
                {{ option.label }}
              </a-option>
            </a-select>
          </a-form-item>
        </div>
      </a-collapse-item>
    </a-collapse>
    <div class="actions">
      <a-button type="primary" @click="onNextClick">
        {{ $t('stepForm.button.next') }}
      </a-button>
    </div>
  </a-form>
</template>
<script lang="ts">
import { defineComponent, ref, watch, PropType } from 'vue';
import { FormInstance } from '@arco-design/web-vue/es/form';
import { queryClusterList, queryLineList, StepFormRes } from '@/api/form';
import { Options, NodeOptions } from '@/types/global';

export default defineComponent({
  props: {
    sourceData: {
      type: Object as PropType<StepFormRes>,
      required: true,
    },
  },
  emits: ['changeStep'],
  setup(props, ctx) {
    const activeKeys = ['baseConfig'];
    const clusterOptions = ref<NodeOptions[]>([]);
    const lineOptions = ref<Options[]>([]);
    const formRef = ref<FormInstance>();
    const formData = ref<StepFormRes>({} as StepFormRes);
    const fetchLineOptions = async () => {
      const { data } = await queryLineList({ cluster: formData.value.cluster });
      lineOptions.value = data;
    };
    watch(
      () => props.sourceData,
      () => {
        formData.value = {
          ...props.sourceData,
        };
        if (props.sourceData.cluster) {
          fetchLineOptions();
        }
      },
      {
        deep: true,
        immediate: true,
      }
    );

    const fetchData = async () => {
      const { data } = await queryClusterList();
      clusterOptions.value = data;
    };

    const onNextClick = async () => {
      const res = await formRef.value?.validate();
      if (!res) ctx.emit('changeStep', 'forward');
    };
    const onCollapseChange = () => {
      //
    };
    const onClusterChange = (cluster: string) => {
      if (cluster) {
        fetchLineOptions();
      } else {
        lineOptions.value = [];
      }
    };
    fetchData();
    return {
      formRef,
      activeKeys,
      formData,
      clusterOptions,
      lineOptions,
      onNextClick,
      onCollapseChange,
      onClusterChange,
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
