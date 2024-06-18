"use client";

import * as React from "react";
import * as RadioGroupPrimitive from "@radix-ui/react-radio-group";
import { IoCheckmarkOutline } from "react-icons/io5";
import FormLabel from "./FormLabel";
import { FormInput } from "./FormInput";
import FieldWrapper from "./FieldWrapper";
import { cn } from "@/libs/utils";
import { IBaseInputProps } from "./form";

export interface IRadioGroupProps extends IBaseInputProps {
  options?: string[];
  className?: string;
  enableCustomInput?: boolean;
  onChange?: (name: string, value: string) => void;
  onBlur?: (name: string, value: boolean) => void;
}

const RadioGroup = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Root>,
  IRadioGroupProps
>(
  (
    {
      name,
      value,
      onBlur,
      onChange,
      disabled,
      enableCustomInput,
      readOnly,
      options,
      className,
      isRequired,
      label,
      labelStyles,
      containerStyles,
      id,
      error,
      helperText,
      placeholder,
      touched,
    },
    ref
  ) => {
    const [otherValue, setOtherValue] = React.useState<string>("");
    const [otherEnabled, setOtherEnabled] = React.useState<boolean>(false);

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
        <RadioGroupPrimitive.Root
          id={id || name}
          name={name}
          className={cn(
            "flex w-full flex-col flex-wrap gap-4 pt-1",
            disabled && "pointer-events-none cursor-not-allowed opacity-50",
            readOnly && "pointer-events-none cursor-not-allowed",
            className
          )}
          onValueChange={(e) => {
            if (onChange) {
              if (e === "Other") {
                setOtherEnabled(true);
                onChange(name, otherValue);
              } else {
                setOtherEnabled(false);
                onChange(name, e);
              }
            }
          }}
          onBlur={() => {
            if (onBlur) {
              onBlur(name, true);
            }
          }}
          value={value}
          ref={ref}
        >
          {options?.map((option: string, index: number) => (
            <div key={`${option}-${index}`} className='flex items-center gap-2'>
              <RadioGroupItem id={`${name}-${option}-${index}`} value={option}>
                {option}
              </RadioGroupItem>
              <FormLabel
                htmlFor={`${name}-${option}-${index}`}
                className='mb-0 font-normal leading-none'
              >
                {option}
              </FormLabel>
            </div>
          ))}
          {enableCustomInput && (
            <div className='flex items-center gap-2'>
              <RadioGroupItem id={`${name}-other`} value='Other' />
              <FormLabel
                className='mb-0 font-normal leading-none'
                htmlFor={`${name}-other`}
              >
                Other:
              </FormLabel>
              <FormInput
                name={`radio-other-${name}`}
                inputStyles='max-w-[300px] ml-3'
                value={otherValue}
                onChange={(e) => {
                  onChange && onChange(name, e?.target?.value);
                  setOtherValue(e.target.value);
                }}
                disabled={!otherEnabled}
                placeholder='Please specify'
              />
            </div>
          )}
        </RadioGroupPrimitive.Root>
      </FieldWrapper>
    );
  }
);

RadioGroup.displayName = RadioGroupPrimitive.Root.displayName;

const RadioGroupItem = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Item>
>(({ className, ...props }, ref) => {
  return (
    <RadioGroupPrimitive.Item
      ref={ref}
      className={cn(
        "focus-visible:ring-ring relative h-5 w-5 rounded-full border-[2px] border-[#D7DDE9] shadow focus:outline-none focus-visible:ring-1 disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      {...props}
    >
      <RadioGroupPrimitive.Indicator className='absolute -top-[2px] right-[-1.5px] flex h-5 w-5 items-center justify-center rounded-full bg-[#202632]'>
        <IoCheckmarkOutline className=' text-white' />
      </RadioGroupPrimitive.Indicator>
    </RadioGroupPrimitive.Item>
  );
});

RadioGroupItem.displayName = RadioGroupPrimitive.Item.displayName;

export { RadioGroup, RadioGroupItem };
