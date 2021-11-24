import { useRouter } from 'vue-router';
import { Message } from '@arco-design/web-vue';

import { useStore } from '@/store';
import { A_USER_LOGOUT } from '@/store/modules/action-type';

export default function useUser() {
  const router = useRouter();
  const store = useStore();
  const logout = async (logoutTo?: string) => {
    await store.dispatch(A_USER_LOGOUT);
    const currentRoute = router.currentRoute.value;
    Message.success('登出成功');
    router.push({
      name: logoutTo && typeof logoutTo === 'string' ? logoutTo : 'login',
      query: {
        ...router.currentRoute.value.query,
        redirect: currentRoute.name as string,
      },
    });
  };
  return {
    logout,
  };
}
