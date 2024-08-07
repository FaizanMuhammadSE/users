import { ReactNode } from 'react';

export interface IColumnDef {
  id: string | number;
  field: ReactNode | string;
}

export type Cell = ReactNode | string | number;

export interface IRow {
  id: string | number;
  rowCells: Cell[];
}

export interface IAction {
  id: string;
  icon: ReactNode;
  ariaLabel: string;
  onClick: (rowData: IRow) => void;
}

export interface ITableProps {
  columnDefs: IColumnDef[];
  rows: IRow[];
  loading: boolean;
  page: number;
  total: number;
  startSerial?: number;
  actions?: IAction[];
  onPageChange: (page: number) => void;
}
