"use client";

import * as React from "react";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { FormLabel } from "./FormLabel";
import FieldWrapper from "./FieldWrapper";
import { cn } from "@/libs/utils";
import { ThickCheckIcon } from "@radix-ui/themes";
import { IBaseInputProps } from "./form";

export interface ICheckboxProps extends IBaseInputProps {
  checkboxStyles?: string;
  label?: string;
  isRequired?: boolean;
  labelStyles?: string;
  checkboxProps?: React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>;
  onChange?: (name: string, value: any) => void;
  onBlur?: (name: string, value: boolean) => void;
}

const FormCheckbox = React.forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Root>,
  ICheckboxProps
>(
  (
    {
      checkboxStyles,
      name,
      label,
      isRequired,
      labelStyles,
      containerStyles,
      checkboxProps,
      disabled,
      value,
      onChange,
      onBlur,
      placeholder,
      readOnly,
      id,
      error,
      helperText,
      touched,
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
      <div className='flex items-center gap-[0.5rem] '>
        <CheckboxPrimitive.Root
          id={id || name}
          name={name}
          ref={ref}
          className={cn(
            "focus-visible:ring-ring data-[state=checked]:text-primary-foreground peer h-4 w-4 shrink-0 rounded-sm border-[2px] border-[#D7DDE9] shadow focus-visible:outline-none focus-visible:ring-1 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:border-none data-[state=checked]:bg-[#202632]",
            checkboxStyles
          )}
          checked={value}
          disabled={disabled}
          onCheckedChange={(e) => onChange && onChange(name, e)}
          onBlur={() => onBlur && onBlur(name, true)}
          {...checkboxProps}
        >
          <CheckboxPrimitive.Indicator
            className={cn("flex items-center justify-center text-current")}
          >
            <ThickCheckIcon className='h-2.5 w-2.5 text-white' />
          </CheckboxPrimitive.Indicator>
        </CheckboxPrimitive.Root>
        {label && (
          <FormLabel
            htmlFor={id || name}
            isRequired={isRequired}
            className={cn(
              "text-sm font-medium text-[#12151C] ",
              labelStyles,
              "!mb-0"
            )}
          >
            {label}
          </FormLabel>
        )}
      </div>
    </FieldWrapper>
  )
);

FormCheckbox.displayName = CheckboxPrimitive.Root.displayName;

export { FormCheckbox };
