import DemoItem from '../../demoItem';

function Demo() {
  return (
    <div class="demos-wrapper">
      <h4>基础用法</h4>
      <p style={{ fontSize: 12 }}>便于配置，为第一个面包屑添加虚线边框</p>
      <br />
      <DemoItem profile={{ type: 'Default', title: '基本样式' }}>
        <Breadcrumb>
          <BreadcrumbItem style={{ border: '1px dashed var(--color-border-2)' }}>Home</BreadcrumbItem>
          <BreadcrumbItem>Channel</BreadcrumbItem>
          <BreadcrumbItem>News</BreadcrumbItem>
        </Breadcrumb>
        <br />
        <br />
        <Breadcrumb>
          <BreadcrumbItem style={{ border: '1px dashed var(--color-border-2)' }}>
            <IconHome />
          </BreadcrumbItem>
          <BreadcrumbItem>Channel</BreadcrumbItem>
          <BreadcrumbItem>News</BreadcrumbItem>
        </Breadcrumb>
        <br />
        <br />
        <Breadcrumb separator=">">
          <BreadcrumbItem style={{ border: '1px dashed var(--color-border-2)' }}>Home</BreadcrumbItem>
          <BreadcrumbItem>Channel</BreadcrumbItem>
          <BreadcrumbItem>News</BreadcrumbItem>
        </Breadcrumb>
      </DemoItem>
      <h4>嵌套可点击的链接文本</h4>
      <p style={{ fontSize: 12 }}>便于配置，为第一个面包屑添加虚线边框</p> <br />
      <DemoItem profile={{ type: 'Link', title: '链接文本' }}>
        <Breadcrumb>
          <BreadcrumbItem style={{ border: '1px dashed var(--color-border-2)' }}>
            <a href="#">Link 1 </a>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <a href="#">Link 2</a>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <a href="#">Link 3 </a>
          </BreadcrumbItem>
        </Breadcrumb>
      </DemoItem>
      <h4>带有下拉菜单的面包屑</h4>
      <DemoItem profile={{ type: 'DropList', title: '带有下拉菜单的面包屑' }}>
        {' '}
        <Breadcrumb>
          <BreadcrumbItem>Home</BreadcrumbItem>
          <BreadcrumbItem
            droplist={
              <Menu>
                <MenuItem key="1">Data</MenuItem>
                <MenuItem key="2">Users</MenuItem>
                <MenuItem key="3">Permission</MenuItem>
              </Menu>
            }
          >
            Channel
          </BreadcrumbItem>
          <BreadcrumbItem>News</BreadcrumbItem>
        </Breadcrumb>
      </DemoItem>
    </div>
  );
}

export default {
  setup() {
    return Demo;
  },
};
