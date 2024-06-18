import React from "react";
import Image from "next/image";
import { FaRegBell } from "react-icons/fa";

interface UserProfileCardProps {
  imageUrl: string;
  name: string;
  role: string;
}

const UserProfileCard: React.FC<UserProfileCardProps> = ({
  imageUrl,
  name,
  role,
}) => {
  return (
    <div className='flex items-center gap-5'>
      <div className='bg-[#E9E9EB] w-10 h-10 rounded-full flex items-center justify-center'>
        <FaRegBell className='text-xl' />
      </div>
      <div className='flex items-start gap-2'>
        <Image
          alt='profile picture'
          src={imageUrl}
          quality={100}
          width={50} // Adjusted width for better fit
          height={50} // Adjusted height for better fit
          className='rounded-full w-10'
        />
        <div>
          <h1 className='font-semibold text-sm'>{name}</h1>
          <h2 className='text-gray-300 text-xs font-normal mt-1'>{role}</h2>
        </div>
      </div>
    </div>
  );
};

export default UserProfileCard;
