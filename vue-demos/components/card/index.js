import DemoItem from '../../demoItem';

function Demo() {
  return (
    <div>
      <h4>基本样式</h4>
      <DemoItem profile={{ type: 'Default', title: '基本样式' }}>
        <Card style={{ width: '360px' }} title="Arco Card" v-slots={{ extra: () => <IconEdit></IconEdit> }}>
          ByteDance's core product, Toutiao ('Headlines'), is a content platform in China and around the world. Toutiao
          started out as a news recommendation engine and gradually evolved into a platform delivering content in
          various formats.
        </Card>
      </DemoItem>
      <h4>底部按钮组</h4>
      <DemoItem profile={{ type: 'Actions', title: '操作按钮' }}>
        <Card
          style={{ width: '360px' }}
          title="Arco Card"
          v-slots={{
            actions: () => [
              <span key="1">
                <IconThumbUp />
              </span>,
              <span key="2">
                <IconShareInternal />
              </span>,
              <span key="3">
                <IconMore />
              </span>,
            ],
          }}
        >
          ByteDance's core product, Toutiao ('Headlines'), is a content platform in China and around the world. Toutiao
          started out as a news recommendation engine and gradually evolved into a platform delivering content in
          various formats.
        </Card>
      </DemoItem>
      <h4>无边框卡片</h4>
      <DemoItem
        profile={{ type: 'Borderless', title: '无边框卡片' }}
        style={{ padding: '40px', backgroundColor: 'var(--color-fill-2)' }}
      >
        <Card
          style={{ width: '360px' }}
          bordered={false}
          title="Arco Card"
          v-slots={{ extra: () => <IconEdit></IconEdit> }}
        >
          ByteDance's core product, Toutiao ('Headlines'), is a content platform in China and around the world. Toutiao
          started out as a news recommendation engine and gradually evolved into a platform delivering content in
          various formats.
        </Card>
      </DemoItem>
      <h4>小型卡片</h4>
      <DemoItem profile={{ type: 'Small', title: '小型卡片' }}>
        <Card
          style={{ width: '360px' }}
          title="Arco Card"
          size="small"
          v-slots={{ extra: () => <IconEdit></IconEdit> }}
        >
          ByteDance's core product, Toutiao ('Headlines'), is a content platform in China and around the world. Toutiao
          started out as a news recommendation engine and gradually evolved into a platform delivering content in
          various formats.
        </Card>
      </DemoItem>
      <h4>使用 CardMeta 支持更加灵活的内容（封面、头像、 标题、描述信息）</h4>
      <DemoItem profile={{ type: 'Meta', title: '简洁卡片' }}>
        <Card
          hoverable
          style={{ width: '360px' }}
          v-slots={{
            cover: () => (
              <div
                style={{
                  height: '204px',
                  overflow: 'hidden',
                }}
              >
                <img
                  style={{ width: '100%', transform: 'translateY(-20px)' }}
                  alt="dessert"
                  src="//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/3ee5f13fb09879ecb5185e440cef6eb9.png~tplv-uwbnlip3yd-webp.webp"
                />
              </div>
            ),
          }}
        >
          <CardMeta
            title="Card Title"
            v-slots={{
              description: () => (
                <span>
                  Card content <br /> Card content
                </span>
              ),
            }}
          />
        </Card>
      </DemoItem>
      <h4>加载状态的卡片</h4>
      <DemoItem>
        <Card style={{ width: '360px' }} title="Arco Card" loading v-slots={{ extra: () => <IconEdit></IconEdit> }}>
          ByteDance's core product, Toutiao ('Headlines'), is a content platform in China and around the world. Toutiao
          started out as a news recommendation engine and gradually evolved into a platform delivering content in
          various formats.
        </Card>
      </DemoItem>
      <h4>网络型内嵌卡片</h4>
      <DemoItem>
        <Card bordered={false} style={{ width: '100%' }}>
          {new Array(7).fill(null).map((_, index) => {
            return (
              <CardGrid key={index} hoverable style={{ width: '25%' }}>
                <Card
                  class={`card-demo card-demo-in-grid`}
                  style={{ width: '100%' }}
                  title="Arco Card"
                  v-slots={{ extra: () => <IconMore></IconMore> }}
                  bordered={false}
                >
                  {new Array(2).fill(null).map((_, index) => (
                    <p style={{ margin: '0px' }} key={index}>
                      Card content
                    </p>
                  ))}
                </Card>
              </CardGrid>
            );
          })}
        </Card>
      </DemoItem>
    </div>
  );
}

export default {
  setup() {
    return Demo;
  },
};
