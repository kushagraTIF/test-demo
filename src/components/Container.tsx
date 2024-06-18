import React from "react";
import { twMerge } from "tailwind-merge";

const Container: React.FC<{
  children: React.ReactNode;
  className?: string;
}> = ({ children, className }) => {
  return <div className={twMerge("container", className)}>{children}</div>;
};

export default Container;
