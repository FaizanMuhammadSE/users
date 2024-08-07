import { FC, useMemo, useState } from 'react';
import { useQuery } from 'react-query';
import { getUsers } from '../../api';
import { IRow } from '../../components/Table/types';
import { DeferredTextField, Table } from '../../components';
import { GENDER_LIST, PAGE_SIZE, paths } from '../../constants';
import { Visibility } from '@mui/icons-material';
import { columnDefs, getFilteredData, getRowsFromData } from './utils';
import { useNavigate } from 'react-router-dom';
import { Box, Grid } from '@mui/material';
import { Dropdown } from '../../components/Dropdown';
import { useUrlState } from '../../hooks/useUrlState';

export const HomeContainer: FC = () => {
  const navigate = useNavigate();
  const [searchText, setSearchText] = useState('');
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

  const { isLoading, data } = useQuery({
    queryKey: ['users', oneBasedPage, gender],
    queryFn: () => getUsers(oneBasedPage, gender), // 1-based-index
  });

  const filteredData = useMemo(() => {
    if (!searchText) return data?.results;
    if (!data?.results.length) return [];
    return getFilteredData(data.results, searchText);
  }, [searchText, data]);

  const rows = useMemo(() => getRowsFromData(filteredData), [filteredData]);

  const handleViewClick = (rowData: IRow) => {
    const user = data?.results.find((user) => user.login?.uuid === rowData.id);
    user && navigate(paths.USER_DETAIL, { state: user });
  };

  const handleSearchChange = (searchTxt: string) => {
    setSearchText(searchTxt);
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
      <Grid container mb={2} gap={2}>
        <Grid item xs={6} sm={3} md={2}>
          <Dropdown
            items={GENDER_LIST}
            initialValue={gender}
            label='Gender'
            onChange={(newVal) => setGender(newVal)}
          />
        </Grid>
        <Grid item xs={6} sm={3} md={2}>
          <DeferredTextField
            label='Search'
            placeholder='Search by name, city & country'
            maxLength={100}
            onChange={handleSearchChange}
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
