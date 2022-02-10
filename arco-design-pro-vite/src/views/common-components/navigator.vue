<script lang="tsx">
// import { PageHeader, Radio } from '@arco-design/web-vue';
import { defineComponent } from 'vue';
import {
  IconRight,
  IconHome,
  IconExclamationCircleFill,
  IconExclamation,
} from '@arco-design/web-vue/es/icon';

export default defineComponent({
  setup() {
    return () => (
      <div>
        <div class="component-demo-list" style={{ paddingRight: '156px' }}>
          <a-typography-title heading={5} bold>
            面包屑 Breadcrumb
          </a-typography-title>
          <div>
            <a-typography-paragraph
              type="secondary"
              style={{
                color: 'var(--color-neutral-5)',
                marginTop: 20,
                marginBottom: 16,
              }}
            >
              基础样式
            </a-typography-paragraph>
            <a-row>
              {[undefined, <IconRight />, <IconRight />].map((item, index) => {
                return (
                  <div
                    style={index < 2 ? { minWidth: '270px' } : {}}
                    key={index}
                  >
                    <div style={{ marginBottom: '20px' }}>
                      <a-breadcrumb separator={item}>
                        <a-breadcrumb-item>Home</a-breadcrumb-item>
                        <a-breadcrumb-item>Channel</a-breadcrumb-item>
                        <a-breadcrumb-item>News</a-breadcrumb-item>
                      </a-breadcrumb>
                    </div>
                    <div style={{ marginBottom: '20px' }}>
                      <a-breadcrumb maxCount={3} separator={item}>
                        <a-breadcrumb-item>Home</a-breadcrumb-item>
                        <a-breadcrumb-item>Sub Home</a-breadcrumb-item>
                        <a-breadcrumb-item>All Channel</a-breadcrumb-item>
                        <a-breadcrumb-item>Channel</a-breadcrumb-item>
                        <a-breadcrumb-item>News</a-breadcrumb-item>
                      </a-breadcrumb>
                    </div>
                    <div>
                      <a-breadcrumb separator={item}>
                        <a-breadcrumb-item>
                          <IconHome style={{ marginRight: '2px' }} /> Home
                        </a-breadcrumb-item>
                        <a-breadcrumb-item>
                          <IconHome style={{ marginRight: '2px' }} />
                          Channel
                        </a-breadcrumb-item>
                        <a-breadcrumb-item>
                          <IconHome style={{ marginRight: '2px' }} />
                          News
                        </a-breadcrumb-item>
                      </a-breadcrumb>
                    </div>
                  </div>
                );
              })}
            </a-row>
          </div>
          <div>
            <a-typography-paragraph
              type="secondary"
              style={{
                color: 'var(--color-neutral-5)',
                marginTop: '36px',
                marginBottom: '16px',
              }}
            >
              嵌套可点击的链接文本
            </a-typography-paragraph>
            <a-space size={0}>
              {[undefined, <IconRight />, <IconRight />].map((item, index) => {
                return (
                  <a-breadcrumb
                    separator={item}
                    key={index}
                    style={index < 2 ? { minWidth: '270px' } : {}}
                  >
                    <a-breadcrumb-item>
                      <a href="#">Link 1</a>
                    </a-breadcrumb-item>
                    <a-breadcrumb-item>
                      <a href="#">Link 2</a>
                    </a-breadcrumb-item>
                    <a-breadcrumb-item>
                      <a href="#">Link 3</a>
                    </a-breadcrumb-item>
                  </a-breadcrumb>
                );
              })}
            </a-space>
          </div>
        </div>
        <div class="component-demo-list" style={{ paddingRight: '156px' }}>
          <a-typography-title heading={5} bold>
            页头 PageHeader
          </a-typography-title>
          <div style={{ maxWidth: '736px' }}>
            {[
              { showBack: false },
              { showBack: true },
              {
                showBack: false,
                subtitle: (
                  <span>
                    This is a description{' '}
                    <a-tag
                      color="orange"
                      v-slots={{
                        icon: () => <IconExclamationCircleFill />,
                      }}
                    >
                      Warning
                    </a-tag>
                  </span>
                ),
                breadcrumb: true,
              },
              {
                showBack: true,
                subtitle: (
                  <span>
                    This is a description{' '}
                    <a-tag
                      color="orange"
                      v-slots={{
                        icon: () => <IconExclamationCircleFill />,
                      }}
                    >
                      Warning
                    </a-tag>
                  </span>
                ),
                breadcrumb: true,
              },
            ].map((props, index) => {
              return (
                <div
                  key={index}
                  style={{
                    marginTop: '24px',
                    border: '1px solid var(--color-border-2)',
                  }}
                >
                  <a-page-header
                    showBack={props.showBack}
                    v-slots={{
                      title: () => (
                        <span>
                          <img
                            style={{
                              width: '32px',
                              height: '32px',
                              verticalAlign: 'middle',
                            }}
                            src="//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/34d5edd703e44f54870e7e40496e65f3~tplv-uwbnlip3yd-image.image"
                          />
                          ArcoDesign
                        </span>
                      ),

                      subtitle: () => props.subtitle || 'This is a description',
                      extra: () => (
                        <div>
                          <a-radio-group
                            mode="fill"
                            type="button"
                            defaultValue="small"
                          >
                            <a-radio value="large">Large</a-radio>
                            <a-radio value="medium">Medium</a-radio>
                            <a-radio value="small">Small</a-radio>
                          </a-radio-group>
                        </div>
                      ),
                      breadcrumb: () =>
                        props.breadcrumb ? (
                          <a-breadcrumb>
                            <a-breadcrumb-item>Home</a-breadcrumb-item>
                            <a-breadcrumb-item>Channel</a-breadcrumb-item>
                            <a-breadcrumb-item>News</a-breadcrumb-item>
                          </a-breadcrumb>
                        ) : null,
                    }}
                  />
                </div>
              );
            })}
          </div>
        </div>
        <div class="component-demo-list" style={{ paddingRight: '156px' }}>
          <a-typography-title heading={5} bold>
            步骤条 Steps
          </a-typography-title>
          <div style={{ maxWidth: '667px' }}>
            <a-typography-paragraph
              type="secondary"
              style={{
                color: 'var(--color-neutral-5)',
                marginTop: '20px',
                marginBottom: '20px',
              }}
            >
              基础样式
            </a-typography-paragraph>
            <a-steps
              current={2}
              style={{ marginBottom: '36px', maxWidth: '625px' }}
            >
              <a-step title="Succeeded" />
              <a-step title="Processing" />
              <a-step title="Waiting" />
            </a-steps>
            <a-steps current={2} style={{ marginBottom: '36px' }}>
              <a-step title="Succeeded" description="This is a description" />
              <a-step title="Processing" description="This is a description" />
              <a-step title="Waiting" description="This is a description" />
            </a-steps>

            <a-steps
              current={2}
              status="error"
              style={{ marginBottom: '36px' }}
            >
              <a-step title="Succeeded" description="This is a description" />
              <a-step title="Processing" description="This is a description" />
              <a-step title="Waiting" description="This is a description" />
            </a-steps>
            <a-steps current={2} style={{ marginBottom: '36px' }}>
              <a-step title="Succeeded" description="This is a description" />
              <a-step
                title="Processing"
                icon={<IconExclamation />}
                description="This is a description"
              />
              <a-step title="Waiting" description="This is a description" />
            </a-steps>
          </div>
          <a-space size={56}>
            <div
              style={{
                borderRight: '1px solid var(--color-border-2)',
                paddingRight: '56px',
              }}
            >
              <a-typography-paragraph
                type="secondary"
                style={{ color: 'var(--color-neutral-5)', marginBottom: 20 }}
              >
                居中标签
              </a-typography-paragraph>
              <a-steps labelPlacement="vertical" current={2}>
                <a-step title="Succeeded" description="This is a description" />
                <a-step
                  title="Processing"
                  description="This is a description"
                />
                <a-step title="Waiting" description="This is a description" />
              </a-steps>
            </div>
            <div>
              <a-typography-paragraph
                type="secondary"
                style={{ color: 'var(--color-neutral-5)', marginBottom: 20 }}
              >
                隐藏连接线
              </a-typography-paragraph>
              <a-steps lineless current={2}>
                <a-step title="Succeeded" description="This is a description" />
                <a-step
                  title="Processing"
                  description="This is a description"
                />
                <a-step title="Waiting" description="This is a description" />
              </a-steps>
            </div>
          </a-space>
          <div
            style={{
              maxWidth: '710px',
              marginTop: '36px',
              marginBottom: '36px',
            }}
          >
            <a-typography-paragraph
              type="secondary"
              style={{ color: 'var(--color-neutral-5)', marginBottom: '20px' }}
            >
              点状步骤条
            </a-typography-paragraph>
            <a-steps type="dot" current={2} style={{ marginBottom: '36px' }}>
              <a-step title="Succeeded" description="This is a description" />
              <a-step title="Processing" description="This is a description" />
              <a-step title="Waiting" description="This is a description" />
              <a-step title="Waiting" description="This is a description" />
            </a-steps>

            <a-steps type="dot" status="error" current={2}>
              <a-step title="Succeeded" description="This is a description" />
              <a-step title="Processing" description="This is a description" />
              <a-step title="Waiting" description="This is a description" />
              <a-step title="Waiting" description="This is a description" />
            </a-steps>
          </div>
          <div
            style={{
              maxWidth: '672px',
              marginTop: '36px',
              marginBottom: '36px',
            }}
          >
            <a-typography-paragraph
              type="secondary"
              style={{ color: 'var(--color-neutral-5)', marginBottom: 20 }}
            >
              箭头步骤条
            </a-typography-paragraph>
            <a-steps
              type="arrow"
              size="small"
              current={2}
              style={{ marginBottom: '36px' }}
            >
              <a-step title="Succeeded" description="This is a description" />
              <a-step title="Processing" description="This is a description" />
              <a-step title="Waiting" description="This is a description" />
            </a-steps>
            <a-steps type="arrow" current={2} style={{ marginBottom: '36px' }}>
              <a-step title="Succeeded" description="This is a description" />
              <a-step title="Processing" description="This is a description" />
              <a-step title="Waiting" description="This is a description" />
            </a-steps>

            <a-steps type="arrow" status="error" current={2}>
              <a-step title="Succeeded" description="This is a description" />
              <a-step title="Processing" description="This is a description" />
              <a-step title="Waiting" description="This is a description" />
            </a-steps>
          </div>
          <div
            style={{
              maxWidth: '704px',
              marginTop: '36px',
              marginBottom: '36px',
            }}
          >
            <a-typography-paragraph
              type="secondary"
              style={{ color: 'var(--color-neutral-5)', marginBottom: '36px' }}
            >
              导航步骤条
            </a-typography-paragraph>

            <a-steps type="navigation" current={2}>
              <a-step title="Succeeded" description="This is a description" />
              <a-step title="Processing" description="This is a description" />
              <a-step title="Waiting" description="This is a description" />
            </a-steps>
          </div>
          <div>
            <a-typography-paragraph
              type="secondary"
              style={{ color: 'var(--color-neutral-5)', marginBottom: '20px' }}
            >
              竖向步骤条
            </a-typography-paragraph>
            <a-space size={100}>
              <a-steps direction="vertical" current={2}>
                <a-step title="Succeeded" description="This is a description" />
                <a-step
                  title="Processing"
                  description="This is a description"
                />
                <a-step title="Waiting" description="This is a description" />
              </a-steps>

              <a-steps direction="vertical" type="dot" current={2}>
                <a-step title="Succeeded" description="This is a description" />
                <a-step
                  title="Processing"
                  description="This is a description"
                />
                <a-step title="Waiting" description="This is a description" />
              </a-steps>
            </a-space>
          </div>
        </div>
        <div class="component-demo-list">
          <a-typography-title heading={5} bold>
            分页 Pagination
          </a-typography-title>
          <a-space size={120} style={{ marginTop: '36px' }}>
            <a-pagination show-page-size total={50} showJumper sizeCanChange />
            <a-pagination simple total={50} />
          </a-space>
        </div>
      </div>
    );
  },
});
</script>

<style scoped lang="less"></style>
