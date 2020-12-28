import { ref } from "vue";
import axios from "axios";

function useAxios<T>(url: string) {
  const result = ref <T | null>(null);
  const loading = ref(true);
  const error = ref(null);
  axios.get(url).then(rawData => {
    loading.value = false;
    result.value = rawData.data;
  }).catch(e => {
    error.value = e;
    loading.value = false;
  })
  return {
    result,
    loading,
    error
  }
}

export default useAxios;
