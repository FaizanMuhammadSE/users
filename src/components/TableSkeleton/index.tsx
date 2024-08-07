import React from 'react';
import {
  Paper,
  Skeleton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';
import { ISkeletonProps } from './types';
import { TABLE_HEADER_BG_COLOR } from '../../constants';

const makeRowCells = (noOfCells: number) =>
  Array.from({ length: noOfCells }, (_, colIndex) => (
    <TableCell key={colIndex}>
      <Skeleton variant='text' height={23} />
    </TableCell>
  ));

/**
 * Table Skeleton to depict loading
 * @param rows is the number of rows in TableSkeleton (default=10)
 * @param cols is the number of cols in each row (default=5)
 */
export const TableSkeleton: React.FC<ISkeletonProps> = ({
  rows = 10,
  cols = 5,
}) => {
  const skeletonRows = Array.from({ length: rows }, (_, index) => (
    <TableRow key={index}>{makeRowCells(cols)}</TableRow>
  ));

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead sx={{ backgroundColor: TABLE_HEADER_BG_COLOR }}>
          <TableRow>{makeRowCells(cols)}</TableRow>
        </TableHead>
        <TableBody>{skeletonRows}</TableBody>
      </Table>
    </TableContainer>
  );
};
