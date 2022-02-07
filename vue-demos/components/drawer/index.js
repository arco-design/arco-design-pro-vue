import DemoItem from '../../demoItem';

const wrapperStyle = {
  width: '80%',
  background: 'var(--color-fill-2)',
  border: '1px solid var(--color-border-2)',
  boxShadow: '0 -4px 10px rgb(0 0 0 / 10%)',
  height: '500px',
  position: 'relative',
};

export default {
  setup() {
    const visible = window.Vue.ref(false);

    window.Vue.onMounted(() => {
      visible.value = true;
    });

    return () => {

      return (
        <div>
          <h4>基础用法</h4>
          <DemoItem profile={{ type: 'Default', title: '基本样式' }}>
            <div class="demo-item-1" style={wrapperStyle}>
              {visible && visible.value && (
                <Drawer title="Drawer title" visible popupContainer={document.querySelector('.demo-item-1')}>
                  <p>Here is an example text. Here is an example text.</p>
                </Drawer>
              )}
            </div>
          </DemoItem>
        </div>
      );
    };
  },
};
