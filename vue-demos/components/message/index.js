import DemoItem from '../../demoItem';

const getContainer = (id) => {
  return () => {
    return document.querySelector('#demo-message-container-' + id) || document.body;
  };
};

export default {
  setup() {
    const Message = window.arco.Message;
    window.Vue.onMounted(() => {
      // Message.config({
      //   getContainer: getContainer(1),
      // });
      Message.info({ content: 'This is an info message!', duration: 0 });
      Message.info({ icon: <IconFaceSmileFill />, content: 'This is an info message!', duration: 0 });
      // Message.config({
      //   getContainer: getContainer(2),
      // });
      Message.info({ content: 'This is an info message!', duration: 0, closable: true });
      // Message.config({
      //   getContainer: getContainer(3),
      // });
      Message.info({ content: 'This is an info message!', duration: 0 });
      Message.success({ content: 'This is an success message!', duration: 0 });
      Message.warning({ content: 'This is a warning message!', duration: 0 });
      Message.error({ content: 'This is an error message!', duration: 0 });
      Message.loading({ content: 'This is an loading message!', duration: 0 });
      // Message.config({
      //   getContainer: () => document.body,
      // });
    });

    window.Vue.onBeforeUnmount(() => {
      Message.clear();
    });

    return function Demo() {
      return (
        <div class="demo-message">
          <h4>基础样式</h4>
          <DemoItem profile={{ type: 'Default', title: '基础样式' }}>
            <div id="demo-message-container-1"></div>
          </DemoItem>
          <h4>可关闭的提示</h4>
          <DemoItem profile={{ type: 'Closable', title: '可关闭的提示信息' }}>
            <div id="demo-message-container-2"></div>
          </DemoItem>
          <h4>不同类型</h4>
          <DemoItem profile={{ type: 'Type', title: '基础样式' }}>
            <div id="demo-message-container-3"></div>
          </DemoItem>
        </div>
      );
    };
  },
};
