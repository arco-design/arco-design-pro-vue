import DemoItem from '../../demoItem';

function Demo() {
  return (
    <div>
      <h4>基础用法</h4>
      <DemoItem profile={{ type: 'Default', title: '基本样式' }}>
        <div style={{ padding: '100px', paddingBottom: '0px', position: 'relative' }}>
          <Popconfirm
            type="warning"
            defaultPopupVisible
            autoFitPosition={false}
            title="Are you sure you want to delete?"
            content="Are you sure you want to delete?"
          >
            <Button>Delete</Button>
          </Popconfirm>
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
