import DemoItem from '../../demoItem';

const getDropList = (count = 3) => {
  return [...new Array(count)].map((_, index) => {
    return (
      <Doption value={index + ''} disabled={index === 0}>
        option {index}
      </Doption>
    );
  });
};

const data = [
  ['Beijing', ['Haidian', 'Chaoyang', 'Daxing']],
  ['Shanghai', ['Pudong', 'Huangpu', 'Xuhui']],
  ['Guangzhou', ['Baiyun', 'Tianhe', 'Fanyu']],
  ['Shenzhen', ['Futian', 'Luohu', 'Nanshan']],
];

export default {
  setup() {
    return () => {
      return (
        <div>
          <h4>基础用法</h4>
          <DemoItem profile={{ type: 'Default', title: '基本样式' }} style={{ paddingBottom: '220px' }}>
            <div class="demo-dropdown-1">
              <Dropdown
                autoFitPosition={false}
                defaultPopupVisible
                v-slots={{
                  content: () => getDropList(4),
                }}
                position="bl"
              >
                <Link type="text">
                  Hover me <IconDown />
                </Link>
              </Dropdown>
            </div>
          </DemoItem>
          <h4>菜单项</h4>
          <DemoItem profile={{ type: 'Option', title: '菜单项' }} style={{ paddingBottom: '220px' }}>
            <Dropdown
              autoFitPosition={false}
              popupVisible
              v-slots={{
                content: () => getDropList(4),
              }}
              position="bl"
            >
              <Link type="text" style={{ marginRight: '100px' }}>
                Hover me <IconDown />
              </Link>
            </Dropdown>
          </DemoItem>
          <h4>分组菜单</h4>
          <DemoItem profile={{ type: 'ItemGroup', title: '分组菜单' }} style={{ paddingBottom: '220px' }}>
            <Dropdown
              popupVisible
              autoFitPosition={false}
              v-slots={{
                content: () => [
                  <Dgroup title="Beijing">
                    <Doption key="1">Haidian</Doption>
                    <Doption key="2">Chaoyang</Doption>
                  </Dgroup>,
                  <Dgroup title="Hebei Province">
                    <Doption key="4">Tangshan</Doption>
                    <Doption key="5">Baoding</Doption>
                  </Dgroup>,
                ],
              }}
              position="bl"
            >
              <Link type="text">
                Hover me <IconDown />
              </Link>
            </Dropdown>
          </DemoItem>
          <h4>多级菜单</h4>
          <DemoItem profile={{ type: 'OptionLevel', title: '多级菜单' }} style={{ paddingBottom: '220px' }}>
            <Dropdown
              popupVisible
              autoFitPosition={false}
              v-slots={{
                content: () =>
                  data.map((city, outerIndex) => {
                    if (city.length > 1) {
                      const districts = city[1];
                      return (
                        <Dsubmenu
                          key={String(outerIndex)}
                          v-slots={{
                            content: () =>
                              districts.map((_, innerIndex) => {
                                return <Doption key={`${outerIndex}_${innerIndex}`}>{districts[innerIndex]}</Doption>;
                              }),
                          }}
                        >
                          <span>{city[0]}</span>
                        </Dsubmenu>
                      );
                    }

                    return <Doption key={String(outerIndex)}>{city[0]}</Doption>;
                  }),
              }}
              position="bl"
            >
              <Link type="text" style={{ marginRight: '100px' }}>
                Hover me <IconDown />
              </Link>
            </Dropdown>
          </DemoItem>
        </div>
      );
    };
  },
};
