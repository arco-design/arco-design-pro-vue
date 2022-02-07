import DemoItem from '../../demoItem';

function Demo() {
  return (
    <div>
      <h4>基础用法</h4>
      <DemoItem profile={{ type: 'Default', title: '基本样式' }}>
        <Collapse defaultActiveKey={['1', '2']} style={{ maxWidth: '90%' }}>
          <CollapseItem header="Beijing Toutiao Technology Co., Ltd." key="1">
            Beijing Toutiao Technology Co., Ltd.
          </CollapseItem>
          <CollapseItem header="Introduce" key="2" disabled>
            ByteDance's core product, Toutiao ('Headlines'), is a content platform in China and around the world.
          </CollapseItem>
          <CollapseItem header="The Underlying AI Technology" key="3">
            In 2016, ByteDance's AI Lab and Peking University co-developed Xiaomingbot (张小明), an artificial
            intelligence bot that writes news articles.
          </CollapseItem>
        </Collapse>
      </DemoItem>

      <h4>嵌套面板</h4>
      <DemoItem profile={{ type: '', title: '嵌套面板' }}>
        <Collapse defaultActiveKey={['1', '2']} style={{ maxWidth: '90%' }}>
          <CollapseItem header="Beijing Toutiao Technology Co., Ltd." key="1">
            <Collapse defaultActiveKey={['1.1']}>
              <CollapseItem header="Beijing Toutiao Technology Co., Ltd." key="1.1">
                Beijing Toutiao Technology Co., Ltd.
              </CollapseItem>
              <CollapseItem header="Beijing Toutiao Technology Co., Ltd." key="1.2">
                Beijing Toutiao Technology Co., Ltd.
              </CollapseItem>
            </Collapse>
          </CollapseItem>
          <CollapseItem header="Beijing Toutiao Technology Co., Ltd." key="2">
            Beijing Toutiao Technology Co., Ltd.
          </CollapseItem>
          <CollapseItem header="Beijing Toutiao Technology Co., Ltd." key="3">
            Beijing Toutiao Technology Co., Ltd.
          </CollapseItem>
        </Collapse>
      </DemoItem>

      <h4>简洁面板</h4>
      <DemoItem profile={{ type: '', title: '简洁面板' }}>
        <Collapse defaultActiveKey={['1', '2']} style={{ maxWidth: '90%' }} bordered={false}>
          <CollapseItem header="Beijing Toutiao Technology Co., Ltd." key="1">
            Beijing Toutiao Technology Co., Ltd.
          </CollapseItem>
          <CollapseItem header="Introduce" key="2">
            ByteDance's core product, Toutiao ('Headlines'), is a content platform in China and around the world.
          </CollapseItem>
          <CollapseItem header="The Underlying AI Technology" key="3">
            In 2016, ByteDance's AI Lab and Peking University co-developed Xiaomingbot (张小明), an artificial
            intelligence bot that writes news articles.
          </CollapseItem>
        </Collapse>
      </DemoItem>
      <h4>展开图标位置</h4>
      <DemoItem profile={{ type: '', title: '展开图标位置' }}>
        <h5>图标在右侧</h5>
        <Collapse defaultActiveKey={['1', '2']} style={{ maxWidth: '90%' }} expandIconPosition="right">
          <CollapseItem header="Beijing Toutiao Technology Co., Ltd." key="1">
            Beijing Toutiao Technology Co., Ltd.
          </CollapseItem>
          <CollapseItem header="Introduce" key="2">
            ByteDance's core product, Toutiao ('Headlines'), is a content platform in China and around the world.
          </CollapseItem>
          <CollapseItem header="The Underlying AI Technology" key="3">
            In 2016, ByteDance's AI Lab and Peking University co-developed Xiaomingbot (张小明), an artificial
            intelligence bot that writes news articles.
          </CollapseItem>
        </Collapse>
        <h5>隐藏图标</h5>
        <Collapse defaultActiveKey={['1', '2']} style={{ maxWidth: '90%' }} expandIcon={null}>
          <CollapseItem header="Beijing Toutiao Technology Co., Ltd." key="1">
            Beijing Toutiao Technology Co., Ltd.
          </CollapseItem>
          <CollapseItem header="Introduce" key="2">
            ByteDance's core product, Toutiao ('Headlines'), is a content platform in China and around the world.
          </CollapseItem>
          <CollapseItem header="The Underlying AI Technology" key="3">
            In 2016, ByteDance's AI Lab and Peking University co-developed Xiaomingbot (张小明), an artificial
            intelligence bot that writes news articles.
          </CollapseItem>
        </Collapse>
      </DemoItem>
    </div>
  );
}
export default {
  setup() {
    return Demo;
  },
};
