import { IRow } from '../../components/Table/types';
import { InfoWithMedia } from '../../components/InfoWithMedia';
import { User } from '../../api/controllers/users/types';
import { convertUTCIntoLocalDateTime, nationalityFullForm } from '../../utils';

export const columnDefs = [
  { id: 0, field: 'Name' },
  { id: 1, field: 'Nationality' },
  { id: 4, field: 'City' },
  { id: 2, field: 'Email' },
  { id: 3, field: 'Phone' },
  { id: 5, field: 'Date of Birth' },
];

export const getFilteredData = (
  users: User[] | undefined,
  searchText: string
) => {
  return (
    users?.filter((user) =>
      [
        user.name?.first,
        user.name?.last,
        `${user.name?.first} ${user.name?.last}`,
        nationalityFullForm(user.nat ?? ''),
        user.location?.city,
      ].some(
        (param) =>
          !!param && param.toLowerCase().includes(searchText.toLowerCase())
      )
    ) ?? []
  );
};

export const getRowsFromData = (users: User[] | undefined) =>
  users?.map((user) => {
    const userName = `${user.name?.first} ${user.name?.last}`;
    const nationality = user.nat;
    return {
      id: user.login?.uuid,
      rowCells: [
        <InfoWithMedia
          url={user.picture?.thumbnail ?? ''}
          alt='profile image'
          dimension={50}
          circularMedia
          value={userName}
        />,
        <InfoWithMedia
          mediaComponent={
            <span
              className={`fi fi-${nationality?.toLowerCase()}`}
              style={{ height: '50px', width: '50px', marginRight: '5px' }}
            />
          }
          value={nationalityFullForm(nationality ?? '')}
        />,
        user.location?.city,
        user.email,
        user.phone,
        convertUTCIntoLocalDateTime(user.dob?.date ?? ''),
      ],
    } as IRow;
  }) ?? [];
