import { ref } from 'vue';
import { AxiosResponse } from 'axios';

import { HttpResponse } from '@/api/interceptor';
import useLoading from './loading';

// use to fetch list
// Don't use async function. It doesn't work in async function.
export default function useRequest(
  api: () => Promise<AxiosResponse<HttpResponse>>,
  isLoading = true
) {
  const { loading, setLoading } = useLoading(isLoading);
  const response = ref([]);
  api()
    .then((res) => {
      response.value = res.data as unknown as [];
    })
    .finally(() => {
      setLoading(false);
    });
  return { loading, response };
}
