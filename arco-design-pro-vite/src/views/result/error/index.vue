<template>
  <div class="container">
    <a-breadcrumb class="container-breadcrumb">
      <a-breadcrumb-item>{{ $t('menu.result') }}</a-breadcrumb-item>
      <a-breadcrumb-item>{{ $t('menu.result.error') }}</a-breadcrumb-item>
    </a-breadcrumb>
    <div class="wrapper">
      <a-result
        class="result"
        status="error"
        :title="$t('error.result.title')"
        :subtitle="$t('error.result.subTitle')"
      >
      </a-result>
      <div class="operation-wrap">
        <a-button key="again" type="secondary" style="margin-right: 16px">
          {{ $t('error.result.goBack') }}
        </a-button>
        <a-button key="back" type="primary">
          {{ $t('error.result.retry') }}
        </a-button>
      </div>
      <div class="details-wrapper">
        <a-typography-title :heading="6" style="margin-top: 0">
          {{ $t('error.detailTitle') }}
        </a-typography-title>
        <a-typography-paragraph style="margin-bottom: 0">
          <ol>
            <li>
              {{ $t('error.detailLine.record') }}
              <a-link>
                <IconLink />
                {{ $t('error.detailLine.record.link') }}
              </a-link>
            </li>
            <li>{{ $t('error.detailLine.auth') }}</li>
          </ol>
        </a-typography-paragraph>
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
  margin: 150px 0 36px 0;
}

.operation-wrap {
  margin-bottom: 40px;
  text-align: center;
}

.details-wrapper {
  box-sizing: border-box;
  width: 100%;
  margin-bottom: 150px;
  padding: 20px;
  background-color: var(--color-fill-2);
}
</style>
