import { useCallback } from 'react';
import useAxiosPublic from './Axios';

const usePostRequest = () => {
    const axiosPublic = useAxiosPublic();

    const makePostRequest = useCallback(async (postUrl, dataToInsert) => {
        if (!postUrl || !dataToInsert) {
            console.warn('Post request requires both URL and data');
            return null;
        }

        try {
            const response = await axiosPublic.post(postUrl, dataToInsert);
            console.log('Post request successful');
            return response.data;
        } catch (error) {
            console.error('Post request failed:', error.response.data.message);
            throw error;
        }
    }, [axiosPublic]);


    const makePutRequest = useCallback(async (postUrl, dataToInsert) => {
        if (!postUrl || !dataToInsert) {
            console.warn('Post request requires both URL and data');
            return null;
        }

        try {
            const response = await axiosPublic.put(postUrl, dataToInsert);
            console.log('Post request successful');
            return response.data;
        } catch (error) {
            console.error('Post request failed:', error.response.data.message);
            throw error;
        }
    }, [axiosPublic]);

    return { makePostRequest, makePutRequest };
};

export default usePostRequest;