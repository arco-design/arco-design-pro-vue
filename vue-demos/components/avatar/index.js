import DemoItem from '../../demoItem';

function Demo() {
  return (
    <div>
      <h4>基础用法</h4>
      <DemoItem profile={{ type: 'Default', title: '基本样式' }}>
        <Space wrap size="large">
          <Avatar>Arco</Avatar>
          <Avatar>
            <IconUser />
          </Avatar>
          <Avatar>
            <img
              alt="avatar"
              src="//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/3ee5f13fb09879ecb5185e440cef6eb9.png~tplv-uwbnlip3yd-webp.webp"
            />
          </Avatar>
        </Space>
      </DemoItem>
      <h4>方形头像</h4>
      <DemoItem profile={{ type: 'Shape', title: '方形头像' }}>
        <Space wrap size="large">
          <Avatar shape="square">Arco</Avatar>
          <Avatar shape="square">
            <IconUser />
          </Avatar>
        </Space>
      </DemoItem>
      <h4>头像组</h4>
      <DemoItem profile={{ type: 'AvatarGroup', title: '头像组' }}>
        <Space wrap size="large">
          <AvatarGroup>
            <Avatar>A</Avatar>
            <Avatar>B</Avatar>
            <Avatar>C</Avatar>
            <Avatar>D</Avatar>
            <Avatar>E</Avatar>
          </AvatarGroup>
          <AvatarGroup shape="square">
            <Avatar>A</Avatar>
            <Avatar>B</Avatar>
            <Avatar>C</Avatar>
            <Avatar>D</Avatar>
            <Avatar>E</Avatar>
          </AvatarGroup>
          <AvatarGroup maxCount={3} maxPopoverTriggerProps={{ popupVisible: true }}>
            <Avatar>A</Avatar>
            <Avatar>B</Avatar>
            <Avatar>C</Avatar>
            <Avatar>D</Avatar>
            <Avatar>E</Avatar>
          </AvatarGroup>
        </Space>
      </DemoItem>
      <h4>带有交互按钮的头像</h4>
      <DemoItem profile={{ type: 'TriggerIcon', title: '交互按钮' }}>
        <Space wrap size="large">
          <div>
            <Tag>交互按钮显示在右下角</Tag>
            <br />
            <br />
            <Avatar v-slots={{ 'trigger-icon': () => <IconEdit /> }} style={{ marginRight: 24 }}>
              A
            </Avatar>

            <Avatar v-slots={{ 'trigger-icon': () => <IconEdit /> }}>
              <img
                alt="avatar"
                src="//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/3ee5f13fb09879ecb5185e440cef6eb9.png~tplv-uwbnlip3yd-webp.webp"
              />
            </Avatar>
          </div>
          <div class="demo-avatar">
            <Tag>交互按钮显示在蒙层上</Tag>
            <br />
            <br />
            <Avatar v-slots={{ 'trigger-icon': () => <IconEdit /> }} triggerType="mask" style={{ marginRight: 24 }}>
              A
            </Avatar>
            <Avatar v-slots={{ 'trigger-icon': () => <IconEdit /> }} triggerType="mask">
              <img
                alt="avatar"
                src="//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/3ee5f13fb09879ecb5185e440cef6eb9.png~tplv-uwbnlip3yd-webp.webp"
              />
            </Avatar>
          </div>
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
