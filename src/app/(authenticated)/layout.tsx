import Sidebar from "@/components/Sidebar";
import Topbar from "@/components/Topbar";
import React, { ReactNode } from "react";

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className='flex overflow-hidden'>
      <Sidebar />
      <div className='w-full overflow-y-auto h-screen'>
        <Topbar />
        <main className='p-10'>{children}</main>
      </div>
    </div>
  );
};

export default layout;
