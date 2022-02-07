import DemoItem from '../../demoItem';

function Demo() {
  return (
    <div>
      <h4>基础用法</h4>
      <DemoItem profile={{ type: 'Default', title: '基本样式' }}>
        <div style={{ padding: '100px', paddingBottom: 0, position: 'relative' }}>
          <Popover
            title="Title"
            popupVisible
            // getPopupContainer={(node) => node.parentElement || document.body}
            autoFitPosition={false}
            content="Here is the text content."
          >
            <Button type="primary">Button</Button>
          </Popover>
        </div>
      </DemoItem>
    </div>
  );
}

export default {
  setup() {
    return Demo;
  },
};
