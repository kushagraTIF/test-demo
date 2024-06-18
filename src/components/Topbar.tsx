import Image from "next/image";
import React from "react";
import { FaRegBell } from "react-icons/fa";
import UserProfileCard from "./UserProfileCard";

const Topbar = () => {
  return (
    <div className='flex items-center justify-between w-full px-10 pt-5 border-b'>
      <h1 className='text-xl font-bold'>Dashboard</h1>
      <UserProfileCard
        imageUrl='/dp.png'
        name='Floyd Miles'
        role='Fund Manager'
      />
    </div>
  );
};

export default Topbar;
