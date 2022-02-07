import DemoItem from '../../demoItem';

function Demo() {
  return (
    <div>
      <h4>基础用法</h4>
      <DemoItem profile={{ type: 'Default', title: '基本样式' }}>
        <div style={{ paddingTop: '60px' }}>
          <Tooltip autoFitPosition={false} popupVisible content="This is a Tooltip">
            <Button>Bottom tooltip</Button>
          </Tooltip>
        </div>
      </DemoItem>
      <h4>Mini 尺寸</h4>
      <DemoItem profile={{ type: 'Default', title: '基本样式' }}>
        <div style={{ paddingTop: '60px' }}>
          <Tooltip autoFitPosition={false} mini popupVisible content="This is a mini Tooltip">
            <Button>Mini tooltip</Button>
          </Tooltip>
        </div>
      </DemoItem>
    </div>
  );
}

export default {
  setup() {
    return Demo
  }
}
