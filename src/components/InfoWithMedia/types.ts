import { BoxProps } from '@mui/material';
import { ReactNode } from 'react';

export interface IInfoWithMedia extends Omit<BoxProps, 'value' | 'title'> {
  url?: string;
  alt?: string;
  dimension?: number;
  mediaComponent?: ReactNode;
  value?: ReactNode;
  circularMedia?: boolean;
}
