import DemoItem from '../../demoItem';

export default function Demo() {
  return (
    <div>
      <h4>基本样式</h4>
      <DemoItem profile={{ type: 'Default', title: '基本样式' }}>
        <Space size="large" align="start">
          <Spin />
          <Spin tip="loading ..." />
        </Space>
      </DemoItem>
      <h4>点类型的指示符</h4>
      <DemoItem profile={{ type: 'Dot', title: '基本样式' }}>
        <Spin dot />
      </DemoItem>
      <h4>在容器中展示</h4>
      <DemoItem>
        <Spin tip="This may take a while..." loading>
          <div style={{ width: '400px' }}>
            ByteDance's core product, Toutiao ('Headlines'), is a content platform in China and around the world.
            Toutiao started out as a news recommendation engine and gradually evolved into a platform delivering content
            in various formats.
          </div>
        </Spin>
      </DemoItem>
    </div>
  );
}
