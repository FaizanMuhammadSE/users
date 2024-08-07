import { FC, useMemo } from 'react';
import { useQuery } from 'react-query';
import { getUsers } from '../../api';
import { IRow } from '../../components/Table/types';
import { Table } from '../../components';
import { GENDER_LIST, PAGE_SIZE, paths } from '../../constants';
import { Visibility } from '@mui/icons-material';
import { columnDefs, getRowsFromData } from './utils';
import { useNavigate } from 'react-router-dom';
import { Box, Grid } from '@mui/material';
import { Dropdown } from '../../components/Dropdown';
import { useUrlState } from '../../hooks/useUrlState';

export const HomeContainer: FC = () => {
  const urlPageState = useUrlState({
    name: 'page',
    value: '0',
  });
  const { state: gender, setState: setGender } = useUrlState({
    name: 'gender',
    value: 'all',
  });
  const page = +urlPageState.state;
  const setPage = urlPageState.setState;
  const oneBasedPage = page + 1;

  const navigate = useNavigate();
  const { isLoading, data } = useQuery({
    queryKey: ['users', oneBasedPage, gender],
    queryFn: () => getUsers(oneBasedPage, gender), // 1-based-index
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
    <Box>
      <Grid container mb={2}>
        <Grid item xs={6} sm={3} md={1}>
          <Dropdown
            items={GENDER_LIST}
            initialValue={gender}
            label='Gender'
            onChange={(newVal) => setGender(newVal)}
          />
        </Grid>
      </Grid>
      <Table
        columnDefs={columnDefs}
        rows={rows}
        actions={actions}
        loading={isLoading}
        onPageChange={(newPage) => setPage(newPage.toString())}
        page={page}
        startSerial={page * PAGE_SIZE + 1}
        total={5000}
      />
    </Box>
  );
};
