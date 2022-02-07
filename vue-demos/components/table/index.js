import DemoItem from '../../demoItem';

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
  },
  {
    title: 'Salary',
    dataIndex: 'salary',
  },
  {
    title: 'Address',
    dataIndex: 'address',
  },
  {
    title: 'Email',
    dataIndex: 'email',
  },
];

const getData = (count = 5) => {
  return [...new Array(count)].map((_, index) => {
    return {
      key: `${index}`,
      name: `name-${index}`,
      salary: 17000 + index,
      address: index + ' Park Road, London',
      email: 'ed.example' + index + '@example.com',
    };
  });
};

export default {
  setup() {
    const selectionType = window.Vue.ref('radio');

    return function Demo() {
      return (
        <div>
          <h4>基础用法</h4>
          <DemoItem profile={{ type: 'Default', title: '基本样式' }}>
            <Table columns={columns} data={getData()} />
          </DemoItem>

          <h4>条纹表格</h4>
          <DemoItem profile={{ type: 'Stripe', title: '条纹表格' }}>
            <Table columns={columns} data={getData()} stripe />
          </DemoItem>
          <h4>可选择表格</h4>
          <DemoItem profile={{ type: 'Selection', title: '可选择表格' }}>
            <RadioGroup
              model-value={selectionType.value}
              onChange={(v) => {
                selectionType.value = v;
              }}
            >
              <Radio value="radio">单选</Radio>
              <Radio value="checkbox">多选</Radio>
            </RadioGroup>
            <br />
            <br />
            <Table
              bordered={{ wrapper: true, cell: true }}
              columns={columns}
              data={getData(4)}
              stripe
              rowSelection={{
                type: selectionType.value,
                showCheckedAll: selectionType.value === 'checkbox',
              }}
            />
          </DemoItem>
          <h4>排序和筛选</h4>
          <DemoItem profile={{ type: 'Sort', title: '排序和筛选' }}>
            <Table
              data={getData()}
              columns={[
                {
                  title: 'Name',
                  dataIndex: 'name',
                  sortable: {
                    sortDirections: ['ascend', 'descend'],
                  },
                },
                {
                  title: 'Salary',
                  dataIndex: 'salary',
                  sortable: {
                    sortDirections: ['ascend', 'descend'],
                  },
                  filterable: {
                    filters: [
                      {
                        text: '> 20000',
                        value: '20000',
                      },
                      {
                        text: '> 30000',
                        value: '30000',
                      },
                    ],
                    filter: (value, row) => row.salary > value,
                    multiple: true,
                    triggerProps: {
                      popupVisible: true,
                    },
                  },
                  defaultFilters: ['17002'],
                  onFilter: (value, row) => row.salary > value,
                  sortDirections: ['ascend'],
                  defaultSortOrder: 'ascend',
                },
                {
                  title: 'Address',
                  dataIndex: 'address',
                  filterable: {
                    filters: [
                      {
                        text: 'London',
                        value: 'London',
                      },
                      {
                        text: 'Paris',
                        value: 'Paris',
                      },
                    ],
                    filter: (value, row) => row.address.indexOf(value) > -1,
                    multiple: false,
                  },
                },
                {
                  title: 'Email',
                  dataIndex: 'email',
                  sortable: {
                    sortDirections: ['ascend', 'descend'],
                  },
                },
              ]}
            />
          </DemoItem>
          <h4>展开行</h4>
          <DemoItem profile={{ type: 'Expand', title: '不同尺寸' }}>
            <h5>
              <Tag color="arcoblue">展开行</Tag>
            </h5>
            <Table
              columns={columns}
              data={[...getData(3)]}
              expandable={{
                defaultExpandedRowKeys: ['0'],
                expandedRowRender: (record) => {
                  return window.Vue.h('span', `This is No.${record.key} description.`);
                },
              }}
            />
            <h5>
              <Tag color="arcoblue">树形数据</Tag>
            </h5>
            <Table
              columns={columns}
              data={[
                {
                  key: '1',
                  name: 'Jane Doe',
                  salary: 23000,
                  address: '32 Park Road, London',
                  email: 'jane.doe@example.com',
                  children: [
                    {
                      key: '2',
                      name: 'Christina',
                      address: '332 Park Road, London',
                      email: 'christina@example.com',
                    },
                  ],
                },
                {
                  key: '3',
                  name: 'Alisa Ross',
                  salary: 25000,
                  address: '35 Park Road, London',
                  email: 'alisa.ross@example.com',
                  children: [
                    {
                      key: '4',
                      name: 'Ed Hellen',
                      salary: 17000,
                      address: '42 Park Road, London',
                      email: 'ed.hellen@example.com',
                    },
                  ],
                },
              ]}
            ></Table>
          </DemoItem>
          <h4>固定列</h4>
          <DemoItem>
            <Table
              columns={[
                ...columns,
                {
                  title: 'Other',
                  dataIndex: 'other',
                  render: () => 'Other',
                },
                {
                  title: 'Other 1',
                  dataIndex: 'other1',
                  render: () => 'Other 1',
                },
                {
                  title: 'Other 2',
                  dataIndex: 'other2',
                  fixed: 'right',
                  width: 120,

                  render: () => 'Other 2',
                },
              ]}
              data={getData(5)}
              scroll={{ x: 1600, y: 400 }}
            />
          </DemoItem>
          <h4>不同尺寸</h4>
          <DemoItem profile={{ type: 'Size', title: '不同尺寸' }}>
            {['Mini', 'Small', 'Medium', 'Large'].map((size) => {
              return (
                <div key={size}>
                  <Tag color="arcoblue">{size}</Tag>
                  <br />
                  <br />
                  <Table columns={columns} data={getData()} size={size.toLowerCase()} />
                </div>
              );
            })}
          </DemoItem>
        </div>
      );
    };
  },
};
