import { PAGE_SIZE, USERS_URI, USER_API_SEED } from '../../../constants';
import { get } from '../../api';
import { AllUsersResponseType } from './types';

export const getUsers = async (page: number): Promise<AllUsersResponseType> => {
  try {
    const { data: users } = await get<AllUsersResponseType>(USERS_URI, {
      page, // Random-User-API-Supports (1-based-index)
      results: PAGE_SIZE,
      seed: USER_API_SEED,
    });

    return users;
  } catch (error) {
    throw new Error((error as Error).message);
  }
};
