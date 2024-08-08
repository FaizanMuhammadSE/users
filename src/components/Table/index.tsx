import {
  Paper,
  Table as MUITable,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  IconButton,
  Typography,
  TablePagination,
} from '@mui/material';
import { ITableProps } from './types';
import { TableSkeleton } from '../TableSkeleton';
import { isValidElement, MouseEvent } from 'react';
import { PAGE_SIZE, TABLE_HEADER_BG_COLOR } from '../../constants';
import styles from './Table.module.scss';
import { NoDataBox } from '../NoDataBox';

/**
 * Table Component
 *
 * This component renders a table with support for displaying data rows, pagination, and custom actions.
 * It includes options to handle loading states, define column headers, and manage page changes.
 *
 * @component
 * @param {object} props - The props for the Table component.
 * @param {IColumnDef[]} props.columnDefs - The definitions for the table columns. Each column definition includes an ID and a field, which can be a string or ReactNode.
 * @param {IRow[]} props.rows - The data rows to display in the table. Each row includes an ID and an array of cell values.
 * @param {boolean} props.loading - Indicates whether the table is currently loading data.
 * @param {number} props.page - The current page number for pagination.
 * @param {number} props.total - The total number of rows available for pagination.
 * @param {number} [props.startSerial=1] - The starting serial number for the table rows (default is 1).
 * @param {IAction[]} [props.actions] - Optional custom actions to render in the table. Each action includes an ID, an icon, an aria-label, and an onClick handler that receives the row data.
 * @param {function} props.onPageChange - The callback function to handle page changes. Receives the new page number as an argument.
 * @returns {JSX.Element} The rendered Table component.
 *
 * @example
 * <Table
 *   columnDefs={[
 *     { id: 'name', field: 'Name' },
 *     { id: 'age', field: 'Age' },
 *   ]}
 *   rows={[
 *     { id: 1, rowCells: ['John Doe', 30] },
 *     { id: 2, rowCells: ['Jane Smith', 25] },
 *   ]}
 *   loading={false}
 *   page={1}
 *   total={100}
 *   startSerial={1}
 *   actions={[
 *     {
 *       id: 'edit',
 *       icon: <EditIcon />,
 *       ariaLabel: 'Edit',
 *       onClick: (rowData) => console.log(`Edit row with ID ${rowData.id}`)
 *     },
 *   ]}
 *   onPageChange={(page) => console.log(`Page changed to ${page}`)}
 * />
 */

export const Table: React.FC<ITableProps> = ({
  rows,
  page,
  total,
  actions,
  loading,
  columnDefs,
  startSerial,
  onPageChange,
}) => {
  const handlePageChange = (_: MouseEvent | null, newPage: number) => {
    onPageChange(newPage);
  };

  if (loading) return <TableSkeleton rows={8} cols={columnDefs.length} />;
  return (
    <TableContainer component={Paper}>
      {rows.length ? (
        <MUITable>
          <TableHead sx={{ bgcolor: TABLE_HEADER_BG_COLOR }}>
            <TableRow>
              <TableCell>
                <Typography variant='h5'>Sr #</Typography>
              </TableCell>
              {columnDefs.map((columnDef) => (
                <TableCell key={columnDef.id}>
                  <Typography variant='h5'>{columnDef.field}</Typography>
                </TableCell>
              ))}
              {actions && actions.length > 0 && (
                <TableCell className={styles.actionCol}>
                  <Typography variant='h5'>Actions</Typography>
                </TableCell>
              )}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row, index) => (
              <TableRow key={row.id}>
                <TableCell>
                  <Typography>
                    {startSerial ? startSerial + index : index + 1}
                  </Typography>
                </TableCell>
                {row.rowCells.map((rowCell, index) => (
                  <TableCell key={index}>
                    {isValidElement(rowCell) ? (
                      rowCell
                    ) : (
                      <Typography>{rowCell}</Typography>
                    )}
                  </TableCell>
                ))}
                {actions && actions.length && (
                  <TableCell>
                    <div className={styles.actions}>
                      {actions.map((action) => (
                        <IconButton
                          key={action.id}
                          aria-label={action.ariaLabel}
                          onClick={() => action.onClick(row)}
                        >
                          {action.icon}
                        </IconButton>
                      ))}
                    </div>
                  </TableCell>
                )}
              </TableRow>
            ))}
          </TableBody>
        </MUITable>
      ) : (
        <NoDataBox />
      )}
      <TablePagination
        component='div'
        page={page}
        count={total}
        disabled={!rows.length}
        rowsPerPage={PAGE_SIZE}
        rowsPerPageOptions={[PAGE_SIZE]}
        onPageChange={handlePageChange}
      />
    </TableContainer>
  );
};
