"use client";
import React, { useState } from "react";

const Dashboard = () => {
  const [show, setShow] = useState(false);
  return (
    <div className=' '>
      <div className='flex justify-between bg-gray-900 px-5 p-1'>
        <div>
          <h2 className='text-2xl py-3 text-white'>header</h2>
        </div>
        <div className=' mt-3 lg:hidden'>
          <span
            onClick={() => setShow(!show)}
            className='text-white border-2 p-3 cursor-pointer'
          >
            ICON
          </span>
        </div>
      </div>
      <div className='flex gap-3 relative'>
        <div
          className={`${
            show
              ? "-ml-[200px] lg:ml-0 transition-all duration-100"
              : "transition-all duration-100"
          }     bg-gray-800 z-40`}
        >
          <div className='px-5 h-screen w-[200px]'>
            <h2 className='text-2xl my-2 py-2 text-white hover:bg-[#4e4e52]'>
              Hello
            </h2>
            <h2 className='text-2xl my-2 py-2 text-white hover:bg-[#4e4e52]'>
              Hello
            </h2>
            <h2 className='text-2xl my-2 py-2 text-white hover:bg-[#4e4e52]'>
              Hello
            </h2>
            <h2 className='text-2xl my-2 py-2 text-white hover:bg-[#4e4e52]'>
              Hello
            </h2>
          </div>
        </div>
        <div>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque
            amet qui quae id, asperiores consequatur corrupti voluptatibus rem
            repellendus ea ullam quis ducimus doloribus cupiditate alias
            doloremque vitae quas quibusdam laudantium est? Accusamus vero ex
            voluptate labore asperiores doloremque pariatur.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
