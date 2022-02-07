import React from 'react';
import { Tree } from '@arco-design/web-react';

// 从treedata 生成 treenode
const generatorTreeNodes = (treeData) =>
  treeData.map((item) => {
    const { children, key, ...rest } = item;
    return (
      <Tree.Node key={key} {...rest} dataRef={item}>
        {children ? generatorTreeNodes(item.children) : null}
      </Tree.Node>
    );
  });

const defaultTreeData = [
  {
    title: '一级 0-0',
    key: '0-0',
  },
  {
    title: '一级 0-1',
    key: '0-1',
    children: [
      {
        title: '二级 0-1-1',
        key: '0-1-1',
      },
    ],
  },
];

export default function Demo() {
  const [treeData, setTreeData] = React.useState(defaultTreeData);

  const loadMore = (treeNode) =>
    new Promise((resolve) => {
      setTimeout(() => {
        treeNode.props.dataRef.children = [
          {
            title: '动态加载',
            key: `${treeNode.props._key}-1`,
            isLeaf: false,
          },
        ];
        setTreeData([...treeData]);
        // resolve();
      }, 1000);
    });

  return (
    <Tree defaultSelectedKeys={['node1']} loadMore={loadMore}>
      {generatorTreeNodes(treeData)}
    </Tree>
  );
}
