import { FC, useMemo, useState } from 'react';
import { useQuery } from 'react-query';
import { getUsers } from '../../api';
import { IRow } from '../../components/Table/types';
import { Table } from '../../components';
import { PAGE_SIZE, paths } from '../../constants';
import { Visibility } from '@mui/icons-material';
import { columnDefs, getRowsFromData } from './utils';
import { useNavigate } from 'react-router-dom';

export const HomeContainer: FC = () => {
  const [page, setPage] = useState(0);
  const navigate = useNavigate();
  const { isLoading, data } = useQuery({
    queryKey: ['users', page],
    queryFn: () => getUsers(page + 1), // 1-based-index
  });
  const rows = useMemo(() => getRowsFromData(data), [data]);

  const handleViewClick = (rowData: IRow) => {
    const user = data?.results.find((user) => user.login?.uuid === rowData.id);
    user && navigate(paths.USER_DETAIL, { state: user });
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
