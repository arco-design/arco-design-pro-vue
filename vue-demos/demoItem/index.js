import './style.css';

export default {
  props: {
    profile: Object,
  },
  setup(props, { slots }) {
    return () => {
      return (
        <div
          style={props.style}
          class={`demo-item ${props.className || ''} ${props.profile ? '' : 'demo-item-borderless'}`.trim()}
          data-profile={JSON.stringify(props.profile || '')}
        >
          {slots.default()}
        </div>
      );
    };
  },
};
