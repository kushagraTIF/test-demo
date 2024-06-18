import * as React from "react";
import FieldWrapper from "./FieldWrapper";
import FormLabel from "./FormLabel";
import { Input } from "./input";
import { cn } from "@/libs/utils";
import { IBaseInputProps } from "./form";

export interface IInputProps extends IBaseInputProps {
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  inputStyles?: string;
  type?: string;
  inputProps?: React.InputHTMLAttributes<HTMLInputElement>;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  leftIconBoxStyles?: string;
  rightIconBoxStyles?: string;
  inputContainerStyles?: string;
}

const FormInput = React.forwardRef<HTMLInputElement, IInputProps>(
  (
    {
      label,
      type,
      name,
      isRequired,
      labelStyles,
      leftIcon,
      rightIcon,
      leftIconBoxStyles,
      rightIconBoxStyles,
      containerStyles,
      inputStyles,
      value,
      disabled,
      inputProps,
      placeholder,
      readOnly,
      id,
      onChange,
      onBlur,
      error,
      helperText,
      touched,
      inputContainerStyles,
    },
    ref
  ) => (
    <FieldWrapper
      containerStyles={containerStyles}
      error={error}
      helperText={helperText}
      readOnly={readOnly}
      touched={touched}
    >
      {label && (
        <FormLabel
          htmlFor={name}
          isRequired={isRequired}
          className={labelStyles}
        >
          {label}
        </FormLabel>
      )}
      <div className={cn("relative h-9 w-full", inputContainerStyles)}>
        {leftIcon ? (
          <div
            className={cn(
              "absolute bottom-0 left-0 top-1 flex w-10 items-center justify-center overflow-hidden rounded-l-md",
              "border border-transparent",
              leftIconBoxStyles
            )}
          >
            {leftIcon}
          </div>
        ) : null}
        <Input
          id={id || name}
          name={name}
          type={type}
          placeholder={placeholder}
          value={value}
          disabled={disabled}
          readOnly={readOnly}
          className={cn(
            readOnly ? "focus-visible:ring-0" : "",
            leftIcon ? "pl-9" : "",
            rightIcon ? "pr-9" : "",
            inputStyles
          )}
          onChange={onChange}
          onBlur={onBlur}
          ref={ref}
          {...inputProps}
        />
        {rightIcon ? (
          <div
            className={cn(
              "absolute bottom-0 right-0 top-0 flex w-9 items-center justify-center overflow-hidden rounded-r-md",
              "border border-transparent",
              rightIconBoxStyles
            )}
          >
            {rightIcon}
          </div>
        ) : null}
      </div>
    </FieldWrapper>
  )
);

FormInput.displayName = "FormInput";

export { FormInput };
