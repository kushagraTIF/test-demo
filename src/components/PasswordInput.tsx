"use client";

import React, { useState } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { FormInput, IInputProps } from "./FormInput";

export const PasswordInput: React.FC<Omit<IInputProps, "type">> = (props) => {
  const [show, setShow] = useState(false);

  const toggle = () => {
    setShow((prev) => !prev);
  };

  return (
    <FormInput
      type={show ? "text" : "password"}
      rightIcon={
        <button type='button' onClick={() => toggle()}>
          {show ? (
            <FiEye size='16px' className='text-[#C4C9D4]' />
          ) : (
            <FiEyeOff size='16px' className='text-[#C4C9D4]' />
          )}
        </button>
      }
      {...props}
    />
  );
};

export default PasswordInput;
