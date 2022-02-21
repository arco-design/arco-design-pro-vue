import 'vue-router';

declare module 'vue-router' {
  interface RouteMeta {
    // options
    roles?: string[];
    // every route must declare
    requiresAuth: boolean; // need login
    icon?: string;
    locale?: string;
    // menu select key
    menuSelectKey?: string;
    hideInMenu?: boolean;
  }
}
