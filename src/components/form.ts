import { ReactElement } from "react";

export interface IFieldControlProps {
  error?: any;
  touched?: any;
  helperText?: string;
  children: ReactElement;
  isDisabled?: boolean;
  isReadOnly?: boolean;
  //   styles
  containerStyles?: string;
  inputContainerStyles?: string;
}

export interface IBaseInputProps {
  name: string;
  id?: string;
  value?: any;
  placeholder?: string;
  disabled?: boolean;
  readOnly?: boolean;
  label?: string;
  isRequired?: boolean;
  error?: any;
  touched?: any;
  helperText?: string;

  // styles
  labelStyles?: string;
  containerStyles?: string;
}

export interface IFormSelectOptions {
  label: string;
  value: any;
}
