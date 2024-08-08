import { FC, useMemo, useState } from 'react';
import { useQuery } from 'react-query';
import { getUsers } from '../../api';
import { IRow } from '../../components/Table/types';
import { DeferredTextField, Table } from '../../components';
import {
  GENDER_DROPDOWN_LIST,
  NATIONALITIES_DROPDOWN_LIST,
  PAGE_SIZE,
  paths,
  SERVER_ERR,
} from '../../constants';
import { Visibility } from '@mui/icons-material';
import { columnDefs, getFilteredData, getRowsFromData } from './utils';
import { useNavigate } from 'react-router-dom';
import { Box, Grid } from '@mui/material';
import { Dropdown } from '../../components/Dropdown';
import { useUrlState } from '../../hooks/useUrlState';
import { NoDataBox } from '../../components/NoDataBox';

export const HomeContainer: FC = () => {
  const navigate = useNavigate();
  const [searchText, setSearchText] = useState('');
  const [page, setPage] = useUrlState({ name: 'page', value: 0 });
  const [gender, setGender] = useUrlState({ name: 'gender', value: 'all' });
  const [nationality, setNat] = useUrlState({ name: 'nat', value: 'all' });

  // PageNumber started from one instead of zero
  const oneBasedIndexPage = page + 1;

  // React Query Hook, to cache API calls
  // It will automatically fetch new data on page or gender changed
  const { isLoading, data, isError } = useQuery({
    queryKey: ['users', oneBasedIndexPage, gender, nationality],
    queryFn: () => getUsers(oneBasedIndexPage, gender, nationality),
  });

  // Filtering Data on the basis of searchText
  // Data will be fitlered on changes in data or searchText
  const filteredData = useMemo(() => {
    if (!data?.results.length) return []; // No Data available
    if (!searchText) return data.results; // As SearchText is empty, no need for filtering
    return getFilteredData(data.results, searchText);
  }, [searchText, data]);

  // These rows will be feed to Table for display, making rows from filteredData
  const rows = useMemo(() => getRowsFromData(filteredData), [filteredData]);

  // Navigate to Detail Page for specific user
  const handleViewClick = (rowData: IRow) => {
    const user = data?.results.find((user) => user.login?.uuid === rowData.id);
    user && navigate(paths.USER_DETAIL, { state: user });
  };

  // SearchText changes handler
  const handleSearchChange = (searchTxt: string) => {
    setSearchText(searchTxt);
  };

  // Actions which will be available in Table
  // Right now just View action, can add more if required
  const actions = [
    {
      id: 'view',
      icon: <Visibility titleAccess='View User' style={{ color: '#50526b' }} />,
      ariaLabel: 'view-submission',
      onClick: handleViewClick,
    },
  ];

  if (isError) return <NoDataBox text={SERVER_ERR} />;

  return (
    <Box>
      <Grid container my={2} gap={2}>
        <Grid item xs={6} sm={3} md={2}>
          <Dropdown
            items={NATIONALITIES_DROPDOWN_LIST}
            initialValue={nationality}
            label='Nationality'
            onChange={(newVal) => setNat(newVal)}
          />
        </Grid>
        <Grid item xs={6} sm={3} md={2}>
          <Dropdown
            items={GENDER_DROPDOWN_LIST}
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
        onPageChange={(newPage) => setPage(newPage)}
        page={page}
        startSerial={page * PAGE_SIZE + 1}
        total={5000}
      />
    </Box>
  );
};
