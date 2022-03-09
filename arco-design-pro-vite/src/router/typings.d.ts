import 'vue-router';

declare module 'vue-router' {
  interface RouteMeta {
    roles?: string[]; // Controls roles that have access to the page
    requiresAuth: boolean; // Whether login is required to access the current page (every route must declare)
    icon?: string; // The icon show in the side menu
    locale?: string; // The locale name show in side menu and breadcrumb
    activeMenu?: string; // if set key, the side menu will highlight you settings when a path is matched
    hideInMenu?: boolean; // If true, it is not displayed in the side menu
    affix?: true; // if set true, the tag will affix in the tab-bar
    tagIcon?: string; // if set key, the icon will show in the tab-bar
  }
}
