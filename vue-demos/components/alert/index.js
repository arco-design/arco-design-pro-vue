import DemoItem from '../../demoItem';

function Demo() {
  return (
    <div>
      <h4>基本样式</h4>
      <DemoItem profile={{ type: 'Default', title: '基本样式' }}>
        <Alert>Here is an example text</Alert>
        <br />
        <Alert title="Title text">Here is an example text</Alert>
      </DemoItem>

      <h4>不同类型</h4>
      <DemoItem profile={{ type: 'Type', title: '基本样式' }}>
        <Row justify="space-between">
          <Alert type="warning" style={{ width: '48%' }}>
            Here is an warning text
          </Alert>
          <Alert type="warning" title="Title text" style={{ width: '48%' }}>
            Here is an warning text
          </Alert>
        </Row>
        <br />
        <Row justify="space-between">
          <Alert type="success" style={{ width: '48%' }}>
            Here is an success text
          </Alert>
          <Alert type="success" title="Title text" style={{ width: '48%' }}>
            Here is an success text
          </Alert>
        </Row>
        <br />
        <Row justify="space-between">
          <Alert type="error" style={{ width: '48%' }}>
            Here is an error text
          </Alert>
          <Alert type="error" title="Title text" style={{ width: '48%' }}>
            Here is an error text
          </Alert>
        </Row>
      </DemoItem>

      <h4>可以关闭</h4>
      <DemoItem profile={{ type: 'Closable', title: '可关闭' }}>
        <Alert closable style={{ width: '48%' }}>
          Here is an info text ! Here is an info text !Here is an info text ! Here is an info text ! Here is an info
          text ! Here is an info text !Here is an info text ! Here is an info text !
        </Alert>
      </DemoItem>
      <h4>操作项</h4>
      <DemoItem profile={{ type: 'Action', title: '操作项' }}>
        <Alert
          style={{ width: '48%' }}
          v-slots={{
            action: () => (
              <Button type="primary" size="mini">
                Detail
              </Button>
            ),
          }}
        >
          Here is an info text !
        </Alert>
        <br />
        <Alert
          closable
          style={{ width: '48%' }}
          v-slots={{
            action: () => (
              <Button type="primary" size="mini">
                Detail
              </Button>
            ),
          }}
        >
          Here is an info text ! Here is an info text !Here is an info text ! Here is an info text ! Here is an info
          text ! Here is an info text !Here is an info text ! Here is an info text !
        </Alert>
        <br />

        <Alert
          title="Title text"
          closable
          v-slots={{
            action: () => (
              <Button type="primary" size="mini">
                Detail
              </Button>
            ),
          }}
          style={{ width: '48%' }}
        >
          Here is an info text ! Here is an info text !Here is an info text ! Here is an info text ! Here is an info
          text ! Here is an info text !Here is an info text ! Here is an info text !
        </Alert>
      </DemoItem>
    </div>
  );
}

export default {
  setup() {
    return Demo;
  },
};
