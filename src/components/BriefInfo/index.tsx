import { FC } from 'react';
import { IBriefInfoProps } from './types';
import { Box, Typography } from '@mui/material';
import styles from './BriefInfo.module.scss';

/**
 * BriefInfo Component
 *
 * - This component displays brief information consisting of two text elements with a typing animation.
 * - It accepts additional props that are passed to the Box component from Material-UI.
 *
 * @component
 * @param {object} props - The props for the BriefInfo component.
 * @param {string} props.text1 - The first text element to display in gray color.
 * @param {string} props.text2 - The second text element to display in 2nd line.
 * @param {...object} props.boxProps - Additional props passed to the Box component.
 * @returns {JSX.Element} The rendered BriefInfo component displaying 2 lines.
 *
 * @example
 * <BriefInfo text1="Hello" text2="World" />
 */

export const BriefInfo: FC<IBriefInfoProps> = ({
  text1,
  text2,
  ...boxProps
}) => {
  return (
    <Box className={styles.container} {...boxProps}>
      <Typography variant='h5' color='gray' className={styles.typingText}>
        {text1}
      </Typography>
      <Typography variant='h2' className={styles.typingText}>
        {text2}
      </Typography>
    </Box>
  );
};
