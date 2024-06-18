import * as React from "react";

import FormLabel from "./FormLabel";
import FieldWrapper from "./FieldWrapper";
import { cn } from "@/libs/utils";
import { IBaseInputProps } from "./form";

export interface ITextareaProps extends IBaseInputProps {
  label?: string;
  isRequired?: boolean;
  labelStyles?: string;
  containerStyles?: string;
  textAreaProps?: React.TextareaHTMLAttributes<HTMLTextAreaElement>;
  textAreaStyles?: string;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLTextAreaElement>) => void;
}

const FormTextarea = React.forwardRef<HTMLTextAreaElement, ITextareaProps>(
  (
    {
      name,
      label,
      isRequired,
      labelStyles,
      containerStyles,
      disabled,
      placeholder,
      readOnly,
      textAreaProps,
      textAreaStyles,
      value,
      id,
      onBlur,
      onChange,
      error,
      helperText,
      touched,
    },
    ref
  ) => {
    return (
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
        <textarea
          id={id || name}
          name={name}
          className={cn(
            "placeholder:text-muted-foreground focus-visible:ring-ring flex min-h-[60px] w-full rounded-md border border-[#D8DDE3] bg-transparent px-3 py-5 text-sm shadow-sm placeholder:text-sm placeholder:text-[#6A6E76] focus-visible:outline-none focus-visible:ring-1 disabled:cursor-not-allowed disabled:opacity-50",
            readOnly && "focus-visible:ring-0",
            textAreaStyles
          )}
          ref={ref}
          onChange={onChange}
          onBlur={onBlur}
          value={value}
          disabled={disabled}
          readOnly={readOnly}
          placeholder={placeholder}
          {...textAreaProps}
        />
      </FieldWrapper>
    );
  }
);
FormTextarea.displayName = "FormTextarea";

export { FormTextarea };
