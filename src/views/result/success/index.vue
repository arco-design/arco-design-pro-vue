<template>
  <div class="container">
    <a-breadcrumb style="margin-bottom: 20px">
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

export default defineComponent({
  setup() {
    //
  },
});
</script>
<style scoped lang="less">
// .container {
//   padding: 20px;
// }

.wrapper {
  padding: 24px 150px;
  background-color: var(--color-bg-2);
  box-sizing: border-box;
}

.result {
  margin: 150px 0 36px 0;
}
.operation-wrap {
  margin-bottom: 40px;
  text-align: center;
}

.steps-wrapper {
  width: 100%;
  min-width: fit-content;
  padding: 20px;
  background-color: var(--color-fill-2);
  box-sizing: border-box;
  margin-bottom: 150px;
}
</style>
