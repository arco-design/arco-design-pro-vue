import DemoItem from '../../demoItem';

function Demo() {
  return (
    <div>
      <h4>基本样式</h4>
      <DemoItem profile={{ type: 'Default', title: '基本样式' }}>
        <Slider defaultValue={20} style={{ maxWidth: '360px' }} />
      </DemoItem>
      <h4>禁用状态</h4>
      <DemoItem profile={{ type: 'Disabled', title: '禁用状态' }}>
        <Slider defaultValue={20} disabled style={{ maxWidth: '360px' }} />
      </DemoItem>
      <h4>刻度线样式</h4>
      <DemoItem profile={{ type: 'Tick', title: '刻度线样式' }}>
        <Slider defaultValue={6} min={0} max={10} showTicks style={{ maxWidth: '360px' }} />
      </DemoItem>
      <h4>范围选择</h4>
      <DemoItem profile={{ type: 'Range', title: '范围选择' }}>
        <Slider defaultValue={[20, 40]} range style={{ maxWidth: '360px' }} />
      </DemoItem>
      <h4>标签文本</h4>
      <DemoItem profile={{ type: 'Mark', title: '标签文本' }}>
        <div style={{ padding: '10px', background: 'var(--color-fill-2)' }}>
          <div style={{ background: 'var(--color-bg-2)' }}>
            <Slider
              defaultValue={5}
              max={15}
              marks={{
                0: '0km',
                5: '5km',
                10: '10km',
                15: '15km',
              }}
              style={{ maxWidth: '360px' }}
            />
          </div>
        </div>
      </DemoItem>
      <h4>显示输入框</h4>
      <DemoItem profile={{ type: 'Input', title: '显示输入框' }}>
        <Slider defaultValue={80} showInput style={{ width: '280px', marginRight: '44px' }} />
        <Slider defaultValue={[10, 80]} range showInput style={{ width: '360px' }} />
      </DemoItem>
      <h4>竖直滑动条</h4>
      <DemoItem profile={{ type: 'Vertical', title: '竖直滑动条' }}>
        <div style={{ padding: '10px', background: 'var(--color-fill-2)' }}>
          <div style={{ background: 'var(--color-bg-2)' }}>
            <Slider direction="vertical" style={{ marginRight: '92px' }} />
            <Slider
              range
              max={20}
              direction="vertical"
              defaultValue={[5, 10]}
              marks={{
                0: '0km',
                5: '5km',
                10: '10km',
              }}
              style={{ verticalAlign: 'top' }}
            />
          </div>
        </div>
      </DemoItem>
    </div>
  );
}

export default {
  setup() {
    return Demo
  }
}
