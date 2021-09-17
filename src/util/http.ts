/*
 * @Description:
 */
import { ref } from "vue";
import axios from "axios";

// 发送异步请求，获得data
// 由于 axios 都有定义，所以rawData 可以轻松知道其类型
const useURLLoader = (url: string) => {
  const result = ref(null);
  const loading = ref(true);
  const loaded = ref(false);
  const error = ref(null);

  axios
    .get(url)
    .then((rawData) => {
      loading.value = false;
      loaded.value = true;
      result.value = rawData.data;
    })
    .catch((e) => {
      error.value = e;
    });

  return {
    result,
    loading,
    error,
    loaded,
  };
};

export default useURLLoader;
