<template>
  <a-col :span="24" class="panel">
    <a-row>
      <a-col class="panel-col" :span="6">
        <a-space>
          <a-avatar :size="54" class="col-avatar">
            <img
              alt="avatar"
              src="//p3-armor.byteimg.com/tos-cn-i-49unhts6dw/8072ed2666d9cbb83367a453aeba3b1a.svg~tplv-49unhts6dw-image.image"
            />
          </a-avatar>
          <a-statistic
            :title="$t('workplace.onlineContent')"
            :value="373.5"
            :precision="1"
          >
            <template #suffix>
              W+ <span class="unit">{{ $t('workplace.pecs') }}</span>
            </template>
          </a-statistic>
        </a-space>
      </a-col>
      <a-col class="panel-col" :span="6">
        <a-space>
          <a-avatar :size="54" class="col-avatar">
            <img
              alt="avatar"
              src="//p3-armor.byteimg.com/tos-cn-i-49unhts6dw/d0bbe8e4b54704c46ce7809ab44c5e9b.svg~tplv-49unhts6dw-image.image"
            />
          </a-avatar>
          <a-statistic :title="$t('workplace.putIn')" :value="368">
            <template #suffix>
              <span class="unit">{{ $t('workplace.pecs') }}</span>
            </template>
          </a-statistic>
        </a-space>
      </a-col>
      <a-col class="panel-col" :span="6">
        <a-space>
          <a-avatar :size="54" class="col-avatar">
            <img
              alt="avatar"
              src="//p3-armor.byteimg.com/tos-cn-i-49unhts6dw/32567adf281f99a84f3e6383fc4db598.svg~tplv-49unhts6dw-image.image"
            />
          </a-avatar>
          <a-statistic
            :title="$t('workplace.newDay')"
            :value="8874"
            show-group-separator
          >
            <template #suffix>
              <span class="unit">{{ $t('workplace.pecs') }}</span>
            </template>
          </a-statistic>
        </a-space>
      </a-col>
      <a-col class="panel-col" :span="6">
        <a-space>
          <a-avatar :size="54" class="col-avatar">
            <img
              alt="avatar"
              src="//p3-armor.byteimg.com/tos-cn-i-49unhts6dw/5e7c293bfed5b59f0d213050ac274714.svg~tplv-49unhts6dw-image.image"
            />
          </a-avatar>
          <a-statistic
            :title="$t('workplace.newFromYesterday')"
            :value="2.8"
            :precision="1"
          >
            <template #suffix> % <icon-caret-up class="up-icon" /> </template>
          </a-statistic>
        </a-space>
      </a-col>
    </a-row>
    <a-divider class="panel-border" />
  </a-col>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({});
</script>

<style lang="less" scoped>
.arco-col.panel {
  margin-bottom: 0;
  padding: 16px 20px 0 20px;
}
.panel-col {
  padding-left: 43px;
  border-right: 1px solid rgb(var(--gray-2));
  &:first-child {
    padding-left: 0;
  }
  &:last-child {
    border-right: none;
  }
}
.col-avatar {
  margin-right: 12px;
}
.up-icon {
  color: rgb(var(--red-6));
}
.unit {
  margin-left: 8px;
  color: rgb(var(--gray-8));
  font-size: 12px;
}
</style>
