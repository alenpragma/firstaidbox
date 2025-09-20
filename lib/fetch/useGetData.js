import { useQuery } from "@tanstack/react-query";
import axiosInstance from "./AxiosInstance";

const fetchData = async (dataUrl) => {
  const response = await axiosInstance.get(dataUrl);
  return response.data;
};

export const useGetData = (queryKey, dataUrl, options = {}) => {
  return useQuery({
    queryKey: Array.isArray(queryKey) ? queryKey : [queryKey],
    queryFn: () => fetchData(dataUrl),
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
    retry: false,
    ...options,
  });
};
