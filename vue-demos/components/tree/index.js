import DemoItem from '../../demoItem';

export default {
  setup() {
    const getTreeData = (showIcon = false) => {
      const extra = showIcon ? { icon: () => window.Vue.h(window.arcoicon.IconStar) } : {};
      return [
        {
          title: 'Trunk 1',
          key: '0-0',
          disabled: true,
          ...extra,
          children: [
            {
              title: 'Trunk 1-0',
              key: '0-0-0',
              ...extra,
              children: [{ title: 'leaf', disabled: true, key: '0-0-0-0' }],
            },
            {
              title: 'Trunk 1-1',
              key: '0-0-1',
              ...extra,
              children: [
                { title: 'leaf', key: '0-0-1-0' },
                {
                  title: 'leaf',
                  key: '0-0-1-1',
                },
              ],
            },
          ],
        },
        {
          title: 'Trunk 2',
          key: '0-2',
          ...extra,
          children: [
            {
              title: 'Trunk 2-0',
              key: '0-2-0',
              ...extra,
            },
            {
              title: 'Trunk 2-1',
              key: '0-2-1',
              ...extra,
            },
          ],
        },
      ];
    };

    window.Vue.onMounted(() => {
      const draggingNode = document.querySelector('.demo-tree-node-dragging');
      const dropNode = document.querySelector('.demo-tree-node-drop > .arco-tree-node-title');
      const gapNode = document.querySelector('.demo-tree-node-drop-gap > .arco-tree-node-title');
      if (draggingNode) {
        draggingNode.parentNode.parentNode.className =
          draggingNode.parentNode.parentNode.className + ' arco-tree-node-title-dragging';
      }
      if (dropNode) {
        dropNode.className = dropNode.className + ' arco-tree-node-title-draggable arco-tree-node-title-highlight';
      }
      if (gapNode) {
        gapNode.className = gapNode.className + ' arco-tree-node-title-draggable arco-tree-node-title-gap-top';
      }
    });


    return function Demo() {

      return (
        <div class="demo-tree">
          <h4>基本样式</h4>
          <DemoItem profile={{ type: 'Default', title: '基本样式' }}>
            <Space align="start" size={40}>
              <Tree data={getTreeData()} multiple defaultSelectedKeys={['0-0']}></Tree>
              <Tree data={getTreeData(true)} multiple defaultSelectedKeys={['0-0']}></Tree>
            </Space>
          </DemoItem>
          <h4>复选框树</h4>
          <DemoItem profile={{ type: 'Checkable', title: '复选框树' }}>
            <Tree data={getTreeData()} checkable></Tree>
          </DemoItem>
          <h4>连接线树</h4>
          <DemoItem profile={{ type: 'ShowLine', title: '连接线树' }}>
            <Tree data={getTreeData()} showLine></Tree>
          </DemoItem>
          <h4>拖拽树</h4>
          <DemoItem profile={{ type: 'Draggable', title: '拖拽树' }}>
            <div style={{ display: 'flex' }}>
              <div style={{ width: '50%' }}>
                <h5>拖拽中</h5>
                <Tree
                  draggable
                  blockNode
                  v-slots={{
                    title: (props) => {
                      return props.key === '2' ? (
                        <span class="demo-tree-node-dragging">Leaf (拖拽中)</span>
                      ) : (
                        props.title
                      );
                    },
                  }}
                  data={[
                    {
                      key: '1',
                      title: 'Trunk',
                      children: [
                        {
                          key: '2',
                          title: 'Leaf 拖拽中',
                        },
                      ],
                    },
                    {
                      key: '3',
                      title: 'Trunk',
                      children: [
                        {
                          key: '4',
                          title: 'Leaf',
                        },
                        {
                          key: '5',
                          title: 'Leaf',
                        },
                      ],
                    },
                  ]}
                ></Tree>
              </div>
              <div style={{ width: '50%' }}>
                <h5>拖拽释放</h5>
                <Tree
                  draggable
                  blockNode
                  // v-slots={{
                  //   title: (props) => {
                  //     return props.class ? <span class={props.class}>{props.title}</span> : props.title;
                  //   },
                  // }}
                  data={[
                    {
                      key: '1',
                      title: 'Trunk',
                      children: [
                        {
                          key: '2',
                          title: 'Leaf(拖拽释放为子节点)',
                          class: "demo-tree-node-drop"
                        },
                      ],
                    },
                    {
                      key: '3',
                      title: 'Trunk',
                      children: [
                        {
                          key: '4',
                          title: 'Leaf(拖拽释放为兄弟节点)',
                          class: 'demo-tree-node-drop-gap',
                        },
                        {
                          key: '5',
                          title: 'Leaf',
                        },
                      ],
                    },
                  ]}
                ></Tree>
              </div>
            </div>
          </DemoItem>
          <h4>动态加载</h4>
          <DemoItem profile={{ type: 'Load', title: '动态加载' }}>
            <Tree
              loadMore={() => Promise.resolve()}
              data={[
                {
                  key: '1',
                  title: 'Trunk',
                  children: [
                    {
                      key: '2',
                      title: 'Branch',
                      switcherIcon: () => window.Vue.h(window.arcoicon.IconLoading),
                    },
                  ],
                },
                {
                  key: '3',
                  title: 'Trunk',
                  children: [
                    {
                      key: '4',
                      title: 'Leaf',
                    },
                    {
                      key: '5',
                      title: 'Leaf',
                    },
                  ],
                },
              ]}
            ></Tree>
          </DemoItem>
          <h4>不同尺寸</h4>
          <DemoItem profile={{ type: 'Size', title: '不同尺寸' }}>
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' }}>
              {['Mini', 'Small', 'Default', 'Large'].map((key) => {
                return (
                  <div style={{ minWidth: 200 }} key={key}>
                    <h5>{key}</h5>
                    <Tree size={key.toLowerCase()} data={getTreeData(true)}></Tree>
                  </div>
                );
              })}
            </div>
          </DemoItem>
        </div>
      );
    };
  },
};
