import DashboardCards from "@/components/DashboardCards";
import FileUploaderTest from "@/components/File";
import { FormInput } from "@/components/FormInput";
import Sidebar from "@/components/Sidebar";
import ViewDetailsCard from "@/components/ViewDetailsCard";
import Image from "next/image";
import { BiDollar } from "react-icons/bi";
import { BsHddStack } from "react-icons/bs";
import { IoDocumentTextOutline } from "react-icons/io5";
import { MdOutlinePeopleAlt } from "react-icons/md";

export default function Home() {
  return (
    <>
      <div className='flex items-start gap-5'>
        <div className='w-1/5'>
          <DashboardCards
            icon={<BiDollar className='text-2xl' />}
            subtitle='No of funds'
            value={4}
          />
        </div>
        <div className='w-1/5'>
          <DashboardCards
            icon={<MdOutlinePeopleAlt className='text-2xl' />}
            subtitle='Investors'
            value={44}
          />
        </div>
        <div className='w-1/5'>
          <DashboardCards
            icon={<BsHddStack className='text-2xl' />}
            subtitle='Schemes'
            value={12}
          />
        </div>
        <div className='w-1/5 flex flex-col gap-3'>
          <ViewDetailsCard
            icon={<IoDocumentTextOutline className='text-2xl' />}
            subtitle='View Reports >>'
            value={"Reports"}
          />
          <ViewDetailsCard
            icon={<IoDocumentTextOutline className='text-2xl' />}
            subtitle='View KYC info >>'
            value={"KYC’s"}
          />
        </div>
      </div>
      <div className='flex items-start gap-5 mt-10 w-full'>
        <ViewDetailsCard
          icon={<IoDocumentTextOutline className='text-2xl' />}
          subtitle='Committed'
          value={"150 Crores"}
          className='w-1/5'
        />
        <ViewDetailsCard
          icon={<IoDocumentTextOutline className='text-2xl' />}
          subtitle='Called'
          value={"120 Crores"}
          className='w-1/5'
        />
        <ViewDetailsCard
          icon={<IoDocumentTextOutline className='text-2xl' />}
          subtitle='Committed'
          value={"150 Crores"}
          className='w-1/5'
        />
        <ViewDetailsCard
          icon={<IoDocumentTextOutline className='text-2xl' />}
          subtitle='Committed'
          value={"150 Crores"}
          className='w-1/5'
        />
      </div>
    </>
  );
}
