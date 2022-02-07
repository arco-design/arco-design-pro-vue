import DemoItem from '../../demoItem';

function Demo() {
  const data = [
    {
      label: 'Name',
      value: 'Socrates',
    },
    {
      label: 'Mobile',
      value: '123-1234-1234',
    },
    {
      label: 'Residence',
      value: 'Beijing',
    },
    {
      label: 'Hometown',
      value: 'Beijing',
    },
    {
      label: 'Address',
      value: 'Yingdu Building, Zhichun Road, Beijing',
    },
  ];

  return (
    <div>
      <h4>基本样式</h4>
      <DemoItem profile={{ type: 'Default', title: '基本样式' }}>
        <Descriptions title="User Info" data={data} />
      </DemoItem>
      <h4>带边框的展示</h4>
      <DemoItem profile={{ type: 'Border', title: '带边框的展示' }}>
        <Descriptions title="User Info" bordered data={data} />
      </DemoItem>
      <h4>不同排列方式</h4>
      <DemoItem  >
        <Descriptions
          title="Inline Horizontal"
          data={data}
          layout="inline-horizontal"
          style={{ marginBottom: '20px' }}
        />
        <Descriptions title="Horizontal" data={data} layout="horizontal" bordered style={{ marginBottom: '20px' }} />
        <Descriptions title="Vertical" data={data} layout="vertical" bordered style={{ marginBottom: '20px' }} />
        <Descriptions title="Inline Vertical" data={data} layout="inline-vertical" bordered />
      </DemoItem>
      <h4>基本样式的不同尺寸</h4>
      <DemoItem profile={{ type: 'Basic Size', title: '基本样式的不同尺寸' }}>
        {['Mini', 'Small', 'Medium', 'Default', 'Large'].map((size) => {
          return (
            <div key={size}>
              <h5>
                <Tag color="arcoblue">{size}</Tag>
              </h5>
              <Descriptions title="User Info" data={data} size={size.toLocaleLowerCase()} />
            </div>
          );
        })}
      </DemoItem>

      <h4>带边框的不同尺寸描述列表</h4>
      <DemoItem profile={{ type: 'Border Size', title: '带边框的不同尺寸描述列表' }}>
        {['Mini', 'Small', 'Medium', 'Default', 'Large'].map((size) => {
          return (
            <div key={size}>
              <h5>
                <Tag color="arcoblue">{size}</Tag>
              </h5>
              <Descriptions title="User Info" data={data} bordered size={size.toLocaleLowerCase()} />
            </div>
          );
        })}
      </DemoItem>
    </div>
  );
}
export default {
  setup() {
    return Demo;
  },
};
