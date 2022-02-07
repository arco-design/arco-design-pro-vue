import DemoItem from '../../demoItem';

const InputStyle = {
  width: '30%',
};

const outerStyle = {
    marginRight: '20px',
    marginBottom: '20px',
}

const labelStyle = {
  width: '60px',
  verticalAlign: 'middle',
  display: 'inline-block',
};

export default function InputDemo() {
  return (
    <div>
      <h4>基本用法</h4>
      <DemoItem profile={{ type: 'Default', title: '数字输入框' }}>
        <InputNumber style={[InputStyle, outerStyle]} placeholder="正常状态" />
        <InputNumber style={[InputStyle, outerStyle]} class="demo-inputnumber" defaultValue={2} />
        <br />
        <InputNumber style={[InputStyle, outerStyle]} disabled placeholder="禁用状态" />
      </DemoItem>
      <h4>输入不在范围内的数字时</h4>
      <DemoItem profile={{ type: 'IllNumber', title: '数字不合法' }}>
        <InputNumber style={[InputStyle, outerStyle]} defaultValue={100} min={0} max={10} />
      </DemoItem>
      <h4>按钮模式</h4>
      <DemoItem profile={{ type: 'ButtonMode', title: '数字输入框 按钮模式' }}>
        <InputNumber mode="button" defaultValue={500} style={{ ...InputStyle, marginRight: '20px' }} />
        <InputNumber mode="button" defaultValue={500} style={InputStyle} disabled />
      </DemoItem>
      <h4>不同尺寸</h4>
      <DemoItem profile={{ type: 'Size', title: '数字输入框 不同尺寸' }}>
        <div>
          <label style={labelStyle}>Mini</label> <InputNumber size="mini" mode="button" style={InputStyle} />
        </div>
        <br />
        <div>
          <label style={labelStyle}>Small</label>
          <InputNumber size="small" mode="button" style={InputStyle} />
        </div>
        <br />
        <div>
          <label style={labelStyle}>Medium</label>
          <InputNumber size="medium" mode="button" style={InputStyle} />
        </div>
        <br />
        <div>
          <label style={labelStyle}>Large</label>
          <InputNumber size="large" mode="button" style={InputStyle} />
        </div>
      </DemoItem>
    </div>
  );
}
