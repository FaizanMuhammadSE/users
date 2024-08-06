import { PAGE_SIZE, USERS_URI } from '../../../constants';
import { get } from '../../api';
import { AllUsersResponseType } from './types';

export const getUsers = async (page: number): Promise<AllUsersResponseType> => {
  try {
    const { data: users } = await get<AllUsersResponseType>(USERS_URI, {
      page,
      size: PAGE_SIZE,
    });

    return users;
  } catch (error) {
    throw new Error((error as Error).message);
  }
};
