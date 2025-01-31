import React from "react";
import Link from "next/link";
import { FaFacebookSquare } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";
import { BsYoutube } from "react-icons/bs";
import { BsFillTelephoneFill } from "react-icons/bs";

import { CgMail } from "react-icons/cg";
import { FaLinkedin } from "react-icons/fa6";



const Topbar = () => {
  return (
    <div className="bg-p-green py-[15px]">
      <div className="max-w-container mx-auto px-[10px]">
        <div className="flex justify-between items-center ">
          <div className="flex gap-x-2 md:gap-x-4">
            <Link href={"https://www.facebook.com/goodmorningaid"} target="_blank"><FaFacebookSquare className="text-[14px] md:text-[30px] text-white" /></Link>
            <Link href={"https://www.linkedin.com/company/goodmorning-aid/"} target="_blank" ><FaLinkedin  className="text-[14px] md:text-[30px] text-white" /></Link>
            <Link href={"https://www.youtube.com/@goodmorningaid"}target="_blank" ><BsYoutube className="text-[14px] md:text-[35px] text-white" /></Link>
          </div>
          <div className="flex gap-x-2 md:gap-x-6">
            <div className="">
            <Link href="tel:01816-575225" className="flex md:gap-x-2 items-center text-white ">
            <BsFillTelephoneFill className="text-[14px] md:text-[35px] text-white " />
            <span className="text-[10px] md:text-base">+8801511899175</span> </Link>
            </div>
            <div className="">
            <Link href="mailto:goodmorning@gmail.com"  className="flex md:gap-x-2 items-center text-white ">
            <CgMail className="text-[14px] md:text-[35px] text-white " />
             <span className="text-[10px] md:text-base">goodmorningaid@gmail.com</span></Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
