<template>
  <div style="margin-bottom: 20px" class="right-content__item">
    <a-card :bordered="false">
      <a-space>
        <a-avatar>
          <img
            src="//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/a8c8cdb109cb051163646151a4a5083b.png~tplv-uwbnlip3yd-webp.webp"
          />
        </a-avatar>
        <a-card-meta description="wangliqun@arco.design">
          <template #title>
            <div>
              <span>王力群</span>
              <a-tag
                color="green"
                style="margin-left: 8px; vertical-align: bottom"
              >
                已实名
              </a-tag>
            </div>
          </template>
        </a-card-meta>
      </a-space>
    </a-card>
    <a-divider style="margin: 0" />
    <a-card :bordered="false">
      <div class="statistic-list">
        <a-statistic
          class="statistic-list__item"
          :title="$t('cardList.statistic.enable')"
          :value="3"
        />
        <a-statistic
          class="statistic-list__item"
          :title="$t('cardList.statistic.disable')"
          :value="1"
        />
        <a-statistic
          class="statistic-list__item"
          :title="$t('cardList.statistic.applicationNum')"
          :value="1"
        />
      </div>
    </a-card>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({});
</script>
<style scoped lang="less">
.statistic-list {
  display: flex;

  &__item {
    flex: 1;
    text-align: center;
  }
}
</style>
