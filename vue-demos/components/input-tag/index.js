import DemoItem from '../../demoItem';

const InputStyle = {
  width: '30%',
  marginRight: '20px',
  marginBottom: '20px',
};

const labelStyle = {
  width: '60px',
  verticalAlign: 'middle',
  display: 'inline-block',
};

export default function InputDemo() {
  return (
    <div>
      <h4>基本用法</h4>
      <DemoItem profile={{ type: 'Default', title: '标签输入' }}>
        <InputTag style={InputStyle} placeholder="正常状态" allowClear />
        <InputTag class="arco-input-tag-focus" style={InputStyle} placeholder="focus 状态" />
        <br />
        <InputTag style={InputStyle} disabled placeholder="禁用状态" />
      </DemoItem>
      <h4>错误状态</h4>
      <DemoItem profile={{ type: 'Error', title: '错误状态' }}>
        <InputTag style={InputStyle} error defaultValue={['aaa', 'bbb']} />
        <InputTag class="arco-input-tag-focus" error style={InputStyle} defaultValue={['aaa', 'bbb']} />
      </DemoItem>
      <h4>标签样式</h4>
      <DemoItem profile={{ type: 'Tag', title: '标签样式' }}>
        <InputTag style={InputStyle} defaultValue={['aaa', 'bbb']} />
        <InputTag class="arco-input-tag-focus" style={InputStyle} defaultValue={['aaa', 'bbb']} />
        <br />

        <InputTag style={InputStyle} disabled placeholder="禁用状态" defaultValue={['aaa', 'bbb']} />
      </DemoItem>
      <h4>不同尺寸</h4>
      <DemoItem profile={{ type: 'Size', title: '不同尺寸' }}>
        <div>
          <label style={labelStyle}>Mini</label>
          <InputTag defaultValue={['aaa', 'bbb']} size="mini" style={InputStyle} />
        </div>
        <div>
          <label style={labelStyle}>Small</label>
          <InputTag size="small" defaultValue={['aaa', 'bbb']} style={InputStyle} />
        </div>
        <div>
          <label style={labelStyle}>Medium</label>
          <InputTag size="medium" defaultValue={['aaa', 'bbb']} style={InputStyle} />
        </div>
        <div>
          <label style={labelStyle}>Large</label>
          <InputTag size="large" defaultValue={['aaa', 'bbb']} style={InputStyle} />
        </div>
      </DemoItem>
    </div>
  );
}
