import { useRouter } from 'vue-router';
import { Message } from '@arco-design/web-vue';

import { useStore } from '@/store';
import { A_USER_LOGOUT } from '@/store/modules/action-type';

interface IUSERHOOK {
  toPageName?: string;
}
export default function useUser(config: IUSERHOOK) {
  const router = useRouter();
  const store = useStore();
  const login = () => {
    // userLogin(params).then(() => {
    //   router.push({
    //     name: 'workplace',
    //   });
    //   localStorage.setItem('userStatus', 'login');
    // });
  };
  const currentRoute = router.currentRoute.value;
  const logout = () => {
    store.dispatch(A_USER_LOGOUT).then(() => {
      Message.success('登出成功');
      router.push({
        name: config?.toPageName || 'login',
        query: {
          ...router.currentRoute.value.query,
          redirect: currentRoute.name,
        },
      });
    });
  };
  return {
    login,
    logout,
  };
}
