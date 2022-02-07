import DemoItem from '../../demoItem';

const labelStyle = {
  width: '60px',
  verticalAlign: 'middle',
  display: 'inline-block',
};

function Demo() {
  return (
    <div>
      <h4>基本用法</h4>
      <DemoItem profile={{ type: 'Box', title: '单选框' }}>
        <Space size="large">
          <Radio>默认</Radio>
          <Radio defaultChecked>选中</Radio>
          <Radio disabled>未选中&禁用</Radio>
          <Radio defaultChecked disabled>
            选中&禁用
          </Radio>
        </Space>
      </DemoItem>
      <h4>单选框组</h4>
      <DemoItem profile={{ type: 'Group', title: '单选框组' }}>
        <RadioGroup defaultValue="a">
          <Radio value="Javascript">Javascript</Radio>
          <Radio value="C++">C++</Radio>
          <Radio disabled value="Python">
            Python
          </Radio>
          <Radio value="Java">Java</Radio>
        </RadioGroup>
        <br />
        <br />
        <RadioGroup defaultValue="a" direction="vertical">
          <Radio value="Javascript">Javascript</Radio>
          <Radio value="C++">C++</Radio>
          <Radio disabled value="Python">
            Python
          </Radio>
          <Radio value="Java">Java</Radio>
        </RadioGroup>
      </DemoItem>
      <h4>按钮类型的单选框组</h4>
      <DemoItem profile={{ type: 'Button', title: '按钮类型单选框组' }}>
        <Space size="large">
          <RadioGroup type="button" defaultValue="Javascript">
            <Radio value="Javascript">Javascript</Radio>
            <Radio value="C++">C++</Radio>
            <Radio disabled value="Python">
              Python
            </Radio>
            <Radio value="Java">Java</Radio>
          </RadioGroup>
          <RadioGroup type="button" value="Python">
            <Radio value="Javascript">Javascript</Radio>
            <Radio value="C++">C++</Radio>
            <Radio disabled value="Python">
              Python
            </Radio>
            <Radio value="Java">Java</Radio>
          </RadioGroup>
        </Space>
      </DemoItem>
      <h4>不同尺寸</h4>

      <DemoItem profile={{ type: 'Size', title: '不同尺寸' }}>
        {['Mini', 'Small', 'Medium', 'Large'].map((type) => {
          return (
            <div style={{ marginBottom: '20px' }} key={type}>
              <label style={labelStyle}>{type}</label>
              <RadioGroup type="button" name="lang" defaultValue="Javascript" size={type.toLowerCase()}>
                <Radio value="Javascript">Javascript</Radio>
                <Radio value="C++">C++</Radio>
                <Radio value="Python">Python</Radio>
                <Radio value="Java">Java</Radio>
              </RadioGroup>{' '}
            </div>
          );
        })}
      </DemoItem>
    </div>
  );
}
export default  {
  setup() {
    return Demo
  }
}
