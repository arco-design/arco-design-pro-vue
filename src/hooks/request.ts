import { ref } from 'vue';
import { HttpResponse } from '@/utils/request';

import useLoading from './loading';

export default function useRequest(api) {
  const { loading, setLoading } = useLoading(true);
  const response = ref([]);
  api()
    .then((res: HttpResponse) => {
      response.value = res.data;
    })
    .finally(() => {
      setLoading(false);
    });
  return { loading, response };
}
