import { cn } from "@/libs/utils";
import * as React from "react";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => (
    <input
      type={type}
      className={cn(
        "ring-offset-background focus-visible:ring-ring flex h-10 w-full rounded-md border border-[#D8DDE3] bg-white px-3 py-5 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-sm placeholder:text-[#6A6E76] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
        className,
      )}
      ref={ref}
      {...props}
    />
  ),
);
Input.displayName = "Input";

export { Input };
