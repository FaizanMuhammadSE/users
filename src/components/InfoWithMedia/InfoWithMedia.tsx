import { Box, Typography } from '@mui/material';
import { FC, isValidElement } from 'react';
import { IInfoWithMedia } from './types';
import styles from './InfoWithMedia.module.scss';

export const InfoWithMedia: FC<IInfoWithMedia> = ({
  url,
  dimension,
  alt,
  circularMedia,
  value,
  ...boxProps
}) => {
  return (
    <Box className={styles.container} {...boxProps}>
      <img
        src={url}
        alt={alt}
        style={{
          height: dimension ?? 'auto',
          width: dimension ?? 'auto',
          borderRadius: circularMedia ? '50%' : '0',
        }}
      />
      {isValidElement(value) ? value : <Typography>{value}</Typography>}
    </Box>
  );
};
