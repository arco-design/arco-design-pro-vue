<template>
  <a-card
    :bordered="false"
    :title="$t('userSetting.certification.title.enterprise')"
    :header-style="{ border: 'none' }"
  >
    <template #extra>
      <a-link>{{ $t('userSetting.certification.extra.enterprise') }}</a-link>
    </template>
    <a-space class="card-content" direction="vertical">
      <a-row>
        <a-col :span="8">
          <a-space :size="16">
            <a-typography-paragraph class="item-label">
              {{ $t('userSetting.certification.label.accountType') }}
            </a-typography-paragraph>
            <a-typography-paragraph>
              {{ enterpriseInfo.accountType }}
            </a-typography-paragraph>
          </a-space>
        </a-col>
        <a-col :span="8">
          <a-space :size="16">
            <a-typography-paragraph class="item-label">
              {{ $t('userSetting.certification.label.status') }}
            </a-typography-paragraph>
            <a-tag
              v-if="enterpriseInfo.status === 0"
              style="margin-bottom: 1em"
              color="green"
              size="small"
            >
              已认证
            </a-tag>
          </a-space>
        </a-col>
        <a-col :span="8">
          <a-space :size="16">
            <a-typography-paragraph class="item-label">
              {{ $t('userSetting.certification.label.time') }}
            </a-typography-paragraph>
            <a-typography-paragraph>
              {{ enterpriseInfo.time }}
            </a-typography-paragraph>
          </a-space>
        </a-col>
      </a-row>
      <a-row>
        <a-col :span="8">
          <a-space :size="16">
            <a-typography-paragraph class="item-label">
              {{ $t('userSetting.certification.label.legalPerson') }}
            </a-typography-paragraph>
            <a-typography-paragraph>
              {{ enterpriseInfo.legalPerson }}
            </a-typography-paragraph>
          </a-space>
        </a-col>
        <a-col :span="8">
          <a-space :size="16">
            <a-typography-paragraph class="item-label">
              {{ $t('userSetting.certification.label.certificateType') }}
            </a-typography-paragraph>
            <a-typography-paragraph>
              {{ enterpriseInfo.certificateType }}
            </a-typography-paragraph>
          </a-space>
        </a-col>
        <a-col :span="8">
          <a-space :size="16">
            <a-typography-paragraph class="item-label">
              {{ $t('userSetting.certification.label.authenticationNumber') }}
            </a-typography-paragraph>
            <a-typography-paragraph>
              {{ enterpriseInfo.authenticationNumber }}
            </a-typography-paragraph>
          </a-space>
        </a-col>
      </a-row>
      <a-row>
        <a-col :span="8">
          <a-space :size="16">
            <a-typography-paragraph class="item-label">
              {{ $t('userSetting.certification.label.enterpriseName') }}
            </a-typography-paragraph>
            <a-typography-paragraph>
              {{ enterpriseInfo.enterpriseName }}
            </a-typography-paragraph>
          </a-space>
        </a-col>
        <a-col :span="8">
          <a-space :size="16">
            <a-typography-paragraph class="item-label">
              {{
                $t('userSetting.certification.label.enterpriseCertificateType')
              }}
            </a-typography-paragraph>
            <a-typography-paragraph>
              {{ enterpriseInfo.enterpriseCertificateType }}
            </a-typography-paragraph>
          </a-space>
        </a-col>
        <a-col :span="8">
          <a-space :size="16">
            <a-typography-paragraph class="item-label">
              {{ $t('userSetting.certification.label.organizationCode') }}
            </a-typography-paragraph>
            <a-typography-paragraph>
              {{ enterpriseInfo.organizationCode }}
            </a-typography-paragraph>
          </a-space>
        </a-col>
      </a-row>
    </a-space>
  </a-card>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { EnterpriseCertificationModel } from '@/api/user-center';

export default defineComponent({
  props: {
    enterpriseInfo: {
      type: Object as PropType<EnterpriseCertificationModel>,
      default() {
        return {};
      },
    },
  },
  setup() {
    //
  },
});
</script>

<style scoped lang="less">
.card-content {
  width: 100%;
  padding: 20px;
  background-color: rgb(var(--gray-1));
}
.item-label {
  min-width: 98px;
  text-align: right;
  color: var(--color-text-8);
  &:after {
    content: ':';
  }
}
</style>
