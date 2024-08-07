import { FC } from 'react';
import { Box, Typography } from '@mui/material';
import { NoDataBoxProps } from './types';
export const NoDataBox: FC<NoDataBoxProps> = ({
  text = 'No Data Found',
  ...props
}) => {
  return (
    <Box
      height='35vh'
      width='100%'
      display='flex'
      flexDirection='column'
      justifyContent='center'
      alignItems='center'
      border='2px dashed gray'
      borderRadius='10px'
      sx={{ backgroundColor: 'lightgray' }}
      my={2}
      p={2}
      {...props}
    >
      <Typography m={2} variant='h2' color='#707070' textAlign='center'>
        {text}
      </Typography>
    </Box>
  );
};
