'use client';
import React, { useEffect, useState } from "react";
import Container from "../container/Container";
import backgroundImage from "../../../public/first-aid-img/background.jpg";
import Image from "next/image";

const Order = () => {


  return (
    <div
      className=""
      style={{
        backgroundImage: `url(${backgroundImage.src})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="w-full h-full bg-[#2ACB35B2] py-[50px] md:py-[90px]">
        <Container>
          <div className="flex flex-col items-center justify-center w-full ">
            <h1 className="text-[#FFF] text-[40px] md:text-[60px] lg:text-[80px] font-bold text-center">
              এখনই অর্ডার করুন আমাদের স্পেশাল ফার্স্ট এইড বক্স
            </h1>
            <div className="lg:flex justify-center items-center gap-10 text-center ">
              <button className="lg:w-[360px] w-[250px] py-5 border-2 border-white text-[#131313] lg:text-[40px] text-[24px] rounded-md bg-white duration-500">
                অর্ডার করুন
              </button>
              <button className="lg:w-[360px] w-[250px] py-5 border-2 border-white text-[#131313] lg:text-[40px] text-[24px] rounded-md hover:bg-white duration-500 lg:mt-0 mt-5">
                কল করুন
              </button>
            </div>
          </div>
        </Container>
      </div>

    </div>
  );
};

export default Order;
