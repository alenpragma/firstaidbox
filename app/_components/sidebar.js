"use client";
import React from "react";
import Image from "next/image";
import SidebarItems from "./sidebarItems";

const Sidebar = ({ show, setShow }) => {
  return (
    <div className='fixed  z-50'>
      <div
        className={`${
          show ? "hidden  lg:block" : ""
        } bg-[#232323] overflow-y-scroll  z-50 absolute  h-full lg:pr-6 min-h-screen text-white`}
      >
        <div className='flex  bg-[#232323] w-[196px] fixed py-5 px-3  gap-4 mb-[26px]'>
          {/* <Image src={coin} alt='coin' /> */}
          <h2 className='font-bold'>Goodmornong</h2>
          <span onClick={() => setShow(!show)}>ICON</span>
        </div>

        {/* menu items */}
        <div className='mt-14 mb-10'>
          <SidebarItems setShow={setShow} show={show} />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
