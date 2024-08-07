export interface Option {
  value: string;
  label: string;
}

export interface IDeferredTextFieldProps {
  label: string;
  placeholder?: string;
  maxLength?: number;
  onChange: (value: string) => void;
}
