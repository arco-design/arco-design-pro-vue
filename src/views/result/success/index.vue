<template>
  <div class="container">
    <a-breadcrumb class="container-breadcrumb">
      <a-breadcrumb-item>{{ $t('menu.result') }}</a-breadcrumb-item>
      <a-breadcrumb-item>{{ $t('menu.result.success') }}</a-breadcrumb-item>
    </a-breadcrumb>
    <div class="wrapper">
      <a-result
        class="result"
        status="success"
        :title="$t('success.result.title')"
        :subtitle="$t('success.result.subTitle')"
      >
      </a-result>
      <div class="operation-wrap">
        <a-button key="again" type="secondary" style="margin-right: 16px">
          {{ $t('success.result.printResult') }}
        </a-button>
        <a-button key="back" type="primary">
          {{ $t('success.result.projectList') }}
        </a-button>
      </div>
      <div class="steps-wrapper">
        <a-typography-paragraph bold>{{
          $t('success.result.progress')
        }}</a-typography-paragraph>
        <a-steps type="dot" :current="2">
          <a-step
            :title="$t('success.submitApplication')"
            description="2020/10/10 14:00:39"
          />
          <a-step
            :title="$t('success.leaderReview')"
            :description="$t('success.processing')"
          />
          <a-step
            :title="$t('success.purchaseCertificate')"
            :description="$t('success.waiting')"
          />
          <a-step
            :title="$t('success.safetyTest')"
            :description="$t('success.waiting')"
          />
          <a-step
            :title="$t('success.launched')"
            :description="$t('success.waiting')"
          />
        </a-steps>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({});
</script>

<style scoped lang="less">
.wrapper {
  box-sizing: border-box;
  padding: 24px 150px;
  background-color: var(--color-bg-2);
}

.result {
  margin: 150px 0 0 0;
}

.operation-wrap {
  margin-bottom: 40px;
  text-align: center;
}

.steps-wrapper {
  box-sizing: border-box;
  width: 100%;
  min-width: fit-content;
  margin-bottom: 150px;
  padding: 20px;
  background-color: var(--color-fill-2);
}
</style>
