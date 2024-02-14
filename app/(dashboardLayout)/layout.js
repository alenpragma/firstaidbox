"use client";
import Link from "next/link";
import React, { useState } from "react";
import { IoMenu } from "react-icons/io5";

const Dashboard = ({ children }) => {
  const [show, setShow] = useState(false);
  return (
    <div className='  relative'>
      <div className=' fixed top-0 w-full'>
        <div className=' flex justify-between  bg-gray-900 px-5 p-1'>
          <div>
            <Link href={"/"}>
              <h2 className='text-2xl py-3 text-white'>LOGO</h2>
            </Link>
          </div>
          <div className=' mt-3 lg:hidden'>
            <div>
              <IoMenu
                className='text-white cursor-pointer text-3xl'
                onClick={() => setShow(!show)}
              />
            </div>
          </div>
        </div>
      </div>

      <div className='flex '>
        <div className=' fixed   lg:top-1'>
          <div
            className={`absolute lg:relative top-[64px] lg:top-[50px] left-0 ${
              show
                ? "-ml-[200px] lg:ml-0 transition-all duration-100"
                : "transition-all duration-100"
            }     bg-gray-800 z-40`}
          >
            <div className='px-2 h-screen w-[200px]'>
              <div>
                <Link onClick={() => setShow(!show)} href={"/settings"}>
                  <h2 className='text-lg my-2 p-2 rounded-sm cursor-pointer text-white hover:bg-[#4e4e52]'>
                    Settings
                  </h2>
                </Link>
                <Link onClick={() => setShow(!show)} href={"/orders"}>
                  <h2 className='text-lg my-2 p-2 rounded-sm cursor-pointer text-white hover:bg-[#4e4e52]'>
                    Orders
                  </h2>
                </Link>
                <Link onClick={() => setShow(!show)} href={"/products"}>
                  <h2 className='text-lg my-2 p-2 rounded-sm cursor-pointer text-white hover:bg-[#4e4e52]'>
                    products
                  </h2>
                </Link>
                <h2 className='text-lg my-2 p-2 rounded-sm cursor-pointer  text-white hover:bg-[#4e4e52]'>
                  GoodMorning
                </h2>
                <h2 className='text-lg my-2 p-2 rounded-sm cursor-pointer  text-white hover:bg-[#4e4e52]'>
                  GoodMorning
                </h2>
              </div>
            </div>
          </div>
        </div>
        <div className={` mx-auto top-0 left-0 mt-16`}>
          <div className='p-2 lg:p-4 lg:ms-[200px] mx-auto'>{children}</div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
