import DemoItem from '../../demoItem';

const labelStyle = {
  width: '80px',
  display: 'inline-block',
  verticalAlign: 'top',
};

function Demo() {
  return (
    <div>
      <h4>基础用法</h4>
      <DemoItem profile={{ type: 'Default', title: '基本样式' }}>
        <Progress percent={0.3} style={{ width: '40%' }} />
        <br />
        <br />
        <Progress
          percent={0.3}
          style={{ width: '40%' }}
          v-slots={{
            text: (v) => {
              return (
                <span>
                  {v.percent * 100}% <IconCheckCircleFill />
                </span>
              );
            },
          }}
        />
      </DemoItem>
      <h4>其他状态</h4>
      <DemoItem profile={{ type: 'Status', title: '其他状态' }}>
        <Progress
          percent={0.4}
          status="success"
          v-slots={{
            text: (v) => {
              return (
                <span>
                  {v.percent * 100}% <IconCheckCircleFill />
                </span>
              );
            },
          }}
          style={{ width: '40%' }}
          for
        />
        <br />
        <br />
        <Progress
          percent={0.4}
          status="warning"
          style={{ width: '40%' }}
          for
          v-slots={{
            text: (v) => {
              return (
                <span>
                  {v.percent * 100}% <IconExclamationCircleFill />
                </span>
              );
            },
          }}
        />
        <br />
        <br />
        <Progress percent={0.4} status="danger" style={{ width: '40%' }} for />
      </DemoItem>
      <h4>线性进度条不同尺寸</h4>
      <DemoItem profile={{ type: 'LineSize', title: '线性进度条不同尺寸' }}>
        <div>
          <label style={labelStyle}>Small</label>
          <Progress
            percent={0.4}
            style={{ width: '40%' }}
            for
            size="small"
            v-slots={{
              text: (v) => {
                return (
                  <span>
                    {v.percent * 100}% <IconInfoCircleFill />
                  </span>
                );
              },
            }}
          />
        </div>
        <br />
        <div>
          <label style={labelStyle}>Default</label>
          <Progress
            percent={0.4}
            style={{ width: '40%' }}
            v-slots={{
              text: (v) => {
                return (
                  <span>
                    {v.percent * 100}% <IconInfoCircleFill />
                  </span>
                );
              },
            }}
          />
        </div>
        <br />
        <div>
          <label style={labelStyle}>Large</label>
          <Progress
            percent={0.4}
            style={{ width: '40%' }}
            size="large"
            v-slots={{
              text: (v) => {
                return (
                  <span>
                    {v.percent * 100}% <IconInfoCircleFill />
                  </span>
                );
              },
            }}
          />
        </div>
      </DemoItem>

      <h4>环形进度条</h4>
      <DemoItem profile={{ type: 'Circle', title: '环形进度条' }}>
        <Space size="large">
          环形进度条
          <Progress percent={0.4} status="normal" type="circle" />
        </Space>
      </DemoItem>
      <h4>环形进度条其他状态</h4>
      <DemoItem profile={{ type: 'CircleStatus', title: '环形进度条其他状态' }}>
        <Space size="large">
          <Progress percent={0.4} status="success" type="circle" />
          <Progress percent={0.4} status="warning" type="circle" />
          <Progress percent={0.4} status="danger" type="circle" />
        </Space>
      </DemoItem>
      <h4>环形进度条不同尺寸</h4>
      <DemoItem profile={{ type: 'CircleSize', title: '环形进度条不同尺寸' }}>
        <div>
          <label style={labelStyle}>Small</label>
          <Space size="large">
            <Progress type="circle" percent={0.4} size="small" />
            <Progress
              type="circle"
              percent={0.4}
              v-slots={{
                text: () => {
                  return <IconInfoCircleFill />;
                },
              }}
              size="small"
            />
          </Space>
        </div>
        <br />
        <div>
          <label style={labelStyle}>Default</label>
          <Space size="large">
            <Progress type="circle" percent={0.4} />
            <Progress
              type="circle"
              percent={0.4}
              v-slots={{
                text: () => {
                  return <IconInfoCircleFill />;
                },
              }}
            />
          </Space>
        </div>
        <br />
        <div>
          <label style={labelStyle}>Large</label>
          <Space size="large">
            <Progress type="circle" percent={0.4} size="large" />
            <Progress
              type="circle"
              percent={0.4}
              size="large"
              v-slots={{
                text: () => {
                  return <IconInfoCircleFill />;
                },
              }}
            />
          </Space>
        </div>
      </DemoItem>
      <h4>微型进度条</h4>
      <DemoItem profile={{ type: 'Mini', title: '微型进度条' }}>
        <Space size="large">
          <Progress percent={0.4} size="mini" />
          <Progress percent={0.4} size="mini" status="danger" />
          <Progress percent={0.4} size="mini" status="success" />
        </Space>
        <br />
        <br />
        <Space size="large">
          <Progress percent={0.4} size="mini" type="circle" />
          <Progress percent={0.4} size="mini" status="danger" type="circle" />
          <Progress percent={0.4} size="mini" status="success" type="circle" />
        </Space>
      </DemoItem>
      <h4>步骤进度条</h4>
      <DemoItem profile={{ type: 'Steps', title: '步骤进度条' }}>
        <Progress steps={5} percent={0.3} style={{ width: '40%' }} />
        <br />
        <br />
        <Progress steps={5} status="success" percent={0.5} style={{ width: '40%' }} />
        <br />
        <br />
        <Progress steps={5} status="warning" percent={0.5} style={{ width: '40%' }} />
        <br />
        <br />
        <Progress
          steps={5}
          status="danger"
          percent={0.5}
          style={{ width: '40%' }}
          v-slots={{
            text: (v) => v + '%',
          }}
        />
      </DemoItem>
      <h4>小型步骤进度条</h4>
      <DemoItem profile={{ type: 'Small Steps', title: '小型步骤进度条' }}>
        <Progress steps={5} percent={0.3} size="small" />
        <br />
        <br />
        <Progress steps={5} percent={0.3} size="small" status="success" />
        <br />
        <br />
        <Progress steps={5} percent={0.3} size="small" status="warning" />
        <br />
        <br />
        <Progress steps={5} percent={0.3} size="small" status="danger" />
      </DemoItem>
    </div>
  );
}
export default {
  setup() {
    return Demo;
  },
};
