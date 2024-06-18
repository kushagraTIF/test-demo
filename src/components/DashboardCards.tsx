import React from "react";
import { BiDollar } from "react-icons/bi";

// Define the prop types
interface DashboardCardProps {
  icon: JSX.Element; // Assuming the icon is a JSX element
  title?: string; // Optional title
  subtitle?: string; // Optional subtitle
  value: string | number; // Value can be either string or number
  className?: string;
}

const DashboardCards: React.FC<DashboardCardProps> = ({
  icon,
  title,
  subtitle,
  value,
  className,
}) => {
  return (
    <div
      className={`bg-[#FAFAFA] border border-[#C4C9D4] rounded-lg p-5 ${className}`}
    >
      <div className='w-10 h-10 rounded-full bg-[#E9E9EB] flex items-center justify-center'>
        {icon}
      </div>
      <div className='mt-5'>
        {title && <p className='text-sm text-[#6A6E76] font-normal'>{title}</p>}
        {subtitle && (
          <p className='text-sm text-[#6A6E76] font-normal'>{subtitle}</p>
        )}
        <p className='text-2xl font-semibold mt-1'>{value}</p>
      </div>
    </div>
  );
};

export default DashboardCards;
