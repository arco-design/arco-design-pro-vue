import DemoItem from '../../demoItem';

const labelStyle = {
  width: '80px',
  display: 'inline-block',
};

function Demo() {
  return (
    <div>
      <h4>基本样式</h4>
      <DemoItem profile={{ type: 'Default', title: '基本样式' }}>
        <Pagination showTotal total={200} showJumper showPageSize />
      </DemoItem>
      <h4>页码样式</h4>
      <DemoItem profile={{ type: 'PageItem', title: '页码样式' }}>
        <Space>
          <label>默认分页器</label>
          <Pagination total={200} />
        </Space>
        <br />
        <br />
        <Space>
          <label>禁用分页器</label>
          <Pagination total={200} disabled />
        </Space>
      </DemoItem>
      <h4>Prev / Next </h4>
      <DemoItem profile={{ type: 'Arrow', title: '跳转按钮' }}>
        <Pagination total={50} />
      </DemoItem>
      <h4>不同尺寸</h4>
      <DemoItem profile={{ type: 'Size', title: '不同尺寸' }}>
        <Space>
          <label style={labelStyle}>Mini</label>
          <Pagination size="mini" total={50} showTotal showJumper showPageSize />
        </Space>
        <br />
        <br />

        <Space>
          <label style={labelStyle}>Small</label>
          <Pagination size="small" total={50} showTotal showJumper showPageSize />
        </Space>
        <br />
        <br />

        <Space>
          <label style={labelStyle}>Medium</label>
          <Pagination size="medium" total={50} showTotal showJumper showPageSize />
        </Space>
        <br />
        <br />
        <Space>
          <label style={labelStyle}>Large</label>
          <Pagination size="large" total={50} showTotal showJumper showPageSize />
        </Space>
      </DemoItem>
      <h4>简洁模式</h4>
      <DemoItem profile={{ type: 'Simple', title: '简洁模式' }}>
        <Space>
          <label style={labelStyle}>Mini</label>

          <Pagination simple total={50} size="mini" />
        </Space>
        <br />
        <br />
        <Space>
          <label style={labelStyle}>Small</label>
          <Pagination simple total={50} size="small" />
        </Space>
        <br />
        <br />
        <Space>
          <label style={labelStyle}>Default</label>
          <Pagination simple total={50} />
        </Space>
        <br />
        <br />
        <Space>
          <label style={labelStyle}>Large</label>
          <Pagination simple total={50} size="large" />
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
