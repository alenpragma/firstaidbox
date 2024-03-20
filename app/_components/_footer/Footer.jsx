import React from "react";
import Container from "../container/Container";
import banner from "../../_svg/gmlogo.svg";
import redCrecent from "../../../public/first-aid-img/bdrcs-logo.png";
import ecas from "../../../public/first-aid-img/olc.png";
import Image from "next/image";
import { IoMdCall } from "react-icons/io";
import { LuMail } from "react-icons/lu";
import { FaLocationDot } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="bg-[#EAEAEA]">
      <Container>
        <div className="lg:flex justify-between">
          <div className="lg:w-[35%] w-full flex flex-col justify-between gap-8 bg-[#FFF] lg:p-14 md:p-8 p-3 rounded-md">
            <Image className="w-[150px]" src={banner} alt="" />
            <p>
              ফাস্ট এইড বাক্সটির কোনো পন্য আপনার প্রয়জন হলে আমাদের শপ থেকে নিতে
              পারেন
            </p>
            <div className="flex lg:justify-start justify-center items-center w-full">
              <button className="px-5 py-3 bg-[#2ACB35] rounded-md text-[#FFF] w-[220px] font-semibold text-[24px]">
                Shop Now
              </button>
            </div>
          </div>
          <div className="lg:w-[70%] md:w-full w-full lg:flex justify-between gap-5 relative bg-[#EAEAEA] lg:border-l-[16px] border-l-0 border-[#2ACB35] lg:p-14 md:p-8 p-3 border-b-2">
            <div className="lg:flex-1 lg:mt-0 mt-5">
              <h2 className="text-[18px] font-semibold mb-5">
                আমাদের মেম্বারশিপ
              </h2>
              <div className="flex justify-start gap-5">
                <Image className="w-14 rounded-full" src={redCrecent} alt="" />
                <Image className="w-14 rounded-full" src={ecas} alt="" />
              </div>
            </div>
            <div className="lg:flex-1 lg:mt-0 mt-5">
              <h2 className="text-[18px] font-semibold mb-5">
                গুরুত্ব পূর্ণ লিঙ্ক সমূহ
              </h2>
              <div className="flex flex-col gap-4">
                <p className="hover:text-[#2ACB35] duration-300 cursor-pointer">
                  Terms & Condition
                </p>
                <p className="hover:text-[#2ACB35] duration-300 cursor-pointer">
                  Privacy Policy
                </p>
                <p className="hover:text-[#2ACB35] duration-300 cursor-pointer">
                  Refund Policy
                </p>
                <p className="hover:text-[#2ACB35] duration-300 cursor-pointer">
                  Book Apointment
                </p>
              </div>
            </div>
            <div className="lg:flex-1 lg:mt-0 mt-5">
              <h2 className="text-[18px] font-semibold mb-5">
                আমাদের সম্পর্কে কিছু কথা
              </h2>
              <p>
                ফাস্ট এইড বাক্সটির কোনো পন্য আপনার প্রয়জন হলে আমাদের শপ থেকে
                নিতে পারেন
              </p>
            </div>
          </div>
        </div>
        <div className="py-5 lg:flex justify-between items-center">
          <div>
            <h2>আমাদের সাথে যোগাযোগ করুন</h2>
          </div>
          <div className="flex justify-start items-center gap-3 lg:mt-0 mt-5">
            <span>
              <IoMdCall className="text-[28px]" />
            </span>
            <h2>+880 1816 575 225</h2>
          </div>
          <div className="flex justify-start items-center gap-3 lg:mt-0 mt-5">
            <span>
              <LuMail className="text-[28px]" />
            </span>
            <h2>goodmorningaid@gmail.com</h2>
          </div>
          <div className="flex justify-start items-center gap-3 lg:mt-0 mt-5">
            <span>
              <FaLocationDot className="text-[28px]" />
            </span>
            <h2>Mohila Collage Road, Khagrachari-Sadar</h2>
          </div>
        </div>
      </Container>
      <div className="text-center font-semibold bg-[#777] py-10">
        <p className="text-[14px] text-[#fff]">
          all Right Reserved Good Morning Aid
        </p>
      </div>
    </div>
  );
};

export default Footer;
