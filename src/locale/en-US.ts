import localeSettings from './en-US/settings';
import localeMessageBox from '@/components/message-box/locale/en-US';
import localeWorkplace from '@/views/dashboard/workplace/locale/en-US';
// import localeSearchTable from '../pages/search-table/locale/en-US';
// import localeSuccess from '../pages/success/locale/en-US';
// import locale403 from '../pages/403/locale/en-US';
// import locale404 from '../pages/404/locale/en-US';
// import locale500 from '../pages/500/locale/en-US';
// import localeStepForm from '../pages/step-form/locale/en-US';
// import localeDataAnalysis from '../pages/data-analysis/locale/en-US';
// import localeMultiDAnalysis from '../pages/multi-dimension-data-analysis/locale/en-US';
// import localeCardList from '../pages/card-list/locale/en-US';
// import localeError from '../pages/error/locale/en-US';
// import localeGroupForm from '../pages/group-form/locale/en-US';
// import localeUserInfo from '../pages/user-info/locale/en-US';
// import localeUserSetting from '../pages/user-setting/locale/en-US';
import localeMonitor from '@/views/dashboard/monitor/locale/en-US';
// import localeBasicProfile from '../pages/basic-profile/locale/en-US';

export default {
  'menu.dashboard': 'Dashboard',
  'menu.list': 'List',
  'menu.result': 'Result',
  'menu.exception': 'Exception',
  'menu.form': 'Form',
  'menu.profile': 'Profile',
  'menu.visualization': 'Data Visualization',
  'menu.user': 'User Center',
  'navbar.docs': 'Docs',
  ...localeSettings,
  ...localeMessageBox,
  ...localeWorkplace,
  // ...localeSearchTable,
  // ...localeSuccess,
  // ...locale403,
  // ...locale404,
  // ...locale500,
  // ...localeStepForm,
  // ...localeDataAnalysis,
  // ...localeMultiDAnalysis,
  // ...localeCardList,
  // ...localeError,
  // ...localeGroupForm,
  // ...localeUserInfo,
  // ...localeUserSetting,
  ...localeMonitor,
  // ...localeBasicProfile,
};
