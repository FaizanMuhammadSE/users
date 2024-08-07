import React, { FC } from 'react';
import {
  MenuItem,
  FormControl,
  InputLabel,
  Select,
  SelectChangeEvent,
} from '@mui/material';
import { IDropdownProps } from './types';

export const Dropdown: FC<IDropdownProps> = ({
  label,
  items,
  initialValue,
  onChange,
}) => {
  const [selectedValue, setSelectedValue] = React.useState(initialValue);

  const handleChange = (event: SelectChangeEvent<string>) => {
    const value = event.target.value;
    setSelectedValue(value);
    onChange(value); // Trigger callback with selected value
  };

  return (
    <FormControl fullWidth>
      <InputLabel id={`${label}-select-label`}>{label}</InputLabel>
      <Select
        labelId={`${label}-select-label`}
        id={`${label}-select`}
        value={selectedValue}
        label={label}
        onChange={handleChange}
      >
        {items.map((item) => (
          <MenuItem key={item.value} value={item.value}>
            {item.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};
