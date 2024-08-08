import React, { FC } from 'react';
import {
  MenuItem,
  FormControl,
  InputLabel,
  Select,
  SelectChangeEvent,
} from '@mui/material';
import { IDropdownProps } from './types';

/**
 * Dropdown Component
 *
 * This component renders a dropdown (select) element with a label.
 * It accepts a list of items, an initial value, and a change handler.
 *
 * @component
 * @param {object} props - The props for the Dropdown component.
 * @param {string} props.label - The label for the dropdown.
 * @param {Array<{ label: string, value: string }>} props.items - The list of items to display in the dropdown. Each item should have a label and a value.
 * @param {string} [props.initialValue] - The initial value of the dropdown to select by default.
 * @param {function} props.onChange - The function to call when the selected value changes. Receives the selected value as an argument.
 * @returns {JSX.Element} The rendered Dropdown component.
 *
 * @example
 * <Dropdown
 *   label="Gender"
 *   items={[
 *     { label: 'Male', value: 'male' },
 *     { label: 'Female', value: 'female' },
 *   ]}
 *   initialValue="male"
 *   onChange={(value) => console.log(value)}
 * />
 */

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
