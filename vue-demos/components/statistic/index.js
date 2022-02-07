import DemoItem from '../../demoItem';

const now = Date.now();

export default {
  setup() {
    const startGrowth = window.Vue.ref(false);
    const start = window.Vue.ref(false);

    const _now = Date.now();

    return () => (
      <div>
        <h4>基础用法</h4>
        <DemoItem profile={{ type: 'Default', title: '基本样式' }}>
          <Space wrap align="start" size="large">
            <Statistic title="Title" value={125670} groupSeparator style={{ marginRight: 60 }} />
            <Statistic title="Title" extra="Extra content" value={40509} groupSeparator precision={2} />
          </Space>
        </DemoItem>
        <h4>前缀后缀</h4>
        <DemoItem profile={{ type: 'Suffix', title: '前缀后缀' }}>
          <Space wrap size="large">
            <Statistic
              title="User Growth Rate"
              value={50.32}
              precision={2}
              v-slots={{
                prefix: () => <IconArrowRise />,
              }}
              suffix="%"
            />
            <Statistic
              title="New Users"
              value={192393}
              v-slots={{
                suffix: () => <IconArrowRise />,
              }}
            />
          </Space>
        </DemoItem>
        <h4>数值动效</h4>
        <DemoItem>
          <Statistic
            title="User Growth Rate"
            value={50.32}
            start={startGrowth.value}
            precision={2}
            suffix="%"
            countUp
          />
          <Button
            onClick={() => {
              startGrowth.value = true;
            }}
            style={{ display: 'block', marginTop: '10px' }}
            type="primary"
          >
            Start
          </Button>
        </DemoItem>
        <h4>计时组件</h4>
        <DemoItem>
          <Space wrap align="start" size="large">
            <Countdown
              title="Days"
              value={Date.now() + 1000 * 60 * 60 * 24 * 4}
              format="D 天 H 时 m 分 s 秒"
              now={Date.now()}
            />
            <div>
              <div>
                <Countdown
                  title="Trigger on finish"
                  value={Date.now() + 1000 * 5}
                  format="HH:mm:ss.SSS"
                  start={start.value}
                  now={Date.now()}
                  onFinish={() => {
                    start.value = false;
                  }}
                />
              </div>
              <div>
                <Button
                  onClick={() => {
                    start.value = true;
                  }}
                  style={{ display: 'block', marginTop: '10px' }}
                  type="primary"
                >
                  Start
                </Button>
              </div>
            </div>
          </Space>
        </DemoItem>
      </div>
    );
  },
};
