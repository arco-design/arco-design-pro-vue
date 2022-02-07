import DemoItem from '../../demoItem';

const wrapperStyle = {
  background: 'var(--color-fill-2)',
  position: 'relative',
  height: '350px',
};

const DemoModal = {
  props: {
    popupContainer: String,
    title: String,
    alignCenter: Boolean,
    simple: Boolean,
    hideCancel: Boolean,
  },

  setup(props, { slots }) {
    const visible = window.Vue.ref(false);

    window.Vue.onMounted(() => {
      setTimeout(() => {
        visible.value = true;
      }, 20);
    });

    return function () {
      return (
        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
          <Button
            type="primary"
            onClick={() => {
              visible.value = true;
            }}
          >
            open modal
          </Button>
          {visible && visible.value && (
            <Modal
              // mask={false}
              visible
              onCancel={() => {
                visible.value = false;
              }}
              onOk={() => {
                visible.value = false;
              }}
              maskClosable={false}
              align-center
              maskStyle={{ position: 'absolute' }}
              autoFocus={false}
              class={'demo-modal'}
              focusLock={false}
              {...props}
              v-slots={{
                title: () => (slots.title ? slots.title() : props.title),
              }}
            >
              <p>
                You can customize modal body text by the current situation. This modal will be closed immediately once
                you press the OK button.
              </p>
            </Modal>
          )}
        </div>
      );
    };
  },
};

function Demo() {
  return (
    <div>
      <h4>基础用法（默认垂直居中）</h4>
      <DemoItem profile={{ type: 'Default', title: '基本样式' }}>
        <div class="demo-item-1" style={wrapperStyle}>
          <DemoModal
            popupContainer={'.demo-item-1'}
            v-slots={{
              title: () => {
                return (
                  <span>
                    <IconInfoCircleFill style={{ color: 'inherit' }} />
                    Modal Title
                  </span>
                );
              },
            }}
          ></DemoModal>
        </div>
      </DemoItem>
      <h4>自定义位置</h4>
      <DemoItem profile={{ type: 'Top', title: '自定义位置' }}>
        <div style={{ ...wrapperStyle, height: '500px' }} class="demo-item-4">
          <DemoModal
            mask
            class={'demo-modal-absolute'}
            alignCenter={false}
            title="Title"
            popupContainer={'.demo-item-4'}
          ></DemoModal>
        </div>
      </DemoItem>
      <h4>简洁模式</h4>
      <DemoItem profile={{ type: 'Simple', title: '简洁模式' }}>
        <div style={wrapperStyle} class="demo-item-2">
          <DemoModal
            simple
            popupContainer={'.demo-item-2'}
            v-slots={{
              title: () => {
                return (
                  <span>
                    <IconInfoCircleFill style={{ color: 'inherit' }} />
                    Modal Title
                  </span>
                );
              },
            }}
          ></DemoModal>
        </div>
      </DemoItem>
      <h4>消息提示</h4>
      <DemoItem profile={{ type: 'Simple', title: '简洁模式' }}>
        <div style={wrapperStyle} class="demo-item-3">
          <DemoModal
            simple
            hideCancel
            popupContainer={'.demo-item-3'}
            v-slots={{
              title: () => {
                return (
                  <span>
                    <IconCheckCircleFill />
                    This is a success notification
                  </span>
                );
              },
            }}
          ></DemoModal>
        </div>
      </DemoItem>
    </div>
  );
}

export default {
  setup() {
    return Demo;
  },
};
