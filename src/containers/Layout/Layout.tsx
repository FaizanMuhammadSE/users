import { FC } from 'react';
import { ILayoutProps } from './types';
import { Box, Typography } from '@mui/material';
import styles from './Layout.module.scss';

export const Layout: FC<ILayoutProps> = ({ children }) => {
  return (
    <Box>
      <Box className={styles.header}>
        <Typography className={styles.text} variant='h1'>
          Random Users
        </Typography>
      </Box>
      {children}
    </Box>
  );
};
