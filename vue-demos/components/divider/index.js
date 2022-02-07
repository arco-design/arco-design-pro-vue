import DemoItem from '../../demoItem';

function Demo() {
  return (
    <div>
      <h4>基础用法</h4>
      <DemoItem profile={{ type: 'Default', title: '基本样式' }}>
        <div>A design is a plan or specification for the construction of an object.</div>
        <Divider />
        <div>A design is a plan or specification for the construction of an object.</div>
        <Divider />
        <div>A design is a plan or specification for the construction of an object.</div>
        <Divider />
        <div>A design is a plan or specification for the construction of an object.</div>
      </DemoItem>
      <h4>带有文字的分割线</h4>
      <DemoItem profile={{ type: 'Text', title: '带有文字' }}>
        <Divider orientation="left">Text</Divider>
        <div>A design is a plan or specification for the construction of an object.</div>
        <Divider orientation="center">Text</Divider>
        <div>A design is a plan or specification for the construction of an object.</div>
        <Divider orientation="right">Text</Divider>
      </DemoItem>{' '}
      <h4>竖直分割线</h4>
      <DemoItem profile={{ type: 'Vertical', title: '竖直分割线' }}>
        <span>Item 1</span>
        <Divider direction="vertical" />
        <span>Item 2</span>
        <Divider direction="vertical" />
        <span>Item 3</span>
      </DemoItem>
    </div>
  );
}
export default {
  setup() {
    return Demo;
  },
};
