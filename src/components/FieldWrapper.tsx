import React from "react";
import { cn } from "@/libs/utils";
import FormHelperText from "./FormHelperText";

export interface IFieldWrapperProps {
  error?: any;
  touched?: any;
  helperText?: string;
  children: React.ReactNode;
  readOnly?: boolean;
  //   styles
  containerStyles?: string;
}

/**
 * @description This component is used to wrap the input components and display the error message and helper text.
 */
export const FieldWrapper: React.FC<IFieldWrapperProps> = ({
  error,
  touched = false,
  helperText,
  containerStyles,
  readOnly,
  children,
}) => (
  <div
    className={cn(
      `form-control w-full`,
      readOnly ? "pointer-events-none" : "",
      containerStyles,
    )}
  >
    <div className={cn("w-full shrink-0", "sm:flex-1")}>
      {children}
      {touched && error && (
        <div className={cn("mt-2 w-full")}>
          <p className={cn("text-xs font-medium text-red-400")}>{error}</p>
        </div>
      )}
      {helperText && (
        <div className={cn("break-word mt-2 w-full")}>
          <FormHelperText>{helperText}</FormHelperText>
        </div>
      )}
    </div>
  </div>
);

export default FieldWrapper;
