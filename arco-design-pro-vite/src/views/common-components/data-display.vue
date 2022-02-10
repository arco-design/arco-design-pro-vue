<script lang="tsx">
import {
  IconUser,
  IconEdit,
  IconDelete,
  IconCalendar,
  IconCheckCircleFill,
} from '@arco-design/web-vue/es/icon';
import { defineComponent } from 'vue';

export default defineComponent({
  setup() {
    const CollapseDemo = (props: any) => {
      return (
        <a-collapse
          defaultActiveKey={['1', '2']}
          style={{ maxWidth: '468px' }}
          {...props}
        >
          <a-collapse-item
            header="Beijing Toutiao Technology Co., Ltd."
            key="1"
          >
            Beijing Toutiao Technology Co., Ltd.
          </a-collapse-item>
          <a-collapse-item header="Introduce" key="2" disabled>
            ByteDance's core product, Toutiao ('Headlines'), is a content
            platform in China and around the world.
          </a-collapse-item>
          <a-collapse-item header="The Underlying AI Technology" key="3">
            In 2016, ByteDance's AI Lab and Peking University co-developed
            Xiaomingbot (张小明), an artificial intelligence bot that writes
            news articles.
          </a-collapse-item>
        </a-collapse>
      );
    };
    const data = [
      {
        label: 'Name',
        value: 'Socrates',
      },
      {
        label: 'Mobile',
        value: '123-1234-1234',
      },
      {
        label: 'Residence',
        value: 'Beijing',
      },
      {
        label: 'Hometown',
        value: 'Beijing',
      },
      {
        label: 'Address',
        value: 'Yingdu Building, Zhichun Road, Beijing',
      },
    ];
    const dataSource = [
      'Beijing Bytedance Technology Co., Ltd.',
      'Bytedance Technology Co., Ltd.',
      'Beijing Toutiao Technology Co., Ltd.',
      'Beijing Volcengine Technology Co., Ltd.',
      'China Beijing Bytedance Technology Co., Ltd.',
    ];
    const TabsDemo = ({
      type,
      tabPosition = 'top',
      height = '',
      editable = false,
      count = 3,
    }: any) => {
      const showIcon = type === 'icon line';
      const dom = (
        <a-tabs
          type={showIcon ? 'line' : (type as any)}
          style={height ? { height } : {}}
          editable={editable}
          tabPosition={tabPosition as any}
        >
          {[...new Array(count)].map((_, index) => {
            return (
              <a-tab-pane
                key={index}
                title={
                  <span>
                    {showIcon ? <IconCalendar /> : ''} Tab {index}
                  </span>
                }
              ></a-tab-pane>
            );
          })}
        </a-tabs>
      );

      return tabPosition === 'top' ? (
        <div style={{ display: 'inline-flex', maxWidth: 300 }}>{dom}</div>
      ) : (
        dom
      );
    };
    const COLORS = [
      'red',
      'orangered',
      'orange',
      'gold',
      'lime',
      'green',
      'cyan',
      'blue',
      'arcoblue',
      'purple',
      'pinkpurple',
    ];
    const TagDemo = (props: any) => {
      return (
        <a-tag visible {...props} v-slots={{ icon: props.icon }}>
          {props.color || 'Default'}
        </a-tag>
      );
    };
    const TreeData = [
      {
        title: 'Trunk 1',
        key: '0-0',
        children: [
          {
            title: 'Trunk 1-0',
            key: '0-0-0',
            children: [{ title: 'leaf', key: '0-0-0-0' }],
          },
          {
            title: 'Trunk 1-1',
            key: '0-0-1',
            children: [
              { title: 'leaf', key: '0-0-1-0' },
              {
                title: 'leaf',
                key: '0-0-1-1',
              },
            ],
          },
        ],
      },
      {
        title: 'Trunk 2',
        key: '0-2',
        children: [
          {
            title: 'Trunk 2-0',
            key: '0-2-0',
          },
          {
            title: 'Trunk 2-1',
            key: '0-2-1',
          },
        ],
      },
    ];
    return () => (
      <div>
        <div class="component-demo-list" style={{ paddingRight: '156px' }}>
          <a-typography-title heading={5} bold>
            头像 Avatar
          </a-typography-title>
          <a-space size={80} align="start" style={{ marginTop: '20px' }}>
            {['circle', 'square'].map((shape) => {
              return (
                <a-space key={shape} size={20}>
                  <a-avatar shape={shape as any}>
                    <IconUser />
                  </a-avatar>
                  <a-avatar shape={shape as any}>A</a-avatar>
                  <a-avatar shape={shape as any}>
                    <img
                      alt="a-avatar"
                      src="//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/9eeb1800d9b78349b24682c3518ac4a3.png~tplv-uwbnlip3yd-webp.webp"
                    />
                  </a-avatar>
                  <a-avatar shape={shape as any} triggerIcon={<IconEdit />}>
                    <img
                      alt="a-avatar"
                      src="//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/9eeb1800d9b78349b24682c3518ac4a3.png~tplv-uwbnlip3yd-webp.webp"
                    />
                  </a-avatar>
                  <a-avatar
                    shape={shape as any}
                    triggerIcon={<IconEdit />}
                    triggerType="mask"
                  >
                    <img
                      alt="a-avatar"
                      src="//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/9eeb1800d9b78349b24682c3518ac4a3.png~tplv-uwbnlip3yd-webp.webp"
                    />
                  </a-avatar>
                  <a-badge count={16}>
                    <a-avatar shape={shape as any} />
                  </a-badge>
                  <a-badge count={20} dot>
                    <a-avatar shape={shape as any} />
                  </a-badge>
                </a-space>
              );
            })}
          </a-space>
        </div>

        <div class="component-demo-list" style={{ paddingRight: '156px' }}>
          <a-typography-title heading={5} bold>
            折叠面板 Collapse
          </a-typography-title>
          <a-space size={56} align="start">
            <div>
              <a-typography-paragraph
                type="secondary"
                style={{
                  color: 'var(--color-neutral-5)',
                  marginTop: '10px',
                  marginBottom: '16px',
                }}
              >
                基础面板
              </a-typography-paragraph>
              <CollapseDemo />
            </div>
            <div>
              <a-typography-paragraph
                type="secondary"
                style={{
                  color: 'var(--color-neutral-5)',
                  marginTop: '10px',
                  marginBottom: '16px',
                }}
              >
                简洁面板
              </a-typography-paragraph>
              <CollapseDemo bordered={false} />
            </div>
          </a-space>
          <div>
            <a-typography-paragraph
              type="secondary"
              style={{
                color: 'var(--color-neutral-5)',
                marginTop: '36px',
                marginBottom: '16px',
              }}
            >
              嵌套面板
            </a-typography-paragraph>
            <a-collapse defaultActiveKey={['1', '2']}>
              <a-collapse-item
                header="Beijing Toutiao Technology Co., Ltd."
                key="1"
              >
                <a-collapse defaultActiveKey={'1.1'}>
                  <a-collapse-item
                    header="Beijing Toutiao Technology Co., Ltd."
                    key="1.1"
                  >
                    Beijing Toutiao Technology Co., Ltd.
                  </a-collapse-item>
                  <a-collapse-item
                    header="Beijing Toutiao Technology Co., Ltd."
                    key="1.2"
                  >
                    Beijing Toutiao Technology Co., Ltd.
                  </a-collapse-item>
                </a-collapse>
              </a-collapse-item>
              <a-collapse-item
                header="Beijing Toutiao Technology Co., Ltd."
                key="2"
              >
                Beijing Toutiao Technology Co., Ltd.
              </a-collapse-item>
              <a-collapse-item
                header="Beijing Toutiao Technology Co., Ltd."
                key="3"
              >
                Beijing Toutiao Technology Co., Ltd.
              </a-collapse-item>
            </a-collapse>
          </div>
          <a-space size={56} align="start">
            <div>
              <a-typography-paragraph
                type="secondary"
                style={{
                  color: 'var(--color-neutral-5)',
                  marginTop: '36px',
                  marginBottom: '16px',
                }}
              >
                右侧图标
              </a-typography-paragraph>
              <CollapseDemo expandIconPosition="right" />
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
                隐藏图标
              </a-typography-paragraph>
              <CollapseDemo expandIcon={null} />
            </div>
          </a-space>
        </div>
        <div class="component-demo-list" style={{ paddingRight: '156px' }}>
          <a-typography-title heading={5} bold>
            描述列表 a-descriptions
          </a-typography-title>
          <div>
            <a-typography-paragraph
              type="secondary"
              style={{
                color: 'var(--color-neutral-5)',
                marginTop: '20px',
                marginBottom: '16px',
              }}
            >
              基本样式
            </a-typography-paragraph>
            <div
              style={{
                padding: '24px',
                border: '1px solid var(--color-border-2)',
                maxWidth: '668px',
              }}
            >
              <a-descriptions title="User Info" data={data} />
            </div>
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
              带边框样式
            </a-typography-paragraph>
            <div
              style={{
                padding: '24px',
                border: '1px solid var(--color-border-2)',
                maxWidth: '668px',
              }}
            >
              <a-descriptions title="User Info" bordered data={data} />
            </div>
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
              其他样式
            </a-typography-paragraph>
            <div
              style={{
                padding: '24px',
                border: '1px solid var(--color-border-2)',
                marginBottom: '16px',
                maxWidth: '668px',
              }}
            >
              <a-descriptions
                title="User Info"
                data={data}
                layout="vertical"
                bordered
              />
            </div>
            <div
              style={{
                padding: '24px',
                border: '1px solid var(--color-border-2)',
                maxWidth: '668px',
              }}
            >
              <a-descriptions
                title="User Info"
                data={data}
                layout="inline-vertical"
                bordered
              />
            </div>
          </div>
        </div>
        <div class="component-demo-list" style={{ paddingRight: '156px' }}>
          <a-typography-title heading={5} bold>
            列表 List
          </a-typography-title>
          <a-row gutter={56}>
            <a-col span={12}>
              <a-typography-paragraph
                type="secondary"
                style={{
                  color: 'var(--color-neutral-5)',
                  marginTop: '10px',
                  marginBottom: '16px',
                }}
              >
                基础样式
              </a-typography-paragraph>
              <a-list header="List title">
                {dataSource.map((item, index) => {
                  return <a-list-item key={index}>{item}</a-list-item>;
                })}
              </a-list>
            </a-col>
            <a-col span={12}>
              <a-typography-paragraph
                type="secondary"
                style={{
                  color: 'var(--color-neutral-5)',
                  marginTop: '10px',
                  marginBottom: '16px',
                }}
              >
                鼠标可悬浮
              </a-typography-paragraph>
              <a-list header="Ll title" hoverable>
                {dataSource.map((item, index) => {
                  return <a-list-item key={index}>{item}</a-list-item>;
                })}
              </a-list>
            </a-col>
          </a-row>
          <a-row gutter={56} align="start">
            {['horizontal', 'vertical'].map((x) => {
              return (
                <a-col span={12} key={x}>
                  <a-typography-paragraph
                    type="secondary"
                    style={{
                      color: 'var(--color-neutral-5)',
                      marginTop: '36px',
                      marginBottom: '16px',
                    }}
                  >
                    {x === 'horizontal' ? '右侧' : '底部'}操作
                  </a-typography-paragraph>
                  <a-list header="List title">
                    {dataSource.slice(3).map((item, index) => {
                      return (
                        <a-list-item
                          actionLayout={x as any}
                          v-slots={{
                            actions: () => (
                              <span>
                                <a-link key="1">
                                  <IconEdit />
                                </a-link>
                                <a-link key="2">
                                  <IconDelete />
                                </a-link>
                              </span>
                            ),
                          }}
                          key={index}
                        >
                          {item}
                        </a-list-item>
                      );
                    })}
                  </a-list>
                </a-col>
              );
            })}
          </a-row>
        </div>
        <div class="component-demo-list" style={{ paddingRight: '156px' }}>
          <a-typography-title heading={5} bold>
            标签页 Tabs
          </a-typography-title>

          <a-typography-paragraph
            type="secondary"
            style={{
              color: 'var(--color-neutral-5)',
              marginTop: '20px',
              marginBottom: '16px',
            }}
          >
            不同的选项卡样式
          </a-typography-paragraph>
          <a-space size={85} align="start">
            <div>
              <TabsDemo type="line" />
              <div style={{ marginTop: '36px' }}>
                <TabsDemo type="icon line" />
              </div>
              <div style={{ marginTop: '36px' }}>
                <TabsDemo type="text" />
              </div>
            </div>
            <div>
              <TabsDemo type="rounded" />
              <div style={{ marginTop: '36px' }}>
                <TabsDemo type="capsule" />
              </div>
            </div>
            <div>
              <TabsDemo type="card" />
              <div style={{ marginTop: '36px' }}>
                <TabsDemo type="card-gutter" />
              </div>
              <div style={{ marginTop: '36px' }}>
                <TabsDemo type="card-gutter" editable count={3} />
              </div>
            </div>
          </a-space>
          {false && (
            <a-typography-paragraph
              type="secondary"
              style={{
                color: 'var(--color-neutral-5)',
                marginTop: '36px',
                marginBottom: '16px',
              }}
            >
              超出滚动选项卡
            </a-typography-paragraph>
          )}
          {false && (
            <a-row justify="space-between">
              <div style={{ width: '30%' }}>
                <TabsDemo type="line" count={10} />
              </div>

              <div style={{ width: '30%' }}>
                <TabsDemo
                  type="line"
                  tabPosition="left"
                  count={10}
                  height="200px"
                />
              </div>
              <div style={{ width: '30%' }}></div>
            </a-row>
          )}
        </div>
        <div class="component-demo-list" style={{ paddingRight: '56px' }}>
          <a-typography-title heading={5} bold>
            标签 Tag
          </a-typography-title>

          <a-typography-paragraph
            type="secondary"
            style={{
              color: 'var(--color-neutral-5)',
              marginTop: '20px',
              marginBottom: '16px',
            }}
          >
            不同样式和颜色
          </a-typography-paragraph>
          <a-space wrap size={20}>
            <a-tag>Default</a-tag>
            {COLORS.map((color, i) => (
              <a-tag key={i} color={color}>
                {color}
              </a-tag>
            ))}
          </a-space>
          <br />
          <a-space wrap size={20}>
            <TagDemo closable>Default</TagDemo>
            {COLORS.map((color, i) => (
              <TagDemo key={i} closable color={color}>
                {color}
              </TagDemo>
            ))}
          </a-space>
          <br />
          <a-space wrap size={20}>
            <a-tag v-slots={{ icon: <IconCheckCircleFill /> }}>Default</a-tag>
            {COLORS.map((color, i) => (
              <a-tag
                key={i}
                color={color}
                v-slots={{ icon: <IconCheckCircleFill /> }}
              >
                {color}
              </a-tag>
            ))}
          </a-space>
          <br />
          <a-space wrap size={20}>
            <TagDemo closable icon={<IconCheckCircleFill />}>
              Default
            </TagDemo>
            {COLORS.map((color, i) => (
              <TagDemo
                key={i}
                closable
                color={color}
                icon={<IconCheckCircleFill />}
              >
                {color}
              </TagDemo>
            ))}
          </a-space>
          <a-typography-paragraph
            type="secondary"
            style={{
              color: 'var(--color-neutral-5)',
              marginTop: '20px',
              marginBottom: '16px',
            }}
          >
            支持选中
          </a-typography-paragraph>
          <a-space wrap size={20}>
            <a-tag checkable>Default</a-tag>
            {COLORS.map((color, i) => (
              <a-tag key={i} checkable color={color}>
                {color}
              </a-tag>
            ))}
          </a-space>
        </div>
        <div class="component-demo-list" style={{ paddingRight: '56px' }}>
          <a-typography-title heading={5} bold>
            树 Tree
          </a-typography-title>

          <a-space size={90} align="start">
            <div style={{ minWidth: 250 }}>
              <a-typography-paragraph
                type="secondary"
                style={{
                  color: 'var(--color-neutral-5)',
                  marginTop: 10,
                  marginBottom: 16,
                }}
              >
                基础树
              </a-typography-paragraph>
              <a-tree data={TreeData} />
            </div>
            <div style={{ minWidth: 250 }}>
              <a-typography-paragraph
                type="secondary"
                style={{
                  color: 'var(--color-neutral-5)',
                  marginTop: 10,
                  marginBottom: 16,
                }}
              >
                复选框树
              </a-typography-paragraph>
              <a-tree data={TreeData} checkable />
            </div>
            <div style={{ minWidth: 250 }}>
              <a-typography-paragraph
                type="secondary"
                style={{
                  color: 'var(--color-neutral-5)',
                  marginTop: 10,
                  marginBottom: 16,
                }}
              >
                连接线树
              </a-typography-paragraph>
              <a-tree data={TreeData} showLine />
            </div>
          </a-space>
          <div>
            <a-space size={90} align="start">
              <div style={{ minWidth: '250px' }}>
                <a-typography-paragraph
                  type="secondary"
                  style={{
                    color: 'var(--color-neutral-5)',
                    marginTop: '96px',
                    marginBottom: '16px',
                  }}
                >
                  拖拽树
                </a-typography-paragraph>
                <a-tree data={TreeData} checkable draggable />
              </div>
            </a-space>
          </div>
        </div>
      </div>
    );
  },
});
</script>

<style scoped lang="less"></style>
