"use client";

import { FormInput } from "@/components/FormInput";
import PasswordInput from "@/components/PasswordInput";
import { Button } from "@/components/buttonNew";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { BiLock, BiUser } from "react-icons/bi";

const Login = () => {
  const router = useRouter();
  return (
    <div className='flex items-center justify-center h-screen px-2 md:px-0'>
      <div className='max-w-xl w-full py-12 bg-[#F5F5F8] rounded-2xl flex flex-col items-center justify-center gap-5'>
        <Image
          src={"/logo.svg"}
          alt='logo'
          height={100}
          width={100}
          className='w-12'
        />
        <div className='mx-auto mt-3'>
          <h1 className='text-2xl text-[#12151C] font-bold mx-auto text-center'>
            Welcome Back!
          </h1>
          <p className='text-lg font-normal text-[#4D515B] text-center mt-5'>
            Login to supercharge your fund management
          </p>
        </div>
        <div className='w-full flex flex-col gap-5 mt-5'>
          <div className='w-4/5 mx-auto'>
            <FormInput
              name='username'
              label='Username'
              placeholder='Enter the username'
              leftIcon={<BiUser className='text-[#4D515B]' />}
            />
          </div>
          <div className='w-4/5 mx-auto'>
            <PasswordInput
              label='Password'
              name='password'
              placeholder='Enter Password'
              leftIcon={<BiLock className='text-[#4D515B]' />}
            />
            <p className='text-[#12151C] text-sm font-semibold mt-3.5 cursor-pointer flex w-full justify-end'>
              Forgot Password?
            </p>
          </div>
        </div>
        <div className='w-full mx-auto flex items-center justify-center mt-10'>
          <Button
            onClick={() => router.push("/")}
            variant='default'
            className='w-4/5 bg-[#202632] text-white text-sm font-semibold'
          >
            Login
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Login;
