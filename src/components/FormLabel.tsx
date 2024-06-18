import { cn } from "@/libs/utils";
import React from "react";

export interface IFormLabelProps
  extends React.LabelHTMLAttributes<HTMLLabelElement> {
  isRequired?: boolean;
  children?: React.ReactNode;
}

export const FormLabel: React.FC<IFormLabelProps> = ({
  children,
  isRequired,
  className,
  ...props
}) => (
  <label
    className={cn(
      "block flex-1 select-none text-sm leading-normal peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
      "mb-2 text-sm font-semibold text-[#12151C]",
      className,
    )}
    {...props}
  >
    {children} {isRequired && <span className="text-red-500">*</span>}
  </label>
);

export default FormLabel;
