import { IRow } from '../../components/Table/types';
import { InfoWithMedia } from '../../components/InfoWithMedia';
import { AllUsersResponseType } from '../../api/controllers/users/types';
import { convertUTCIntoLocalDateTime, nationalityFullForm } from '../../utils';

export const columnDefs = [
  { id: 0, field: 'Name' },
  { id: 1, field: 'Nationality' },
  { id: 4, field: 'City' },
  { id: 2, field: 'Email' },
  { id: 3, field: 'Phone' },
  { id: 5, field: 'Date of Birth' },
];

export const getRowsFromData = (data: AllUsersResponseType | undefined) =>
  data?.results.map(
    (user) =>
      ({
        id: user.login?.uuid,
        rowCells: [
          <InfoWithMedia
            url={user.picture?.thumbnail ?? ''}
            alt='profile image'
            dimension={50}
            circularMedia
            value={`${user.name?.first} ${user.name?.last}`}
          />,
          nationalityFullForm(user.nat ?? ''),
          user.location?.city,
          user.email,
          user.phone,
          convertUTCIntoLocalDateTime(user.dob?.date ?? ''),
        ],
      } as IRow)
  ) ?? [];
