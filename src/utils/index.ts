import dayjs from 'dayjs';
import { NATIONALITIES } from '../constants';

export const nationalityFullForm = (abbr: string) => {
  return NATIONALITIES[abbr] ?? abbr;
};

export const convertUTCIntoLocalDateTime = (date: string | null) => {
  if (!date) {
    return '';
  }
  return dayjs(date).format('DD-MM-YYYY | hh:mm A');
};
