<template>
  <div>
    <div class="component-demo-list" style="padding-right: 156px">
      <a-typography-title :heading="5" bold> 输入框 Input </a-typography-title>
      <a-typography-paragraph
        type="secondary"
        style="
          color: var(--color-neutral-5);
          margin-top: 20px;
          margin-bottom: 16px;
        "
      >
        Input
      </a-typography-paragraph>
      <a-row>
        <div style="width: 320px; margin-right: 56px" class="demo-item-column">
          <a-input placeholder="Input" />
          <a-input placeholder="Error" error />
          <a-input placeholder="Disabled " disabled />
          <a-textarea
            placeholder="Custom Input"
            :auto-size="{ minRows: 1, maxRows: 10 }"
          />
          <a-input placeholder="word limit" show-word-limit :max-length="50" />
          <a-input-search placeholder="search" />
          <a-input-search placeholder="search" search-button />
        </div>
        <div style="width: 320px; margin-right: 56px" class="demo-item-column">
          <a-input placeholder="前后缀 Input">
            <template #prepend> http:// </template>
            <template #append> .com </template>
          </a-input>
          <a-input placeholder="前后缀 Input">
            <template #prefix>
              <IconUser />
            </template>
          </a-input>
          <a-input>
            <template #prepend>
              <a-select placeholder="请选择" style="width: 110px" />
            </template>
          </a-input>
          <a-input-group>
            <a-input
              default-value="010"
              read-only
              style="width: 80px; border: none"
            />
            <div
              style="
                width: 20px;
                text-align: center;
                display: inline-block;
                border: none;
              "
            >
              -
            </div>
            <a-input
              placeholder="Phone Number"
              style="width: 220px"
              auto-complete="off"
            />
          </a-input-group>
          <a-input-password auto-complete="off" placeholder="Password input" />
          <a-date-picker style="width: 100%; margin-bottom: 16px" />
          <a-input-tag placeholder="Input Tag">
            <template #suffix>
              <IconExpand style="transform: rotate(-45deg)" />
            </template>
          </a-input-tag>
        </div>
        <div style="width: 160px" class="demo-item-column">
          <a-input-number placeholder="Input Number" />
          <a-input-number mode="button" :default-value="500" />
          <a-input-number mode="button" :default-value="500">
            <template #prefix> ¥ </template>
          </a-input-number>
        </div>
      </a-row>

      <a-typography-paragraph
        type="secondary"
        style="
          color: var(--color-neutral-5);
          margin-top: 36px;
          margin-bottom: 0;
        "
      >
        Check
      </a-typography-paragraph>
      <div style="display: flex; flex-wrap: wrap">
        <a-form
          :model="formModel"
          style="width: 320px; margin-right: 56px; margin-top: 16px"
          :wrapper-col-props="{ span: 24 }"
          :wrapper-col-style="{ marginBottom: '16px' }"
        >
          <a-form-item help="提示文本" feedback>
            <a-input placeholder="Default" />
          </a-form-item>
          <a-form-item
            v-for="key in ['Success', 'Validating', 'Warning', 'Error']"
            :key="key.toLowerCase()"
            :validate-status="key.toLowerCase()"
            help="提示文本"
            feedback
          >
            <a-input :placeholder="key" />
          </a-form-item>
        </a-form>
        <a-form
          :model="formModel"
          style="width: 320px; margin-top: 16px"
          :wrapper-col-props="{ span: 24 }"
          :wrapper-col-style="{ marginBottom: '16px' }"
        >
          <a-form-item help="提示文本" feedback>
            <a-input placeholder="Default">
              <template #prefix>
                <IconUser />
              </template>
              <template #suffix>
                <IconQuestionCircle />
              </template>
            </a-input>
          </a-form-item>
          <a-form-item
            v-for="key in ['Success', 'Validating', 'Warning', 'Error']"
            :key="key.toLowerCase()"
            :validate-status="key.toLowerCase()"
            help="提示文本"
            feedback
          >
            <a-input :placeholder="key">
              <template #prefix>
                <IconUser />
              </template>
              <template #suffix>
                <IconQuestionCircle />
              </template>
            </a-input>
          </a-form-item>
        </a-form>
      </div>
    </div>

    <div class="component-demo-list" style="padding-right: 156px">
      <a-typography-title :heading="5" bold> 选择器 Select </a-typography-title>
      <a-row style="margin-top: 20px">
        <div style="width: 320px; margin-right: 56px" class="demo-item-column">
          <a-select
            :options="['A', 'B', 'C']"
            placeholder="Select"
            style="margin-bottom: 16px"
          />
          <a-tree-select :data="treeData" placeholder="TreeSelect">
            <!-- <a-tree-select.Node key="node1" title="Trunk">
                <a-tree-select.Node key="node2" title="Branch" />
              </a-tree-select.Node>
              <a-tree-select.Node key="node3" title="Trunk">
                <a-tree-select.Node key="node4" title="Leaf" />
                <a-tree-select.Node key="node5" title="Leaf" />
              </a-tree-select.Node> -->
          </a-tree-select>
        </div>
        <div style="width: 320px; margin-right: 56px" class="demo-item-column">
          <a-select
            :options="['A', 'B', 'C']"
            placeholder="Single Select / Search"
            show-search
            style="margin-bottom: 16px"
          />
          <a-select
            :options="['A', 'B', 'C']"
            placeholder="Multi Select / Search"
            show-search
            mode="multiple"
          />
        </div>
        <div style="width: 160px" class="demo-item-column">
          <a-time-picker placeholder="TimePicker" style="width: 100%" />
        </div>
      </a-row>
    </div>
    <div class="component-demo-list" style="padding-right: 156px">
      <a-typography-title :heading="5" bold>
        滑动输入条 Slider
      </a-typography-title>
      <a-row style="margin-top: 36px">
        <div style="width: 344px; margin-right: 186px">
          <a-slider :default-value="60" style="margin-bottom: 56px" />
          <a-slider disabled :default-value="60" style="margin-bottom: 56px" />
          <a-slider
            range
            :default-value="[20, 60]"
            style="margin-bottom: 46px"
          />
          <a-slider
            :default-value="80"
            show-input
            style="margin-bottom: 36px"
          />

          <a-slider :default-value="[10, 90]" range show-input />
        </div>
        <div style="width: 300px">
          <a-space :size="0" style="margin-bottom: 56px">
            <div
              style="
                width: 23px;
                text-align: right;
                padding-right: 8px;
                box-sizing: border-box;
              "
              >0</div
            >
            <a-slider
              :default-value="6"
              show-ticks
              :min="0"
              :max="10"
              style="width: 258px"
            />
            <div style="padding-left: 8px">10</div>
          </a-space>
          <div>
            <a-slider
              style="margin-bottom: 36px; width: 274px; box-sizing: border-box"
              :default-value="5"
              :max="15"
              :marks="{
                0: '0km',
                5: '5km',
                10: '10km',
                15: '15km',
              }"
            />
          </div>
          <a-slider
            range
            :max="20"
            :default-value="[5, 10]"
            :marks="{
              5: '5km',
              10: '10km',
            }"
            style="vertical-align: top"
            direction="vertical"
          />
        </div>
      </a-row>
    </div>

    <div class="component-demo-list" style="padding-right: 156px">
      <a-typography-title :heading="5" bold> 其他 Others </a-typography-title>
      <a-row style="margin-top: 30px">
        <div
          style="
            padding-right: 56px;
            border-right: 1px solid var(--color-border-2);
          "
        >
          <div>
            <a-space :size="24">
              <a-checkbox indeterminate>Checkbox</a-checkbox>
              <a-checkbox default-checked>Checkbox</a-checkbox>
              <a-checkbox>Checkbox</a-checkbox>
              <a-checkbox checked disabled> Checkbox </a-checkbox>
              <a-checkbox disabled>Checkbox</a-checkbox>
            </a-space>
          </div>
          <div style="margin-top: 36px; margin-bottom: 36px">
            <a-space :size="24">
              <a-radio default-checked>Radio</a-radio>
              <a-radio>Radio</a-radio>
              <a-radio default-checked disabled> Radio </a-radio>
              <a-radio disabled>Radio</a-radio>
            </a-space>
          </div>
          <div>
            <div>
              <a-space :size="56">
                <a-space :size="24">
                  <a-switch default-checked />
                  <a-switch default-checked disabled />
                  <a-switch disabled />
                </a-space>
                <a-space :size="24">
                  <a-switch default-checked type="round" />
                  <a-switch default-checked disabled type="round" />
                  <a-switch type="round" disabled />
                </a-space>
              </a-space>
            </div>
            <div>
              <a-space :size="56" style="margin-top: 24px">
                <a-space :size="24">
                  <a-switch default-checked>
                    <template #checked-icon>
                      <IconSunFill />
                    </template>
                    <template #unchecked-icon>
                      <IconMoonFill />
                    </template>
                  </a-switch>
                  <a-switch default-checked disabled>
                    <template #checked-icon>
                      <IconSunFill />
                    </template>
                    <template #unchecked-icon>
                      <IconMoonFill />
                    </template>
                  </a-switch>
                  <a-switch disabled>
                    <template #checked-icon>
                      <IconSunFill />
                    </template>
                    <template #unchecked-icon>
                      <IconMoonFill />
                    </template>
                  </a-switch>
                </a-space>
                <a-space :size="24">
                  <a-switch default-checked type="round">
                    <template #checked-icon>
                      <IconCheck />
                    </template>
                    <template #unchecked-icon>
                      <IconClose />
                    </template>
                  </a-switch>
                  <a-switch default-checked disabled type="round">
                    <template #checked-icon>
                      <IconCheck />
                    </template>
                    <template #unchecked-icon>
                      <IconClose />
                    </template>
                  </a-switch>
                  <a-switch type="round" disabled>
                    <template #checked-icon>
                      <IconCheck />
                    </template>
                    <template #unchecked-icon>
                      <IconClose />
                    </template>
                  </a-switch>
                </a-space>
              </a-space>
            </div>
            <div>
              <a-space :size="56" style="margin-top: 24px">
                <a-space :size="24">
                  <a-switch default-checked>
                    <template #checked-icon>
                      <IconCheck />
                    </template>
                    <template #unchecked-icon>
                      <IconClose />
                    </template>
                  </a-switch>
                  <a-switch default-checked disabled>
                    <template #checked-icon>
                      <IconCheck />
                    </template>
                    <template #unchecked-icon>
                      <IconClose />
                    </template>
                  </a-switch>
                  <a-switch disabled>
                    <template #checked-icon>
                      <IconCheck />
                    </template>
                    <template #unchecked-icon>
                      <IconClose />
                    </template>
                  </a-switch>
                </a-space>
                <a-space :size="24">
                  <a-switch default-checked type="line" />
                  <a-switch default-checked disabled type="line" />
                  <a-switch type="line" disabled />
                </a-space>
              </a-space>
            </div>
            <div>
              <a-space :size="24" style="margin-top: 24px">
                <a-switch default-checked>
                  <template #checked> ON </template>
                  <template #unchecked> OFF </template>
                  <template #checked-icon>
                    <IconCheck />
                  </template>
                  <template #unchecked-icon>
                    <IconClose />
                  </template>
                </a-switch>
                <a-switch default-checked disabled>
                  <template #checked> ON </template>
                  <template #unchecked> OFF </template>
                  <template #checked-icon>
                    <IconCheck />
                  </template>
                  <template #unchecked-icon>
                    <IconClose />
                  </template>
                </a-switch>
                <a-switch disabled>
                  <template #checked> ON </template>
                  <template #unchecked> OFF </template>
                  <template #checked-icon>
                    <IconCheck />
                  </template>
                  <template #unchecked-icon>
                    <IconClose />
                  </template>
                </a-switch>
              </a-space>
            </div>
          </div>
        </div>
        <div style="padding-left: 56px">
          <a-rate :count="5" :default-value="3"></a-rate>
        </div>
      </a-row>
    </div>
  </div>
</template>

<script lang="ts">
import { IconCalendar } from '@arco-design/web-vue/es/icon';
import { defineComponent, ref, h } from 'vue';

export default defineComponent({
  setup() {
    //
    const formModel = ref({});
    const treeData = [
      {
        key: 'node1',
        icon: () => h(IconCalendar),
        title: 'Trunk',
        disabled: true,
        children: [
          {
            key: 'node2',
            title: 'Leaf',
          },
        ],
      },
      {
        key: 'node3',
        title: 'Trunk2',
        icon: () => h(IconCalendar),
        children: [
          {
            key: 'node4',
            title: 'Leaf',
          },
          {
            key: 'node5',
            title: 'Leaf',
          },
        ],
      },
    ];
    return {
      formModel,
      treeData,
    };
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
:deep(.arco-slider-track-vertical) {
  min-height: 152px;
}
</style>
