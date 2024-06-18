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

const ViewDetailsCard: React.FC<DashboardCardProps> = ({
  icon,
  title,
  subtitle,
  value,
  className,
}) => {
  return (
    <div
      className={`bg-[#F5F5F5] flex items-start gap-5 rounded-lg p-2.5 ${className}`}
    >
      <div className='w-10 h-10 rounded-full bg-[#E9E9EB] flex items-center justify-center'>
        {icon}
      </div>
      <div className=''>
        {title && <p className='text-sm text-[#6A6E76] font-normal'>{title}</p>}
        {subtitle && <p className='text-lg font-semibold'>{value}</p>}
        <p className='text-sm text-[#6A6E76] font-normal mt-1'>{subtitle}</p>
      </div>
    </div>
  );
};

export default ViewDetailsCard;
