import DemoItem from '../../demoItem';

function Demo() {
  return (
    <div>
      <h4>复选框</h4>
      <DemoItem profile={{ type: 'Box', title: '复选框' }}>
        <Space size="large">
          <Checkbox>默认</Checkbox>
          <Checkbox defaultChecked>选中</Checkbox>
          <Checkbox disabled>禁用</Checkbox>
          <Checkbox defaultChecked disabled>
            禁用且选中
          </Checkbox>
        </Space>
      </DemoItem>
      <h4>半选复选框</h4>
      <DemoItem profile={{ type: 'Indeterminate', title: '半选' }}>
        <Space size="large">
          <Checkbox indeterminate>半选</Checkbox>
        </Space>
      </DemoItem>
      <h4>复选框组</h4>
      <DemoItem profile={{ type: 'Group', title: '复选框组' }}>
        <CheckboxGroup>
          <Checkbox value="A">A</Checkbox>
          <Checkbox value="B">B</Checkbox>
          <Checkbox value="C">C</Checkbox>
        </CheckboxGroup>
        <br />
        <br />
        <br />
        <CheckboxGroup direction="vertical">
          <Checkbox value="A">A</Checkbox>
          <Checkbox value="B">B</Checkbox>
          <Checkbox value="C">C</Checkbox>
        </CheckboxGroup>
      </DemoItem>
    </div>
  );
}

export default {
  setup() {
    return Demo;
  },
};
