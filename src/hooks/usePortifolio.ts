import useSWR from "swr";
import { api } from "../pages/api/axios";
import { ApiTypes } from "../pages/api/types";
import axios from "axios";

export const useFetcher = (url: string) => {
  const { data, error, isLoading } = useSWR<ApiTypes>(url, async (url) => {
    const response = await api.get(url);
    const data = await response.data;

    return data;
  });

  return { data, error, isLoading };
};

export const usePortifolio = (url: string) => {
  const { data, error, isLoading } = useSWR<ApiTypes>(url, async (url) => {
    const response = await axios.get(url);
    const data = await response.data;

    return data;
  });

  return { data, error, isLoading };
};
