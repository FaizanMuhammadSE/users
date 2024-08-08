import { FC } from 'react';
import { Box, Typography } from '@mui/material';
import { NoDataBoxProps } from './types';

/**
 * NoDataBox Component
 *
 * This component displays a message indicating that no data is available.
 * You can customize the message text and pass additional props to style the Box.
 *
 * @component
 * @param {object} props - The props for the NoDataBox component.
 * @param {string} [props.text='No Data Found'] - The message to display when no data is available. Defaults to 'No Data Found'.
 * @param {...object} props - Additional props to customize the styling of the component e.g Height, Width.
 * @returns {JSX.Element} The rendered NoDataBox component.
 *
 * @example
 * <NoDataBox text="No results found"/>
 */

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
