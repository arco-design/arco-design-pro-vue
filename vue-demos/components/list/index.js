import DemoItem from '../../demoItem';

const dataSource = [
  'Beijing Bytedance Technology Co., Ltd.',
  'Bytedance Technology Co., Ltd.',
  'Beijing Toutiao Technology Co., Ltd.',
  'Beijing Volcengine Technology Co., Ltd.',
  'China Beijing Bytedance Technology Co., Ltd.',
];

function Demo() {
  return (
    <div>
      <h4>基础用法</h4>
      <DemoItem profile={{ type: 'Default', title: '基本样式' }}>
        <List
          data={dataSource}
          v-slots={{
            header: 'List title',
            item: ({ item, index }) => {
              return <ListItem key={index}>{item}</ListItem>;
            },
          }}
        ></List>
      </DemoItem>
      <h4>鼠标可悬浮</h4>
      <DemoItem profile={{ type: 'Hover', title: '鼠标可悬浮' }}>
        <List
          hoverable
          data={dataSource}
          v-slots={{
            header: 'List title',
            item: ({ item, index }) => {
              return <ListItem key={index}>{item}</ListItem>;
            },
          }}
        ></List>
      </DemoItem>
      <h4>带有分页的列表</h4>
      <DemoItem profile={{ type: 'Pagination', title: '带有分页的列表' }}>
        <List
          data={[...dataSource, ...dataSource]}
          paginationProps={{ current: 1, pageSize: 5, total: 11 }}
          v-slots={{
            header: 'List title',
            item: ({ item, index }) => {
              return <ListItem key={index}>{item}</ListItem>;
            },
          }}
        ></List>
      </DemoItem>
      <h4>带有操作组的列表项 </h4>
      <DemoItem profile={{ type: 'Action', title: '带有操作项' }}>
        <h5>
          <Tag color="arcoblue">操作项在右侧</Tag>
        </h5>
        <List
          v-slots={{
            header: 'List title',
            item: ({ item, index }) => {
              return (
                <ListItem
                  v-slots={{
                    actions: () => {
                      return [
                        <Link key="1"hoverable={false}>
                          <IconEdit />
                        </Link>,
                        <Link key="2" hoverable={false}>
                          <IconDelete />
                        </Link>,
                      ];
                    },
                  }}
                  key={index}
                >
                  {item}
                </ListItem>
              );
            },
          }}
          data={dataSource.slice(3)}
        ></List>
        <h5>
          <Tag color="arcoblue">操作项在底部</Tag>
        </h5>
        <List
          v-slots={{
            header: 'List title',
            item: ({ item, index }) => {
              return (
                <ListItem
                  actionLayout="vertical"
                  v-slots={{
                    actions: () => {
                      return [
                        <Link key="1"hoverable={false}>
                          <IconEdit />
                        </Link>,
                        <Link key="2" hoverable={false}>
                          <IconDelete />
                        </Link>,
                      ];
                    },
                  }}
                  key={index}
                >
                  {item}
                </ListItem>
              );
            },
          }}
          data={dataSource.slice(3)}
        ></List>
      </DemoItem>
      <h4>列表项信息展示 </h4>
      <p>以下是通过 ListItemMeta 组件展示信息，为了便于配置项的展示，使用虚线边框标示 ListItemMeta 部分。 </p>
      <br />
      <DemoItem profile={{ type: 'Meta', title: '带有Meta的列表项' }}>
        <List>
          <ListItem
            actionLayout="vertical"
            v-slots={{
              actions: () => {
                return [
                  <Link key="1" hoverable={false}>
                    <IconEdit />
                  </Link>,
                  <Link key="2" hoverable={false}>
                    <IconDelete />
                  </Link>,
                ];
              },
            }}
          >
            <ListItemMeta
              style={{ border: '1px dashed var(--color-border-2)' }}
              v-slots={{
                avatar: () => (
                  <Avatar shape="square">
                    <img
                      alt="avatar"
                      src="//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/1f61854a849a076318ed527c8fca1bbf.png~tplv-uwbnlip3yd-webp.webp"
                    />
                  </Avatar>
                ),
              }}
              title={'Title'}
              description="China Beijing Bytedance Technology Co., Ltd."
            />
          </ListItem>
        </List>
      </DemoItem>
      <h4>不同尺寸</h4>
      <DemoItem profile={{ type: 'Size', title: '不同尺寸' }}>
        {['Small', 'Medium', 'Large'].map((size) => {
          return (
            <div key={size}>
              <h5>
                <Tag color="arcoblue">{size}</Tag>
              </h5>

              <List
                size={size.toLowerCase()}
                v-slots={{
                  header: 'List title',
                  item: ({ item, index }) => {
                    return <ListItem key={index}>{item}</ListItem>;
                  },
                }}
                data={dataSource.slice(2)}
              ></List>
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
