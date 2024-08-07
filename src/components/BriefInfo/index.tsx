import { FC } from 'react';
import { IBriefInfoProps } from './types';
import { Box, Typography } from '@mui/material';
import styles from './BriefInfo.module.scss';
export const BriefInfo: FC<IBriefInfoProps> = ({
  text1,
  text2,
  ...boxProps
}) => {
  return (
    <Box className={styles.container} {...boxProps}>
      <Typography variant='h5' color='#999' className={styles.typingText}>
        {text1}
      </Typography>
      <Typography variant='h2' className={styles.typingText}>
        {text2}
      </Typography>
    </Box>
  );
};
