import { App } from 'vue';

export const installDirective = (app: App) => {
  app.directive('my-directive', {
    // Directive has a set of lifecycle hooks:
    // called before bound element's attributes or event listeners are applied
    created() {},
    // called before bound element's parent component is mounted
    beforeMount() {},
    // called when bound element's parent component is mounted
    mounted() {},
    // called before the containing component's VNode is updated
    beforeUpdate() {},
    // called after the containing component's VNode and the VNodes of its
    // children have updated
    updated() {},
    // called before the bound element's parent component is unmounted
    beforeUnmount() {},
    // called when the bound element's parent component is unmounted
    unmounted() {},
  });
};
