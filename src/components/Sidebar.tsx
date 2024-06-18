"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { FC } from "react";
import { FaDollarSign, FaRegFile, FaRegUser } from "react-icons/fa";
import { HiOutlineCube } from "react-icons/hi";
import { LuUsers } from "react-icons/lu";
import { SiNintendogamecube } from "react-icons/si";

const SidebarContentV1 = [
  { icon: HiOutlineCube, label: "Dashboard", href: "/" },
  { icon: LuUsers, label: "Investors", href: "/investors" },
  { icon: SiNintendogamecube, label: "Portfolio Companies", href: "#" },
];
const SidebarContentV2 = [
  { icon: FaDollarSign, label: "Funds", href: "#" },
  { icon: FaRegFile, label: "Documents", href: "#" },
];
const SidebarContentV3 = [
  { icon: FaRegUser, label: "Profile Settings", href: "#" },
];

interface SidebarItemProps {
  icon: any;
  label: string;
  href: string;
}

const SidebarItem: FC<SidebarItemProps> = ({ icon: Icon, label, href }) => {
  const pathname = usePathname();
  const isActive = pathname === href;
  return (
    <Link
      href={href}
      className={`flex items-center p-2 text-[#12151C] text-base font-medium ${
        isActive ? "bg-[#6A6E76] text-white group rounded-lg" : ""
      }`}
    >
      <Icon
        className={`text-xl text-[#12151C] ${isActive ? "text-white" : ""}`}
      />
      <span className='ms-3'>{label}</span>
    </Link>
  );
};

const Sidebar = () => {
  const router = useRouter();

  return (
    <div>
      {/* <button
        data-drawer-target='separator-sidebar'
        data-drawer-toggle='separator-sidebar'
        aria-controls='separator-sidebar'
        type='button'
        className='inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600'
      >
        <span className='sr-only'>Open sidebar</span>
        <svg
          className='w-6 h-6'
          aria-hidden='true'
          fill='currentColor'
          viewBox='0 0 20 20'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            clip-rule='evenodd'
            fill-rule='evenodd'
            d='M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z'
          ></path>
        </svg>
      </button> */}

      <aside
        id='separator-sidebar'
        className=' w-64 h-screen transition-transform -translate-x-full sm:translate-x-0'
        aria-label='Sidebar'
      >
        <div className='h-full px-5 py-5 overflow-y-auto bg-[#F6F6F6]'>
          <Link href={"/"}>
            <h1 className='text-[#12151C] text-[32px] font-bold mb-5 pl-3 cursor-pointer'>
              Faas
            </h1>
          </Link>
          <ul className='space-y-2 font-medium'>
            {SidebarContentV1?.map(
              ({ icon: IconComponent, label, href }, index) => (
                <SidebarItem
                  key={index}
                  icon={IconComponent}
                  label={label}
                  href={href}
                />
              )
            )}
          </ul>
          {/* Separators */}
          <div className='pt-4 mt-4 space-y-2 font-medium border-t border-[#C4C9D4]'>
            {SidebarContentV2.map((item, index) => (
              <SidebarItem
                key={index}
                icon={item?.icon}
                label={item?.label}
                href={item?.href}
              />
            ))}
          </div>
          <div className='pt-4 mt-4 space-y-2 font-medium border-t border-[#C4C9D4]'>
            {SidebarContentV3.map((item, index) => (
              <SidebarItem
                key={index}
                icon={item?.icon}
                label={item?.label}
                href={item?.href}
              />
            ))}
          </div>
        </div>
      </aside>
    </div>
  );
};

export default Sidebar;
