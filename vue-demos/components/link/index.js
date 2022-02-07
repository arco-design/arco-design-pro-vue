import DemoItem from '../../demoItem';

function Demo() {
  return (
    <div>
      <h4>基础用法</h4>
      <DemoItem profile={{ type: 'Default', title: '基本样式' }}>
        <Space wrap>
          <Link href="#">Default</Link>
          <Link href="#" disabled>
            Default
          </Link>
        </Space>
      </DemoItem>
      <h4>悬浮状态无底色</h4>
      <DemoItem>
        <Space wrap>
          <Link href="#" hoverable={false}>
            Default
          </Link>
          <Link href="#" disabled>
            Default
          </Link>
        </Space>
      </DemoItem>
      <h4>其他状态</h4>
      <DemoItem profile={{ type: 'Status', title: '其他状态' }}>
        <Space size={0} direction="vertical">
          <Space wrap>
            <Link href="#" status="success">
              Success Link
            </Link>
            <Link href="#" status="success" disabled>
              Success Link
            </Link>
          </Space>
          <Space wrap>
            <Link href="#" status="danger">
              Error Link
            </Link>
            <Link href="#" status="danger" disabled>
              Error Link
            </Link>
          </Space>
          <Space wrap>
            <Link href="#" status="warning">
              Warning Link
            </Link>
            <Link href="#" status="warning" disabled>
              Warning Link
            </Link>
          </Space>
        </Space>
      </DemoItem>
      <h4>图标</h4>
      <DemoItem profile={{ type: 'Icon', title: '图标' }}>
        <Space size={0} direction="vertical">
          <Space wrap>
            <Link href="#" icon>
              Hyperlinks
            </Link>
            <Link href="#" icon disabled>
              Hyperlinks
            </Link>
          </Space>
          <Space wrap>
            <Link href="#" v-slots={{icon: () => <IconEdit/>}}>
              Hyperlinks
            </Link>
            <Link href="#" v-slots={{icon: () => <IconEdit />}} disabled>
              Hyperlinks
            </Link>
          </Space>
        </Space>
      </DemoItem>
    </div>
  );
}

export default {
  setup() {
    return Demo;
  },
};
