import DemoItem from '../../demoItem';

function Demo() {
  return (
    <div>
      <h4 id="Basic">基础用法</h4>
      <DemoItem profile={{ type: 'Default', title: '基本样式' }}>
        <Anchor affix={false}>
          <AnchorLink href="#Basic" title="Basic" />
          <AnchorLink href="#Static" title="Static" />
          <AnchorLink href="#Lineless-mode" title="Lineless mode mode mode" />
          <AnchorLink href="#Affix" title="Affix" />
          <AnchorLink href="#Scroll-boundary" title="Scroll boundary" />
          <AnchorLink href="#Hash-mode" title="Hash mode" />
        </Anchor>
      </DemoItem>
      <h4>无轴线模式</h4>
      <DemoItem profile={{ type: 'Lineless', title: '无轴线模式' }}>
        <Anchor affix={false} line-less>
          <AnchorLink href="#Basic" title="Basic" />
          <AnchorLink href="#Static" title="Static" />
          <AnchorLink href="#Lineless-mode" title="Lineless mode" />
          <AnchorLink href="#Affix" title="Affix" />
          <AnchorLink href="#Scroll-boundary" title="Scroll boundary" />
          <AnchorLink href="#Hash-mode" title="Hash mode" />
        </Anchor>
      </DemoItem>
      <h4>存在层级关系的锚点</h4>
      <DemoItem profile={{ type: 'Inner', title: '内部层级' }}>
        <Anchor affix={false}>
          <AnchorLink
            href="#Basic"
            title="Basic"
            v-slots={{
              sublist: () => {
                return (
                  <AnchorLink
                    href="#Static"
                    title="Basic-1"
                    v-slots={{
                      sublist: () => {
                        return [
                          <AnchorLink href="#Lineless-mode" title="Basic-1-1" />,
                          <AnchorLink href="#Affix" title="Basic-1-2" />,
                        ];
                      },
                    }}
                  ></AnchorLink>
                );
              },
            }}
          ></AnchorLink>
          <AnchorLink href="#Scroll-boundary" title="Scroll boundary" />
          <AnchorLink href="#Hash-mode" title="Hash mode" />
        </Anchor>
      </DemoItem>
    </div>
  );
}

export default {
  setup() {
    return Demo;
  },
};
