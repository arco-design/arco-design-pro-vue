import { ref } from 'vue';
import { AxiosResponse } from 'axios';
import { HttpResponse } from '@/api/interceptor';
import useLoading from './loading';

// use to fetch list
// Don't use async function. It doesn't work in async function.
export default function useRequest<T>(
  api: () => Promise<AxiosResponse<HttpResponse>>,
  isLoading = true
) {
  const { loading, setLoading } = useLoading(isLoading);
  const response = ref<T>();
  api()
    .then((res) => {
      response.value = res.data as unknown as T;
    })
    .finally(() => {
      setLoading(false);
    });
  return { loading, response };
}
