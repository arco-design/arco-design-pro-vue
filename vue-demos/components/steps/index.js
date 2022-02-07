import DemoItem from '../../demoItem';


function Demo() {
  const  getDemoSteps = (props) => {
    return (
      <Steps current={2} style={{ maxWidth: '780px' }} {...props}>
        <Step title="Finished" />
        <Step title="Processing" description="description..." />
        <Step title="Waiting" description="description..." />
      </Steps>
    );
  }

  return (
    <div class="demo-steps">
      <h4>默认类型的步骤条</h4>
      <DemoItem profile={{ type: 'Default', title: '基本样式' }}>{getDemoSteps()}</DemoItem>
      <h4>小尺寸默认类型步骤条</h4>
      <DemoItem profile={{ type: 'Small', title: '小型步骤条' }}>{getDemoSteps({ small: true })}</DemoItem>
      <h4>默认步骤条的不同状态</h4>
      <DemoItem profile={{ type: 'Status', title: '默认步骤条的不同状态' }}>
        <Steps current={2} style={{ maxWidth: '780px' }}>
          <Step title="Finished" description="description..." />
          <Step title="Processing" description="description..." />
          <Step title="Waiting" description="description..." />
        </Steps>
        <br />
        <Steps current={2} status="error" style={{ maxWidth: '780px' }}>
          <Step title="Finished" description="description..." />
          <Step title="Error" description="description..." />
          <Step title="Waiting" description="description..." />
        </Steps>
      </DemoItem>

      <h4>标签放置在图标下方</h4>
      <DemoItem profile={{ type: 'LabelVertical', title: '标签放置在图标下方' }}>
        <Steps current={2} style={{ maxWidth: '780px' }} labelPlacement="vertical">
          <Step title="Finished" description="This is the description text, This is the description text..." />
          <Step title="Processing" description="description..." />
          <Step title="Waiting" description="description..." />
        </Steps>
      </DemoItem>
      <h4>隐藏连接线</h4>
      <DemoItem>{getDemoSteps({ lineless: true })}</DemoItem>
      <h4>点状步骤条</h4>
      <DemoItem profile={{ type: 'Dot', title: '点状步骤条' }}>{getDemoSteps({ type: 'dot' })}</DemoItem>
      <h4>点状步骤条的不同状态</h4>
      <DemoItem profile={{ type: 'Dot Status', title: '点状步骤条的不同状态' }}>
        <Steps current={2} type="dot" style={{ maxWidth: '780px' }}>
          <Step title="Finished" description="description..." />
          <Step title="Processing" description="description..." />
          <Step title="Waiting" description="description..." />
        </Steps>
        <br />
        <Steps current={2} type="dot" status="error" style={{ maxWidth: '780px' }}>
          <Step title="Finished" description="description..." />
          <Step title="Error" description="description..." />
          <Step title="Waiting" description="description..." />
        </Steps>
      </DemoItem>
      <h4>箭头步骤条</h4>
      <DemoItem profile={{ type: 'Arrow', title: '箭头步骤条' }}>
        {getDemoSteps({ type: 'arrow' })}
        <br />
        {getDemoSteps({ type: 'arrow', small: true })}
      </DemoItem>
      <h4>箭头步骤条的不同状态</h4>
      <DemoItem profile={{ type: 'Arrow Status', title: '箭头步骤条的不同状态' }}>
        <Steps current={2} type="arrow" style={{ maxWidth: '780px' }}>
          <Step title="Finished" description="description..." />
          <Step title="Processing" description="description..." />
          <Step title="Waiting" description="description..." />
        </Steps>
        <br />
        <Steps current={2} type="arrow" status="error" style={{ maxWidth: '780px' }}>
          <Step title="Finished" description="description..." />
          <Step title="Error" description="description..." />
          <Step title="Waiting" description="description..." />
        </Steps>
      </DemoItem>
      <h4>导航步骤条</h4>
      <p>为了便于查看边距配置，以下示例使用虚线边框标示节点。</p>
      <DemoItem profile={{ type: 'Navigation', title: '导航步骤条' }}>
        <Steps current={2} type="navigation" style={{ maxWidth: '780px' }}>
          <Step title="Finished" description="description..." />
          <Step title="Processing" description="description..." />
          <Step title="Waiting" description="description..." />
        </Steps>
      </DemoItem>
      <h4>竖直方向的步骤条</h4>
      <DemoItem profile={{ type: 'Vertical', title: '竖直方向的步骤条' }}>
        <Space size="large" align="start">
          <div>
            <Tag color="arcoblue">默认类型步骤条</Tag>
            <br />
            <br />
            {getDemoSteps({ direction: 'vertical' })}
          </div>
          <div style={{ marginLeft: 40 }}>
            <Tag color="arcoblue">点状步骤条</Tag>
            <br />
            <br />
            {getDemoSteps({ type: 'dot', direction: 'vertical' })}
          </div>
        </Space>
      </DemoItem>
    </div>
  );
}

export default {
  setup() {
    return Demo;
  }
}
