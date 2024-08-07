export interface IDropdownProps {
  label: string;
  items: { value: string; label: string }[];
  initialValue: string;
  onChange: (value: string) => void;
}
