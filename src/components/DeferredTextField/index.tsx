import { useState, ChangeEvent, FC, useDeferredValue, useEffect } from 'react';
import { TextField } from '@mui/material';
import { IDeferredTextFieldProps } from './types';

export const DeferredTextField: FC<IDeferredTextFieldProps> = ({
  label,
  placeholder,
  maxLength,
  onChange,
}) => {
  const [text, setText] = useState<string>('');
  const deferredText = useDeferredValue(text);

  // Handle input change
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    if (maxLength && value.length > maxLength) return;
    setText(event.target.value);
  };

  useEffect(() => {
    onChange(deferredText);
  }, [deferredText]);

  return (
    <TextField
      variant='outlined'
      label={label}
      value={text}
      placeholder={placeholder}
      onChange={handleChange}
      fullWidth
      sx={{ mb: 1 }}
    />
  );
};
