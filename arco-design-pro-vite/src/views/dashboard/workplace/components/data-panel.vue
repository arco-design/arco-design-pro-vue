<template>
  <a-col :span="24" class="panel">
    <a-row>
      <a-col class="panel-col" :span="6">
        <a-space>
          <a-avatar :size="54" class="col-avatar">
            <img
              alt="avatar"
              src="http://p3-armor.byteimg.com/tos-cn-i-49unhts6dw/91ff1f3733c92258f2d2e25aa60ec9e6.png~tplv-49unhts6dw-image.image"
            />
          </a-avatar>
          <a-statistic
            :title="$t('workplace.onlineContent')"
            :value="373.5"
            :precision="1"
          >
            <template #suffix> W+ </template>
          </a-statistic>
        </a-space>
      </a-col>
      <a-col class="panel-col" :span="6">
        <a-space>
          <a-avatar :size="54" class="col-avatar">
            <img
              alt="avatar"
              src="http://p3-armor.byteimg.com/tos-cn-i-49unhts6dw/7977ecab340b26702e263e6e5c5e09ed.png~tplv-49unhts6dw-image.image"
            />
          </a-avatar>
          <a-statistic :title="$t('workplace.putIn')" :value="368">
            <!-- <template #suffix> GB </template> -->
          </a-statistic>
        </a-space>
      </a-col>
      <a-col class="panel-col" :span="6">
        <a-space>
          <a-avatar :size="54" class="col-avatar">
            <img
              alt="avatar"
              src="http://p3-armor.byteimg.com/tos-cn-i-49unhts6dw/dbf45c89b97f3f11a85bfbf82281a691.png~tplv-49unhts6dw-image.image"
            />
          </a-avatar>
          <a-statistic :title="$t('workplace.newDay')" :value="8874">
            <!-- <template #suffix> GB </template> -->
          </a-statistic>
        </a-space>
      </a-col>
      <a-col class="panel-col" :span="6">
        <a-space>
          <a-avatar :size="54" class="col-avatar">
            <img
              alt="avatar"
              src="http://p3-armor.byteimg.com/tos-cn-i-49unhts6dw/fc860a8513d63eeb8cc9d76a58c7964a.png~tplv-49unhts6dw-image.image"
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
div.panel {
  margin-bottom: 0;
  padding: 16px 16px 0 16px;
}
.panel-col {
  padding-left: 43px;
  border-right: 1px solid #f2f3f5;
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
  color: #f53f3f;
}
</style>
