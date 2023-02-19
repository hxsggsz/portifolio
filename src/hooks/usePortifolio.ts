import useSWR from "swr";
import axios from "axios";
import { ApiTypes } from "../pages/api/types";

export const usePortifolio = (url: string) => {
  const { data, error, isLoading } = useSWR<ApiTypes>(url, async (url) => {
    const response = await axios.get(url);
    const data = await response.data;

    return data;
  });

  return { data, error, isLoading };
};
