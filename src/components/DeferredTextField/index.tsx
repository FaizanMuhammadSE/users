import { useState, ChangeEvent, FC, useDeferredValue, useEffect } from 'react';
import { TextField } from '@mui/material';
import { IDeferredTextFieldProps } from './types';

/**
 * DeferredTextField Component
 *
 * This component is a text field with a deferred change handler. It includes a label, placeholder,
 * and maximum length for the input. The `onChange` event is deferred to optimize performance.
 *
 * @component
 * @param {object} props - The props for the DeferredTextField component.
 * @param {string} props.label - The label for the text field.
 * @param {string} props.placeholder - The placeholder text for the text field.
 * @param {number} props.maxLength - The maximum length of the input.
 * @param {function} props.onChange - The function to call when the input value changes.
 * @returns {JSX.Element} The rendered DeferredTextField component.
 *
 * @example
 * <DeferredTextField
 *   label="Name"
 *   placeholder="Enter your name"
 *   maxLength={50}
 *   onChange={(e) => console.log(e.target.value)}
 * />
 */

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
    const { value } = event.target;
    if (maxLength && value.length > maxLength) return;
    setText(value);
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
