import { cn } from "@/libs/utils";
import React from "react";

export const FormHelperText: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return <p className={cn("text-xs font-medium text-gray-700")}>{children}</p>;
};

export default FormHelperText;
