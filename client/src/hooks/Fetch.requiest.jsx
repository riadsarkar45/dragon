import { useCallback, useState } from 'react';
import useAxiosPublic from './Axios';

const useFetchRequest = () => {
  const axiosPublic = useAxiosPublic();
  const [fetchedData, setFetchedData] = useState(null);

  const get = useCallback(async (url, options = {}) => {
    if (!url) {
      throw new Error('URL is required');
    }
    
    try {
      const response = await axiosPublic.get(url, options);
      setFetchedData(response.data);  // save only the data
      return response.data;
    } catch (error) {
      console.error(`Error fetching ${url}:`, error);
      throw error;
    }
  }, [axiosPublic, setFetchedData]);

  return { get, fetchedData };
};

export default useFetchRequest;
