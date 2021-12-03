import 'vue-router';

declare module 'vue-router' {
  interface RouteMeta {
    // options
    isAdmin?: boolean;
    // every route must declare
    requiresAuth: boolean;
    icon?: string;
    locale?: string;
    // menu select key
    menuSelectKey?: string;
  }
}
