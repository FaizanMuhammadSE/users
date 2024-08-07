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
