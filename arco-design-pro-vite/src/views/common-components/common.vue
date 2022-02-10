<template>
  <div>
    <div class="component-demo-list">
      <a-typography-title :heading="5" bold> 按钮 Button </a-typography-title>
      <a-row>
        <div
          style="
            border-right: 1px solid var(--color-border-2);
            padding-right: 40px;
          "
        >
          <div>
            <a-typography-paragraph
              type="secondary"
              style="
                color: var(--color-neutral-5);
                margin-top: 0;
                margin-bottom: -4px;
              "
            >
              基础样式
            </a-typography-paragraph>
          </div>
          <div
            v-for="(props, index) in btnStatus"
            :key="index"
            class="component-demo-btn"
          >
            <a-button
              type="primary"
              :status="props.status ? props.status.toLocaleLowerCase() : ''"
            >
              {{ props.status || 'Primary' }}
            </a-button>
            <br />
            <a-button
              disabled
              type="primary"
              :status="props.status ? props.status.toLocaleLowerCase() : ''"
            >
              {{ props.status || 'Primary' }}
            </a-button>
            <br />
            <a-button
              :status="props.status ? props.status.toLocaleLowerCase() : ''"
            >
              {{ props.status || 'Default' }}
            </a-button>
            <br />
            <a-button
              disabled
              :status="props.status ? props.status.toLocaleLowerCase() : ''"
            >
              {{ props.status || 'Default' }}
            </a-button>
            <br />
            <a-button
              type="outline"
              :status="props.status ? props.status.toLocaleLowerCase() : ''"
            >
              {{ props.status || 'Outline' }}
            </a-button>
            <br />
            <a-button
              disabled
              type="outline"
              :status="props.status ? props.status.toLocaleLowerCase() : ''"
            >
              {{ props.status || 'Outline' }}
            </a-button>
            <br />
            <a-button
              type="dashed"
              :status="props.status ? props.status.toLocaleLowerCase() : ''"
            >
              {{ props.status || 'Dashed' }}
            </a-button>
            <br />

            <a-button
              disabled
              type="dashed"
              :status="props.status ? props.status.toLocaleLowerCase() : ''"
            >
              {{ props.status || 'Dashed' }}
            </a-button>

            <br />
            <a-button
              type="text"
              :status="props.status ? props.status.toLocaleLowerCase() : ''"
            >
              {{ props.status || 'Text' }}
            </a-button>
            <br />
            <a-button
              disabled
              type="text"
              :status="props.status ? props.status.toLocaleLowerCase() : ''"
            >
              {{ props.status || 'Text' }}
            </a-button>
          </div>
        </div>
        <div style="padding-left: 56px">
          <div>
            <a-typography-paragraph
              type="secondary"
              style="
                color: var(--color-neutral-5);
                margin-top: 0;
                margin-bottom: 16px;
              "
            >
              不同尺寸
            </a-typography-paragraph>
          </div>
          <a-space :size="16">
            <div>
              <div
                v-for="size in btnSize"
                :key="size"
                style="margin-bottom: 20px"
              >
                <a-button type="primary" :size="size">
                  <IconPlus /> Button
                </a-button>
              </div>
            </div>
            <div>
              <div
                v-for="size in btnSize"
                :key="size"
                style="margin-bottom: 20px"
              >
                <a-button type="primary" :size="size"> Button </a-button>
              </div>
            </div>
            <div>
              <div
                v-for="size in btnSize"
                :key="size"
                style="margin-bottom: 20px"
              >
                <a-button type="primary" :size="size">
                  <IconPlus />
                </a-button>
              </div>
            </div>
            <div>
              <div
                v-for="size in btnSize"
                :key="size"
                style="margin-bottom: 20px"
              >
                <a-button type="primary" :size="size" shape="circle">
                  <IconPlus />
                </a-button>
              </div>
            </div>
          </a-space>
        </div>
      </a-row>
    </div>
    <div class="component-demo-list">
      <a-typography-title :heading="5" bold> 链接 Link </a-typography-title>
      <div class="component-demo-item">
        <a-link status="normal">Default</a-link>
        <a-link status="normal" icon>Default</a-link>
        <a-link status="normal"><IconEdit />Default</a-link>
        <a-link status="warning">Warning Link</a-link>
        <a-link status="danger">Error Link</a-link>
        <a-link status="success">Success Link</a-link>
      </div>
    </div>
    <div class="component-demo-list">
      <a-typography-title :heading="5" bold>
        排版 Typography
      </a-typography-title>
      <a-row
        style="border-bottom: 1px solid var(--color-border-2); margin-top: 20px"
      >
        <div>
          <a-typography-paragraph
            type="secondary"
            style="
              color: var(--color-neutral-5);
              margin-top: 0;
              margin-bottom: 16px;
            "
          >
            标题
          </a-typography-paragraph>
          <div
            style="
              border-right: 1px solid var(--color-border-2);
              padding-right: 80px;
              padding-bottom: 28px;
            "
          >
            <a-typography>
              <a-typography-title style="margin-top: 0"
                >H1. The Pragmatic Romanticism</a-typography-title
              >
              <a-typography-title :heading="2"
                >H2. The Pragmatic Romanticism</a-typography-title
              >
              <a-typography-title :heading="3"
                >H3. The Pragmatic Romanticism</a-typography-title
              >
              <a-typography-title :heading="4"
                >H4. The Pragmatic Romanticism</a-typography-title
              >
              <a-typography-title :heading="5"
                >H5. The Pragmatic Romanticism</a-typography-title
              >
              <a-typography-title :heading="6"
                >H6. The Pragmatic Romanticism</a-typography-title
              >
            </a-typography>
          </div>
        </div>

        <a-row style="padding-left: 80px; margin-top: 0">
          <div style="margin-right: 75px">
            <a-typography-paragraph
              type="secondary"
              style="
                color: var(--color-neutral-5);
                margin-top: 0;
                margin-bottom: 16px;
              "
            >
              文本状态
            </a-typography-paragraph>
            <div
              v-for="key in [
                'Default',
                'Primary',
                'Secondary',
                'Success',
                'Warning',
                'Error',
              ]"
              :key="key"
              style="margin-bottom: 20px"
            >
              <a-typography-text :type="key.toLowerCase()"
                >arco design</a-typography-text
              >
            </div>
          </div>
          <div>
            <a-typography-paragraph
              type="secondary"
              style="
                color: var(--color-neutral-5);
                margin-top: 0;
                margin-bottom: 16px;
              "
            >
              文本属性
            </a-typography-paragraph>
            <div
              v-for="key in ['Bold', 'Disabled', 'Mark', 'Underline']"
              :key="key"
              style="margin-bottom: 20px"
            >
              <a-typography-text v-bind="{ [key.toLowerCase()]: true }">
                arco design
              </a-typography-text>
            </div>
            <div style="margin-bottom: 20px">
              <a-typography-text delete>Line through</a-typography-text>
            </div>
            <div style="margin-bottom: 20px">
              <a-typography-text key="" code> Code snippet </a-typography-text>
            </div>
          </div>
        </a-row>
      </a-row>
      <a-typography-paragraph
        type="secondary"
        style="
          color: var(--color-neutral-5);
          margin-top: 20px;
          margin-bottom: 16px;
        "
      >
        段落
      </a-typography-paragraph>
      <a-space :size="64">
        <a-typography-paragraph
          >This is a paragraph text.</a-typography-paragraph
        >
        <a-typography-paragraph copyable
          >Click the icon to copy this text.</a-typography-paragraph
        >
        <a-typography-paragraph editable
          >Click the icon to copy this text.</a-typography-paragraph
        >
      </a-space>
      <div style="margin-top: 18p; margin-bottom: 24px">
        <a-typography>
          <a-typography-paragraph blockquote>
            A design is a plan or specification for the construction of an
            object or system or for the implementation of an activity or
            process, or the result of that plan or specification in the form of
            a prototype, product or process. The verb to design expresses the
            process of developing a design. The verb to design expresses the
            process of developing a design.
          </a-typography-paragraph>
        </a-typography>
      </div>
      <a-typography-paragraph ellipsis style="margin-bottom: 24px">
        A design is a plan or specification for the construction of an object or
        system or for the implementation of an activity or process, or the
        result of that plan or specification in the form of a prototype, product
        or process. The verb to design expresses the process of developing a
        design. The verb to design expresses the process of developing a design.
      </a-typography-paragraph>
      <a-typography-paragraph
        :ellipsis="{
          suffix: '--Arco Design',
          rows: 2,
          expandable: true,
        }"
      >
        A design is a plan or specification for the construction of an object or
        system or for the implementation of an activity or process, or the
        result of that plan or specification in the form of a prototype, product
        or process. The verb to design expresses the process of developing a
        design. The verb to design expresses the process of developing a design.
        A design is a plan or specification for the construction of an object or
        system or for the implementation of an activity or process, or the
        result of that plan or specification in the form of a prototype, product
        or process. The verb to design expresses the process of developing a
        design. The verb to design expresses the process of developing a design.
      </a-typography-paragraph>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  setup() {
    const btnStatus = [
      {},
      { status: 'Warning' },
      { status: 'Danger' },
      { status: 'Success' },
    ];
    const btnSize = ['mini', 'small', 'medium', 'large'];
    return {
      btnStatus,
      btnSize,
    };
  },
});
</script>

<style scoped lang="less">
.component-demo-list {
  margin-bottom: 12px;
  padding: 16px 58px 36px;
  background-color: var(--color-bg-1);
  border-radius: 6px;
}
.component-demo-item {
  margin-top: 20px;
}

.component-demo-item-large {
  margin-top: 28px;
}

.component-demo-item > * {
  margin-right: 16px;
}

.arco-avatar-trigger-icon-mask {
  opacity: 1;
}

.arco-message-wrapper,
.arco-notification-wrapper {
  position: relative;
}

.arco-message-wrapper > div {
  text-align: left !important;
}

.arco-message-wrapper-top {
  top: 0;
}

.arco-modal-wrapper {
  position: relative;
}

.component-demo-btn {
  display: inline-block;
  margin-right: 16px;
}

.component-demo-btn > * {
  margin-top: 20px;
}

.arco-slider-road.arco-slider-road-vertical {
  min-height: 132px;
}
</style>
