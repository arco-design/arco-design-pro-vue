import DemoItem from '../../demoItem';

const labelStyle = {
  width: '60px',
  verticalAlign: 'middle',
  display: 'inline-block',
};

function Demo() {
  return (
    <div>
      <h4>默认按钮</h4>
      <DemoItem profile={{ type: 'Secondary', title: '默认按钮' }}>
        <Space size="large">
          <Button type="secondary">Default</Button>
          <Button type="secondary" status="warning">
            Default Warning
          </Button>
          <Button type="secondary" status="danger">
            Default Danger
          </Button>
          <Button type="secondary" status="success">
            Default Success
          </Button>
        </Space>
        <br />
        <br />

        <Space size="large">
          <Button type="secondary" disabled>
            Default
          </Button>
          <Button type="secondary" status="warning" disabled>
            Default Warning
          </Button>
          <Button type="secondary" status="danger" disabled>
            Default Danger
          </Button>
          <Button type="secondary" status="success" disabled>
            Default Success
          </Button>
        </Space>
      </DemoItem>
      <h4>主要按钮</h4>
      <DemoItem profile={{ type: 'Primary', title: '主要按钮' }}>
        <Space size="large">
          <Button type="primary">Primary</Button>
          <Button type="primary" status="warning">
            Primary Warning
          </Button>
          <Button type="primary" status="danger">
            Primary Danger
          </Button>
          <Button type="primary" status="success">
            Primary Success
          </Button>
        </Space>
        <br />
        <br />
        <Space size="large">
          <Button type="primary" disabled>
            Primary
          </Button>
          <Button type="primary" status="warning" disabled>
            Primary Warning
          </Button>
          <Button type="primary" status="danger" disabled>
            Primary Danger
          </Button>
          <Button type="primary" status="success" disabled>
            Primary Success
          </Button>
        </Space>
      </DemoItem>

      <h4>虚线按钮</h4>
      <DemoItem profile={{ type: 'Dashed', title: '虚线按钮' }}>
        <Space size="large">
          <Button type="dashed">Dashed</Button>
          <Button type="dashed" status="warning">
            Dashed Warning
          </Button>
          <Button type="dashed" status="danger">
            Dashed Danger
          </Button>
          <Button type="dashed" status="success">
            Dashed Success
          </Button>
        </Space>
        <br />
        <br />
        <Space size="large">
          <Button type="dashed" disabled>
            Dashed
          </Button>
          <Button type="dashed" status="warning" disabled>
            Dashed Warning
          </Button>
          <Button type="dashed" status="danger" disabled>
            Dashed Danger
          </Button>
          <Button type="dashed" status="success" disabled>
            Dashed Success
          </Button>
        </Space>
      </DemoItem>
      <h4>线框按钮</h4>
      <DemoItem profile={{ type: 'Outline', title: '线框按钮' }}>
        <Space size="large">
          <Button type="outline">Outline</Button>
          <Button type="outline" status="warning">
            Outline Warning
          </Button>
          <Button type="outline" status="danger">
            Outline Danger
          </Button>
          <Button type="outline" status="success">
            Outline Success
          </Button>
        </Space>
        <br />
        <br />
        <Space size="large">
          <Button type="outline" disabled>
            Outline
          </Button>
          <Button type="outline" status="warning" disabled>
            Outline Warning
          </Button>
          <Button type="outline" status="danger" disabled>
            Outline Danger
          </Button>
          <Button type="outline" status="success" disabled>
            Outline Success
          </Button>
        </Space>
      </DemoItem>

      <h4>文本按钮</h4>
      <DemoItem profile={{ type: 'Text', title: '文本按钮' }}>
        <Space size="large">
          <Button type="text">Text</Button>
          <Button type="text" status="warning">
            Text Warning
          </Button>
          <Button type="text" status="danger">
            Text Danger
          </Button>
          <Button type="text" status="success">
            Text Success
          </Button>
        </Space>
        <br />
        <br />
        <Space size="large">
          <Button type="text" disabled>
            Text
          </Button>
          <Button type="text" status="warning" disabled>
            Text Warning
          </Button>
          <Button type="text" status="danger" disabled>
            Dashed Danger
          </Button>
          <Button type="text" status="success" disabled>
            Text Success
          </Button>
        </Space>
      </DemoItem>

      <h4>不同尺寸</h4>
      <DemoItem profile={{ type: 'Size', title: '不同尺寸' }}>
        {['Mini', 'Small', 'Medium', 'Large'].map((type) => {
          return (
            <div style={{ marginBottom: '20px' }} key={type}>
              <label style={labelStyle}>{type}</label>
              <Space size="large">
                <div style={{ width: 100 }}>
                  <Button type="primary" size={type.toLowerCase()}>
                    <IconDelete /> Button
                  </Button>
                </div>
                <div style={{ width: 100 }}>
                  <Button type="primary" size={type.toLowerCase()}>
                    Button
                  </Button>
                </div>

                <div style={{ width: 36 }}>
                  <Button v-slots={{ icon: () => <IconDelete /> }} type="primary" size={type.toLowerCase()}></Button>
                </div>

                <div style={{ width: 36 }}>
                  <Button
                    shape="round"
                    v-slots={{ icon: () => <IconDelete /> }}
                    type="primary"
                    size={type.toLowerCase()}
                  ></Button>
                </div>

                <div style={{ width: 36 }}>
                  <Button
                    shape="circle"
                    v-slots={{ icon: () => <IconDelete /> }}
                    type="primary"
                    size={type.toLowerCase()}
                  ></Button>
                </div>
              </Space>
            </div>
          );
        })}
      </DemoItem>
    </div>
  );
}

export default {
  setup() {
    return Demo;
  },
};
