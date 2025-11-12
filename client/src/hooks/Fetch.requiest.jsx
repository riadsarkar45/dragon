import { useCallback } from 'react';
import useAxiosPublic from './Axios';

const useFetchRequest = () => {
  const axiosPublic = useAxiosPublic();

  const get = useCallback(async (url, options = {}) => {
    if (!url) {
      throw new Error('URL is required');
    }
    
    try {
      const response = await axiosPublic.get(url, options);
      return response.data;
    } catch (error) {
      console.error(`Error fetching ${url}:`, error);
      throw error;
    }
  }, [axiosPublic]);

  return { get };
};

export default useFetchRequest;