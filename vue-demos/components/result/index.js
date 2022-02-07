import DemoItem from '../../demoItem';

function Demo() {
  return (
    <div>
      <h4>基础用法</h4>
      <DemoItem profile={{ type: 'Default', title: '基本样式' }}>
        <div class="demo-result">
          <Result
            status="info"
            title="This is a title text."
            subtitle="Please be patient."
            v-slots={{ extra: () => <Button type="primary">Back</Button> }}
          >
            <div>
              <p>这里是内容区域</p>
              <p>这里是内容区域</p>
              <p>这里是内容区域</p>
            </div>
          </Result>
        </div>
      </DemoItem>
      <h4>不同状态</h4>
      <DemoItem profile={{ type: 'Status', title: '不同状态' }}>
        <Space size="large" wrap>
          <Result
            status="info"
            title="This is a title text."
            v-slots={{ extra: () => <Button type="primary">Back</Button> }}
          ></Result>
          <Result
            status="success"
            title="This is a title text."
            v-slots={{ extra: () => <Button type="primary">Back</Button> }}
          ></Result>
          <Result
            status="error"
            title="This is a title text."
            v-slots={{ extra: () => <Button type="primary">Back</Button> }}
          ></Result>
          <Result
            status="warning"
            title="This is a title text."
            v-slots={{ extra: () => <Button type="primary">Back</Button> }}
          ></Result>
        </Space>
      </DemoItem>
      <h4>状态码错误</h4>
      <DemoItem profile={{ type: 'StatusCode', title: '状态码错误' }}>
        <div class="demo-result">
          <Space size="large" wrap>
            <Result
              status="403"
              title="This is a title text."
              v-slots={{ extra: () => <Button type="primary">Back</Button> }}
            ></Result>
            <Result
              status="404"
              title="This is a title text."
              v-slots={{ extra: () => <Button type="primary">Back</Button> }}
            ></Result>
            <Result
              status="500"
              title="This is a title text."
              v-slots={{ extra: () => <Button type="primary">Back</Button> }}
            ></Result>
          </Space>
        </div>
      </DemoItem>
      <h4>自定义图标</h4>
      <DemoItem profile={{ type: 'Custom', title: '基本样式' }}>
        <Result
          status={null}
          icon={<IconFaceSmileFill />}
          title="This is a title text."
          v-slots={{ extra: () => <Button type="primary">Back</Button> }}
        ></Result>
      </DemoItem>
    </div>
  );
}
export default {
  setup() {
    return Demo;
  },
};
