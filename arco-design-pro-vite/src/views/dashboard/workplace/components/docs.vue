<template>
  <a-card
    :title="$t('workplace.docs')"
    :bordered="false"
    :header-style="{ border: 'none' }"
    :body-style="{ paddingTop: 0 }"
    style="height: 160px"
  >
    <template #extra>
      <a-link>{{ $t('workplace.viewMore') }}</a-link>
    </template>
    <a-row>
      <a-col :span="12">
        <a-link style="display: block">
          {{ $t('workplace.docs.productOverview') }}
        </a-link>
      </a-col>
      <a-col :span="12">
        <a-link style="display: block">
          {{ $t('workplace.docs.userGuide') }}
        </a-link>
      </a-col>
      <a-col :span="12">
        <a-link style="display: block">
          {{ $t('workplace.docs.workflow') }}
        </a-link>
      </a-col>
      <a-col :span="12">
        <a-link style="display: block">
          {{ $t('workplace.docs.interfaceDocs') }}
        </a-link>
      </a-col>
    </a-row>
  </a-card>
</template>

<style lang="less" scoped>
.arco-card-body .arco-link {
  margin: 10px 0;
  color: rgb(var(--gray-8));
}
</style>
