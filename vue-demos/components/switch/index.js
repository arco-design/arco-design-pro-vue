import DemoItem from '../../demoItem';

function Demo() {
  return (
    <div>
      <h4>基本样式</h4>
      <DemoItem profile={{ type: 'Default', title: '基本样式' }}>
        <Space size="large">
          <Switch defaultChecked></Switch>
          <Switch defaultChecked disabled></Switch>
          <Switch></Switch>
          <Switch disabled></Switch>
        </Space>
        <br />
        <br />
        <Space size="large">
          <Switch v-slots={{ checked: () => 'ON', unchecked: () => 'OFF' }} defaultChecked></Switch>
          <Switch v-slots={{ checked: () => 'ON', unchecked: () => 'OFF' }} defaultChecked disabled></Switch>
          <Switch v-slots={{ checked: () => 'ON', unchecked: () => 'OFF' }}></Switch>
          <Switch v-slots={{ checked: () => 'ON', unchecked: () => 'OFF' }} disabled></Switch>
        </Space>
      </DemoItem>
      <h4>Line 类型</h4>
      <DemoItem profile={{ type: 'Line', title: 'Line' }}>
        <Space size="large">
          <Switch type="line" defaultChecked></Switch>
          <Switch type="line" defaultChecked disabled></Switch>
          <Switch type="line"></Switch>
        </Space>
      </DemoItem>
      <h4>Round 类型</h4>
      <DemoItem profile={{ type: 'Round', title: 'Round' }}>
        <Space size="large">
          <Switch type="round" defaultChecked></Switch>
          <Switch type="round" defaultChecked disabled></Switch>
          <Switch type="round"></Switch>
        </Space>
      </DemoItem>

      <h4>Loading</h4>
      <DemoItem profile={{ type: 'Loading', title: 'Loading' }}>
        <div>
          <Space size="large">
            <Switch type="line" loading defaultChecked></Switch>
            <Switch type="circle" loading defaultChecked></Switch>
            <Switch type="round" loading defaultChecked></Switch>
            <Switch
              type="circle"
              loading
              v-slots={{ checked: () => 'ON', unchecked: () => 'OFF' }}
              defaultChecked
            ></Switch>
          </Space>
        </div>
        <br />
        <div>
          <Space size="large">
            <Switch type="circle" loading></Switch>
            <Switch type="line" loading></Switch>
            <Switch type="round" loading></Switch>
            <Switch type="circle" loading v-slots={{ checked: () => 'ON', unchecked: () => 'OFF' }}></Switch>
          </Space>
        </div>
      </DemoItem>

      <h4>带图标的开关</h4>
      <DemoItem profile={{ type: 'Icon', title: 'Icon' }}>
        <Space size="large">
          <Switch
            v-slots={{
              'checked-icon': () => <IconCheck />,
              'unchecked-icon': () => <IconClose />,
            }}
            defaultChecked
          />
          <Switch
            type="round"
            v-slots={{
              'checked-icon': () => <IconCheck />,
              'unchecked-icon': () => <IconClose />,
            }}
            defaultChecked
          />
          <Switch
            type="line"
            v-slots={{
              'checked-icon': () => <IconCheck />,
              'unchecked-icon': () => <IconClose />,
            }}
            defaultChecked
          />
          <Switch
            v-slots={{
              'checked-icon': () => <IconCheck />,
              'unchecked-icon': () => <IconClose />,
            }}
            defaultChecked
            disabled
          />
        </Space>
        <br />
        <br />
        <Space size="large">
          <Switch
            v-slots={{
              'checked-icon': () => <IconCheck />,
              'unchecked-icon': () => <IconClose />,
            }}
          />
          <Switch
            type="round"
            v-slots={{
              'checked-icon': () => <IconCheck />,
              'unchecked-icon': () => <IconClose />,
            }}
          />
          <Switch
            type="line"
            v-slots={{
              'checked-icon': () => <IconCheck />,
              'unchecked-icon': () => <IconClose />,
            }}
          />
          <Switch
            v-slots={{
              'checked-icon': () => <IconCheck />,
              'unchecked-icon': () => <IconClose />,
            }}
            disabled
          />
        </Space>
      </DemoItem>

      <h4>Small 尺寸</h4>
      <DemoItem profile={{ type: 'Small', title: 'Small' }}>
        <Space size="large">
          <Switch size="small" defaultChecked></Switch>
          <Switch size="small" type="round" defaultChecked></Switch>
          <Switch size="small" type="line" defaultChecked></Switch>
        </Space>
      </DemoItem>
    </div>
  );
}

export default {
  setup() {
    return Demo;
  },
};
