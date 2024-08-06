import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';
import { CustomError, QueryParams } from './types';
import { API_BASE_URL } from '../constants';

const axiosInstance = axios.create({
  baseURL: API_BASE_URL,
});

export const get = async <T>(
  path: string,
  params?: QueryParams,
  config?: AxiosRequestConfig
): Promise<AxiosResponse<T>> => {
  try {
    const response = await axiosInstance.get<T>(path, {
      params,
      ...config,
    });
    return response;
  } catch (error) {
    throw new Error(
      ((error as AxiosError).response?.data as CustomError)?.error ||
        'Something went wrong.'
    );
  }
};
