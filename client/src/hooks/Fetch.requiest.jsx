import { useCallback } from "react";
import useAxiosPublic from "./Axios";

const useFetchRequest = () => {
  const axiosPublic = useAxiosPublic();

  return useCallback(
    async (url) => {
      if (!url) {
        console.warn("Url is missing…");
        return;
      }

      try {
        const response = await axiosPublic.get(url);
        return response.data;
      } catch (e) {
        console.error(e);
        throw e;
      }
    },
    [axiosPublic]
  );
};

export default useFetchRequest;
