<template>
  <div>
    <div class="component-demo-list" style="padding-right: 156px">
      <a-typography-title :heading="5" bold>
        警告提示 Alert
      </a-typography-title>
      <a-row :gutter="56" style="margin-top: 30px">
        <a-col :span="12" style="max-width: 470px">
          <a-space
            wrap
            :size="20"
            class="demo-item-column"
            direction="vertical"
            fill
          >
            <a-alert type="info"> General text </a-alert>
            <a-alert type="info" closable> General text </a-alert>
            <a-alert type="info" content="General text">
              <template #action> Close </template>
              General text
            </a-alert>
            <a-alert type="info" title="General text">
              Here is an example general text.
            </a-alert>
            <a-alert type="info" title="General text" closable>
              Here is an example general text.
            </a-alert>
            <a-alert type="info" title="General text">
              <template #action> Close </template>
              Here is an example general text.
            </a-alert>
          </a-space>
        </a-col>
        <a-col :span="12" style="max-width: 470px">
          <a-space
            wrap
            :size="20"
            class="demo-item-column"
            direction="vertical"
            fill
          >
            <a-alert type="success"> Here is a success text </a-alert>
            <a-alert type="success" title="Success text">
              Here is a success text
            </a-alert>
            <a-alert type="warning"> Here is a warning text </a-alert>
            <a-alert type="warning" title="Warning text">
              Here is a warning text
            </a-alert>
            <a-alert type="error"> Here is an error text </a-alert>
            <a-alert type="error" title="Error text">
              Here is an error text
            </a-alert>
          </a-space>
        </a-col>
      </a-row>
    </div>
    <!-- <div class="component-demo-list" style="padding-right: 80px">
      <a-typography-title :heading="5" bold>
        全局提示 Message
      </a-typography-title>
      <a-row :gutter="56" style="margin-top: 30px">
        <div id="normal_msg" style="min-width: 200px; width: 20%"></div>
        <div style="min-width: 200px; width: 20%">
          <div id="info_msg"></div>
          <div id="loading_msg"></div>
        </div>
        <div id="success_msg" style="min-width: 200px; width: 20%"></div>
        <div id="error_msg" style="min-width: 200px; width: 20%"></div>
        <div id="warning_msg" style="min-width: 200px; width: 20%"></div>
      </a-row>
    </div> -->
    <div class="component-demo-list" style="padding-right: 80px">
      <a-typography-title :heading="5" bold>
        进度条 Progress
      </a-typography-title>
      <a-row style="margin-top: 36px">
        <a-space
          :size="44"
          wrap
          style="width: 200px; margin-right: 72px"
          class="demo-item-column"
          direction="vertical"
        >
          <a-progress :percent="0" :show-text="false" />
          <a-progress
            :percent="0.6"
            color="var(--color-fill-3)"
            :show-text="false"
          />
          <a-progress :percent="0.3" :show-text="false" />
          <a-progress :percent="0.8" status="danger" :show-text="false" />
          <a-progress :percent="1" status="success" :show-text="false" />
        </a-space>
        <a-space
          :size="44"
          wrap
          style="width: 200px; margin-right: 72px"
          class="demo-item-column"
          direction="vertical"
        >
          <a-progress :percent="0">
            <template #text> Waiting... </template>
          </a-progress>
          <a-progress :percent="0.6" color="var(--color-fill-3)">
            <template #text> Waiting... </template>
          </a-progress>
          <a-progress :percent="0.3" />
          <a-progress :percent="0.8" status="danger" />
          <a-progress :percent="1" status="success" />
        </a-space>
        <div>
          <div>
            <a-space :size="24">
              <a-progress type="circle" :percent="0" />
              <a-progress
                type="circle"
                :percent="25"
                color="var(--color-fill-3)"
              />
              <a-progress type="circle" :percent="25" />
              <a-progress type="circle" :percent="0.8" status="danger" />
              <a-progress type="circle" :percent="1" status="success" />
            </a-space>
          </div>
          <div style="margin-top: 36px; margin-bottom: 36px">
            <a-space :size="20">
              <a-progress size="mini" :percent="0" />
              <a-progress
                size="mini"
                :percent="25"
                color="var(--color-fill-3)"
              />
              <a-progress size="mini" :percent="0.25" />
              <a-progress size="mini" :percent="0.8" status="danger" />
              <a-progress size="mini" :percent="1" status="success" />
            </a-space>
          </div>
          <div>
            <a-space :size="20">
              <a-progress size="mini" type="circle" :percent="0" />
              <a-progress
                size="mini"
                type="circle"
                :percent="0.25"
                color="var(--color-fill-3)"
              />
              <a-progress size="mini" type="circle" :percent="0.25" />
              <a-progress
                size="mini"
                type="circle"
                :percent="0.8"
                status="danger"
              />
              <a-progress
                size="mini"
                type="circle"
                :percent="1"
                status="success"
              />
            </a-space>
          </div>
        </div>
      </a-row>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
// import MessageBox from './message.vue';

export default defineComponent({
  components: {
    // MessageBox,
  },
  setup() {
    //
  },
});
</script>

<style scoped lang="less">
.demo-item-column > * {
  margin-bottom: 16px;
  width: 100%;
}

.demo-item-column > *:last-child {
  margin-bottom: 0 !important;
}
</style>
