<script lang="tsx">
import { Message } from '@arco-design/web-vue';
import {
  IconInfo,
  IconCheck,
  IconClose,
  IconExclamation,
} from '@arco-design/web-vue/es/icon';
import { defineComponent, onMounted } from 'vue';

export default defineComponent({
  setup() {
    onMounted(() => {
      const style = {
        borderRadius: 12,
        display: 'inline-flex',
        fontSize: 12,
        padding: 3,
      };
      const typeProps = {
        normal: [{}, { closable: true }],
        info: [
          {},
          {
            icon: (
              <span
                style={{ ...style, background: 'var(--color-primary-light-1)' }}
              >
                <IconInfo />
              </span>
            ),
          },
          { closable: true },
          {
            icon: (
              <span
                style={{ ...style, background: 'var(--color-primary-light-1)' }}
              >
                <IconInfo />
              </span>
            ),
            closable: true,
          },
        ],
        loading: [{}, { closable: true }],
        success: [
          {},
          {
            icon: (
              <span
                style={{ ...style, background: 'var(--color-success-light-1)' }}
              >
                <IconCheck />
              </span>
            ),
          },
          { closable: true },
          {
            icon: (
              <span
                style={{ ...style, background: 'var(--color-success-light-1)' }}
              >
                <IconCheck />
              </span>
            ),
            closable: true,
          },
        ],
        error: [
          {},
          {
            icon: (
              <span
                style={{ ...style, background: 'var(--color-danger-light-1)' }}
              >
                <IconClose />{' '}
              </span>
            ),
          },
          { closable: true },
          {
            icon: (
              <span
                style={{ ...style, background: 'var(--color-danger-light-1)' }}
              >
                <IconClose />{' '}
              </span>
            ),
            closable: true,
          },
        ],
        warning: [
          {},
          {
            icon: (
              <span
                style={{ ...style, background: 'var(--color-warning-light-1)' }}
              >
                <IconExclamation />
              </span>
            ),
          },
          { closable: true },
          {
            icon: (
              <span
                style={{ ...style, background: 'var(--color-warning-light-1)' }}
              >
                <IconExclamation />
              </span>
            ),
            closable: true,
          },
        ],
      };
      // Object.keys(typeProps).map((type) => {
      //   Message.config({
      //     getContainer: () =>
      //       document.getElementById(type + '_msg') || document.body,
      //     duration: 0,
      //   });
      //   typeProps[type].map((props) => {
      //     Message[type]({
      //       content: 'This is an ' + type + ' message!',
      //       duration: 0,
      //       ...props,
      //     });
      //   });
      // });
    });
    return () => '';
  },
});
</script>

<style scoped lang="less"></style>
