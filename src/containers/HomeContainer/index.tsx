import { FC, useMemo, useState } from 'react';
import { useQuery } from 'react-query';
import { getUsers } from '../../api';
import { IRow } from '../../components/Table/types';
import { Table } from '../../components';
import { PAGE_SIZE } from '../../constants';
import { Visibility } from '@mui/icons-material';
import { columnDefs, getRowsFromData } from './utils';

export const HomeContainer: FC = () => {
  const [page, setPage] = useState(0);
  const { isLoading, data } = useQuery({
    queryKey: ['users', page],
    queryFn: () => getUsers(page + 1), // 1-based-index
  });
  const rows = useMemo(() => getRowsFromData(data), [data]);

  const handleViewClick = (rowData: IRow) => {
    const user = data?.results.find((user) => user.login?.uuid === rowData.id);
    console.log(`${user?.name?.first} ${user?.name?.last}`);
    // TODO: Navigate to user detail page
  };

  const actions = [
    {
      id: 'view',
      icon: <Visibility titleAccess='View User' style={{ color: '#50526b' }} />,
      ariaLabel: 'view-submission',
      onClick: handleViewClick,
    },
  ];

  return (
    <Table
      columnDefs={columnDefs}
      rows={rows}
      actions={actions}
      loading={isLoading}
      onPageChange={(newPage) => setPage(newPage)}
      page={page}
      startSerial={page * PAGE_SIZE + 1}
      total={5000}
    />
  );
};
