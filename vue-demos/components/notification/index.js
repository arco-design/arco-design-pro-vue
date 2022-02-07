import DemoItem from '../../demoItem';

export default {
  setup() {
    window.Vue.onMounted(() => {
      // Notification.normal({
      //   title: 'This is a title text',
      //   content: 'This is an normal notification ! This is an normal notification ! This is an normal notification ! ',
      //   position: 'topLeft',
      //   duration: 0,
      // });
      // Notification.normal({
      //   icon: <IconFaceSmileFill />,
      //   title: 'This is a title text',
      //   content: 'This is an normal notification ! This is an normal notification ! This is an normal notification ! ',
      //   position: 'topLeft',
      //   duration: 0,
      // });
      Notification.info({
        title: 'Notification',
        content: 'This is a notification!',
        duration: 0,
        position: 'topLeft',
        btn: (
          <Button size="small" type="primary">
            Ok
          </Button>
        ),
      });

      // Notification.normal({
      //   title: 'This is a title text',
      //   content: 'This is an info notification ! ',
      //   position: 'topLeft',
      //   duration: 0,
      //   closable: true,
      // });

      Notification.info({
        title: 'This is a title text',
        content: 'This is an info notification ! ',
        position: 'topLeft',
        duration: 0,
      });
      Notification.success({
        title: 'This is a title text',
        content: 'This is an success notification ! ',
        position: 'topLeft',
        duration: 0,
      });
      Notification.warning({
        title: 'This is a title text',
        content: 'This is a warning notification ! ',
        position: 'topLeft',
        duration: 0,
      });
      Notification.error({
        title: 'This is a title text',
        content: 'This is an error notification ! ',
        position: 'topLeft',
        duration: 0,
      });

      Notification.info({
        content: 'This is an topLeft notification ! ',
        position: 'topLeft',
        title: 'topLeft',
        duration: 0,
      });
      Notification.info({
        content: 'This is an topRight notification ! ',
        position: 'topRight',
        title: 'topRight',
        duration: 0,
      });
      Notification.info({
        content: 'This is a bottomLeft notification ! ',
        position: 'bottomLeft',
        title: 'bottomLeft',
        duration: 0,
      });
      Notification.info({
        content: 'This is an bottomRight notification ! ',
        position: 'bottomRight',
        title: 'bottomRight',
        duration: 0,
      });
      return () => {};
    }, []);

    return () => (
      <div class="demo-notification">
        <h4>基础样式</h4>
        <DemoItem profile={{ type: 'Default', title: '基础样式' }}>
          <div id="demo-notification-container-1"></div>
        </DemoItem>
        <h4>可关闭的提示</h4>
        <DemoItem profile={{ type: 'Closable', title: '可关闭的提示信息' }}>
          <div id="demo-notification-container-2"></div>
        </DemoItem>
        <h4>不同类型</h4>
        <DemoItem profile={{ type: 'Type', title: '基础样式' }}>
          <div id="demo-notification-container-3"></div>
        </DemoItem>
        <h4>不同位置</h4>
        <DemoItem profile={{ type: 'Position', title: '基础样式' }}>
          <div id="demo-notification-container-4" style={{ padding: 50 }}></div>
        </DemoItem>
        <DemoItem profile={{ type: 'Position', title: '基础样式' }}>
          <div id="demo-notification-container-5" style={{ padding: 50 }}></div>
        </DemoItem>
        <DemoItem profile={{ type: 'Position', title: '基础样式' }}>
          <div id="demo-notification-container-6" style={{ padding: 50 }}></div>
        </DemoItem>
        <DemoItem profile={{ type: 'Position', title: '基础样式' }}>
          <div id="demo-notification-container-7" style={{ padding: 50 }}></div>
        </DemoItem>
      </div>
    );
  },
};
