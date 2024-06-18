"use client";

import React, { useEffect, useState } from "react";
import RSelect, { StylesConfig, Props } from "react-select";
import { FormInput } from "./FormInput";
import FormLabel from "./FormLabel";
import FieldWrapper from "./FieldWrapper";
import { cn } from "@/libs/utils";
import { IBaseInputProps, IFormSelectOptions } from "./form";

export type IFormSelectStyles = StylesConfig;

export interface IFormSelectProps extends IBaseInputProps {
  isSearchable?: boolean;
  options: IFormSelectOptions[];
  enableCustomInput?: boolean;
  selectProps?: Props;
  onChange?: (name: string, value: any) => void;
  onBlur?: (name: string, value: boolean) => void;
}

export const FormSelect: React.FC<IFormSelectProps> = ({
  name,
  value,
  options,
  isSearchable = true,
  enableCustomInput,
  selectProps,
  disabled,
  readOnly,
  onChange,
  onBlur,
  isRequired,
  label,
  labelStyles,
  containerStyles,
  placeholder,
  id,
  error,
  helperText,
  touched,
}) => {
  const [dropdownOptions, setDropdownOptions] = useState<
    {
      label: string;
      value: string;
    }[]
  >([]);
  const [otherValue, setOtherValue] = useState<string>("");
  const [otherEnabled, setOtherEnabled] = useState<boolean>(false);

  const handleBlur = () => {
    if (onBlur) {
      onBlur(name, true);
    }
  };

  useEffect(() => {
    if (options) {
      const tempOptions = [...options];
      if (enableCustomInput) {
        tempOptions.push({
          value: "Other",
          label: "Other, Please Specify",
        });
      }
      setDropdownOptions(tempOptions);
    }
  }, [options, enableCustomInput]);

  useEffect(() => {
    if (!selectProps?.isMulti && enableCustomInput) {
      if (typeof value === "string" && value) {
        if (
          dropdownOptions?.findIndex((item) => item?.value === value) === -1
        ) {
          setOtherEnabled(true);
          setOtherValue(value);
        }
      }
    }
  }, [value]);

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
      <RSelect
        name={name}
        id={id || name}
        placeholder={placeholder}
        value={
          otherEnabled
            ? {
                label: "Other, Please Specify",
                value: "Other",
              }
            : value
            ? selectProps?.isMulti
              ? dropdownOptions?.filter((item) => value?.includes(item?.value))
              : dropdownOptions?.find((item) => item?.value === value)
            : null
        }
        onChange={(changeValue: any) => {
          if (onChange) {
            if (
              changeValue?.value === "Other" &&
              changeValue?.label === "Other, Please Specify"
            ) {
              setOtherEnabled(true);
              onChange(name, otherValue);
            } else {
              setOtherEnabled(false);
              if (selectProps?.isMulti) {
                onChange(
                  name,
                  changeValue?.map((v: any) => v?.value)
                );
              } else {
                onChange(name, changeValue?.value);
              }
            }
          }
        }}
        onBlur={handleBlur}
        options={dropdownOptions}
        isDisabled={disabled}
        isSearchable={isSearchable}
        menuPlacement='auto'
        isClearable
        {...selectProps}
        unstyled
        classNames={{
          container: () => cn("w-full min-w-none h-auto min-h-none"),
          control: ({ isFocused, isMulti }) =>
            cn(
              "w-full  pl-3 ",
              isMulti ? "!min-h-9 h-auto" : "h-11 !min-h-none",
              "rounded-md border border-[#D8DDE3] bg-white hover:cursor-pointer text-sm shadow-sm transition-colors",
              "flex ",
              isFocused && "outline-none ring-1 ring-ring",
              readOnly && "ring-0"
            ),
          input: () => "",
          valueContainer: () => "gap-[4px] py-1 ",
          singleValue: () => "",
          multiValue: () =>
            "bg-gray-100 rounded items-center py-0.5 pl-2 pr-1 gap-1.5 ",
          multiValueLabel: () => "py-0.5",
          multiValueRemove: () =>
            "border border-gray-200 bg-white hover:bg-red-50 hover:text-red-800 text-gray-500 hover:border-red-300 rounded-md",
          indicatorsContainer: () => "",
          clearIndicator: () =>
            "text-gray-500 p-1 rounded-md hover:bg-red-50 hover:text-red-800",
          indicatorSeparator: () => "",
          dropdownIndicator: () =>
            "p-1 hover:bg-gray-100 text-gray-500 rounded-md hover:text-black ",
          menu: () => "p-1 mt-2 bg-white rounded-md border border-none",
          groupHeading: () => "ml-3 mt-2 mb-1 text-gray-500 text-sm",
          placeholder: () => "text-[#6A6E76] font-normal text-sm pl-1 py-0.5 ",
          option: ({ isSelected, isFocused }) =>
            cn(
              "text-base text-[#12151C] font-medium hover:cursor-pointer px-3 py-2 bg-[#FAFAFA] rounded",
              isFocused && "bg-[#6A6E76] active:bg-gray-100 text-white ",
              isSelected && "text-white bg-gray-100"
            ),
          noOptionsMessage: () =>
            "text-gray-500 p-2 bg-gray-50 border border-dashed border-gray-200 rounded-sm",
        }}
      />
      {otherEnabled && (
        <div className='w-full'>
          <FormInput
            name={`select-other-${name}`}
            value={otherValue}
            onChange={(e) => {
              onChange && onChange(name, e.target.value);
              setOtherValue(e.target.value);
            }}
            inputStyles='mt-4'
          />
        </div>
      )}
    </FieldWrapper>
  );
};
