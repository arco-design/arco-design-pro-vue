import DemoItem from '../../demoItem';

function Demo() {
  return (
    <div>
      <h4>基础用法</h4>
      <DemoItem profile={{ type: 'Default', title: '基本样式' }}>
        <div style={{ background: 'var(--color-fill-2)', padding: '20px' }}>
          <Empty style={{ background: 'var(--color-bg-2)' }} />
        </div>
      </DemoItem>
      <h4>自定义图片</h4>
      <DemoItem profile={{ type: 'CustomImage', title: '基本样式' }}>
        <div style={{ background: 'var(--color-fill-2)', padding: '20px' }}>
          <Empty
            style={{ background: 'var(--color-bg-2)' }}
            imgSrc="//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/a0082b7754fbdb2d98a5c18d0b0edd25.png~tplv-uwbnlip3yd-webp.webp"
          />
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
